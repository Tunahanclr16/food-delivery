import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/app/util/dbConnect';
import User from '@/models/User';

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Set user session here (e.g., using cookies or JWT)
    // Example: set a cookie with user ID or JWT token

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Error during login', details: error.message }, { status: 500 });
  }
}
