import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('token');

  // /admin/profile sayfasına erişim kontrolü
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!token || token !== process.env.ADMIN_TOKEN) {
      return NextResponse.redirect(new URL('/auth/admin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/profile', '/admin/:path*'],
};
