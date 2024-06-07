import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('next-auth.session-token');
  const adminToken = req.cookies.get('token');

  console.log('Token:', token);
  
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!adminToken) {
      console.log('Admin girişi yapmadı, /auth/admin sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/admin', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/profile')) {
    if (!token) {
      console.log('Kullanıcı girişi yapmadı, /auth/login sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/auth/admin')) {
    if (!token) {
      console.log('Admin girişi yapmadı, /auth/admin sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/admin', req.url));
    } else {
      console.log('Admin giriş yapmış, /admin sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/auth/login')) {
    if (token) {
      console.log('Kullanıcı giriş yapmış, /profile sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/profile', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/auth/login', '/admin', '/auth/admin'],
};
