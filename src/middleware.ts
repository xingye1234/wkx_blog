import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  //匹配url
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
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
