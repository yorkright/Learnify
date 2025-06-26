import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60, // 1 hour
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
