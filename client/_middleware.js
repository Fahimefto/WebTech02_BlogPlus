import { NextRouter } from "next/router";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(request) {
  const { cookies } = req;
  const jwt = Cookies.get("authToken");
  const url = req.url;
  if (url.includes("/blogs")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/signin");
    }
    try {
      verify(jwt, "fahim");
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect("/signin");
    }
  }
}
