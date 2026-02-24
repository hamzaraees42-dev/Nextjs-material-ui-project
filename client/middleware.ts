import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("auth_token")?.value;
  const userRole = request.cookies.get("userRole")?.value;

  // 🔒 Protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!token || !userRole) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // ❌ Prevent logged-in users from accessing login
  if (pathname === "/login" && token && userRole) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
