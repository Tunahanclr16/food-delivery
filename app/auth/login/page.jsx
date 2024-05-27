"use client";
import React from 'react';
import { useFormik } from 'formik';
import Input from "@/app/components/Form/Input";
import Title from "@/app/components/ui/Title";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import axios from 'axios';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      const options = { redirect: false, email, password };
      const res = await signIn("credentials", options);
      if (res.error) {
        console.error("Error during login:", res.error);
      } else {
        console.log("Login successful.");
        router.push("/profile");
      }
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-[40px] font-dancing" title={"Login"} />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 items-center my-20 md:w-1/2 w-full mx-auto">
          <Input type="email" value={formik.values.email} name="email" placeholder="Your Email Address" onChange={formik.handleChange} />
          <Input type="password" value={formik.values.password} name="password" placeholder="Your Password" onChange={formik.handleChange} />
          <div className="flex flex-col items-center gap-5 w-full mt-3">
            <button type="submit" className="btn-primary w-full">Login</button>
            <button onClick={() => signIn("github")} type="submit" className="btn-primary w-full">Login with GitHub</button>
            <Link href="/auth/register">
              <span className="text-sm underline cursor-pointer text-secondary">
                Dont have an account yet? Register here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
