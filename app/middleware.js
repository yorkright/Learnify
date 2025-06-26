import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("admin-auth")?.value === "true";

  if (request.nextUrl.pathname.startsWith("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
