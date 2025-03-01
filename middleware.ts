import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  
  const res = NextResponse.next();
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname === '/profile') {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (token && request.nextUrl.pathname === '/register') {
    return NextResponse.redirect(new URL('/', request.url));
  }


  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  return res;

  // return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login' , '/register']
};