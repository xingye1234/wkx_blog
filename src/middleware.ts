import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { cookies } from "next/headers";

export default NextAuth(authConfig).auth;

export const config = {
  //匹配url
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
export function middleware(request: NextRequest) {
  const cookie = cookies();
  const url = request.nextUrl.pathname;

  const auth = cookie.get("token");

  if (url.startsWith("/dashboard")) {
    if (!auth?.value) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (url === "/login") {
    if (!auth?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // console.log("url", url)
  // if (url === "/dashboard") {
  //   const auth = sessionStorage.getItem("user");
  //   if (!auth) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   } else {
  //     return NextResponse.next();
  //   }
  // }
}
