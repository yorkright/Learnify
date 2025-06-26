import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "", { maxAge: 0, path: "/" });
  return response;
}
