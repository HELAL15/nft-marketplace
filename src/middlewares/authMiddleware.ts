import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const verifyToken = (req: NextRequest) => {
  try {
    console.log("Cookies in request:", req.cookies.getAll()); 

    const token = req.cookies.get("token")?.value;
    if (!token) {
      return { error: "Unauthorized: No token provided" };
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return { user: decoded };
  } catch (error) {
    return { error: "Unauthorized: Invalid token" };
  }
};

