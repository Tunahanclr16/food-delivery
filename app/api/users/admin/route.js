import { NextResponse } from 'next/server';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import dbConnect from '@/app/util/dbConnect';

export async function POST(req) {
  try {
    // MongoDB'ye bağlan
    await dbConnect();
    // İstek gövdesini JSON formatında al
    const body = await req.json();
    const { username, password } = body;

    // Çevresel değişkenlerin doğru yüklendiğini kontrol et
    console.log('Environment Variables:', process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD, process.env.ADMIN_TOKEN_SECRET);
    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || !process.env.ADMIN_TOKEN_SECRET) {
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // Giriş bilgilerini doğrula
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      // JWT token oluştur
      const token = jwt.sign({ username }, process.env.ADMIN_TOKEN_SECRET, { expiresIn: '1h' });

      // Cookie ayarlarını belirle
      const tokenCookie = cookie.serialize('token', token, {
        maxAge: 60 * 60, // 1 saat
        sameSite: 'strict',
        path: '/',
        httpOnly: true, // JavaScript'ten erişilemez
        secure: process.env.NODE_ENV === 'production', // Üretimde secure flag'ini kullan
      });

      // Cookie'yi yanıt başlığına ekle
      const res = NextResponse.json({ message: 'Success' }, { status: 200 });
      res.headers.set('Set-Cookie', tokenCookie);
      return res;
    } else {
      return NextResponse.json({ message: 'Wrong Credentials' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    return NextResponse.json({ error: 'Error during admin login' }, { status: 500 });
  }
}
