import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/app/util/dbConnect';
import User from '@/models/User';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, phoneNumber, address, job, password, confirmPassword } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const newUser = new User({
      name,
      email,
      phoneNumber,
      address,
      job,
      password,
      confirmPassword
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    newUser.confirmPassword = await bcrypt.hash(confirmPassword, salt);

    await newUser.save();

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}