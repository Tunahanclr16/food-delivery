// app/api/users/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/util/dbConnect';
import User from '@/models/User';

export async function GET(req) {
  try {
    // MongoDB'ye bağlan
    await dbConnect();
    // Tüm kullanıcıları al
    const users = await User.find();
    // Kullanıcıları JSON olarak yanıtla
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    // MongoDB'ye bağlan
    await dbConnect();
    // İstek gövdesinden yeni kullanıcı bilgilerini al
    const { name, email, phoneNumber, address, job, password, confirmPassword } = await req.json();
    // Yeni bir User nesnesi oluştur
    const newUser = new User({
      name,
      email,
      phoneNumber,
      address,
      job,
      password,
      confirmPassword
    });
    // Kullanıcıyı kaydet
    await newUser.save();
    // Oluşturulan kullanıcıyı JSON olarak yanıtla
    return NextResponse.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
