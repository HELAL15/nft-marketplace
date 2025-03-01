import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/mogodb";
import jwt from "jsonwebtoken";
import { userSchema } from "@/schemas/userSchema";
import { formatValidationErrors } from "@/utils/validation";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: Request ) {
  try {
    await connectToDB();
    const body = await req.json();

    const { success, data, error } = userSchema.safeParse(body);

    if (!success) {
      const errors = error?.flatten()?.fieldErrors || {};
      const formattedErrors = formatValidationErrors(errors);
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }

    const { firstName, lastName, phone, email, password } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    const user = {
      id: newUser._id.toString(),
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
    }

    const token = jwt.sign({ userId: newUser._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json(
      { message: "User created successfully", user, token, status: 201 },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
