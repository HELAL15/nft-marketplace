import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";
import { connectToDB } from "@/lib/mogodb";
import { verifyToken } from "@/middlewares/authMiddleware";
import { JwtPayload } from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    
    await connectToDB();

    // Authenticate user
    const { user, error } = verifyToken(req);
    if (error) {
      return NextResponse.json({ error }, { status: 401 });
    }

    // Fetch user data from the database
    const userId = (user as JwtPayload).userId;
    const userData = await User.findById(userId).select("-password");
    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user: userData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
