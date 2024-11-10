import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/myprofile", "/favorite"],
};
