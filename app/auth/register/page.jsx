"use client";
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios'; // Import Axios
import Input from '@/app/components/Form/Input';
import Title from '@/app/components/ui/Title';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Register() {
  const router=useRouter()
  const {data:session}=useSession()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, actions) => {
      try {
        const res = await axios.post("http://localhost:3000/api/users/register", {
          name: formik.values.name,
          email: formik.values.email,
          password: formik.values.password,
          confirmPassword: formik.values.confirmPassword,
        });
        console.log("Registration successful.");
        router.push('/auth/login'); 
      } catch (error) {
        console.error("Error during registration:", error);
      }
      actions.resetForm();
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-[40px] font-dancing" title={"Register"} />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 items-center my-20 md:w-1/2 w-full mx-auto">
          <Input type="text" value={formik.values.name} name="name" placeholder="Your Name" onChange={formik.handleChange} />
          <Input type="email" value={formik.values.email} name="email" placeholder="Your Email Address" onChange={formik.handleChange} />
          <Input type="password" value={formik.values.password} name="password" placeholder="Your Password" onChange={formik.handleChange} />
          <Input type="password" value={formik.values.confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={formik.handleChange} />
          <div className='flex flex-col items-center gap-5 w-full mt-3'>
            <button type="submit" className="btn-primary w-full">Register</button>
            <Link href="/auth/login">
              <span className="text-sm underline cursor-pointer text-secondary">
                Already have an account? Login here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
