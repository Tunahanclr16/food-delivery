import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('token');
  const sessionToken = req.cookies.get('next-auth.session-token');
  console.log('Token:', token);
  console.log('Session Token:', sessionToken);

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      console.log('Admin girişi yapmadı, giriş sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/admin', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/profile')) {
    if (!token && !sessionToken) {
      console.log('Kullanıcı girişi yapmadı, giriş sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/login', req.url));
    } else if (sessionToken && req.cookies.get('role') !== 'admin') {
      console.log('Admin değil, profile sayfasına erişemez.');
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/auth/admin')) {
    if (token) {
      console.log('Admin giriş yapmış, admin sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  } else if (req.nextUrl.pathname.startsWith('/auth/login')) {
    if (token || sessionToken) {
      console.log('Kullanıcı giriş yapmış, profile sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/profile', req.url));
    } else if (req.cookies.get('role') === 'admin') {
      console.log('Admin giriş yapmamış, login sayfasına yönlendiriliyor.');
      return NextResponse.redirect(new URL('/auth/admin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/auth/login', '/admin', '/auth/admin'],
};
