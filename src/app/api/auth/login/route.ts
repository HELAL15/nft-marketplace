import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/mogodb";
import jwt from "jsonwebtoken";
import { loginSchema } from "@/schemas/loginSchema";
import { formatValidationErrors } from "@/utils/validation";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();

    // Validate input
    const {success , error , data} = loginSchema.safeParse(body);
    if (!success) {
      const errors = error?.flatten()?.fieldErrors || {};
      const formattedErrors = formatValidationErrors(errors);
      return NextResponse.json({ errors: formattedErrors }, { status: 400 });
    }

    const { email, password } = data;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }
    const userAuthed = {
      id: user._id.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email }, JWT_SECRET, { expiresIn: "7d" });

        return NextResponse.json(
          { message: "login succeffully", user, token, status: 200 },
          { status: 200 }
        );
    
       

  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
