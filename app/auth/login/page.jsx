"use client";
import React from 'react';
import { useFormik } from 'formik';
import Input from "@/app/components/Form/Input";
import Title from "@/app/components/ui/Title";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  console.log(session)
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          username: values.username,
          password: values.password,
        });
        if (res.ok) {
          router.push("/profile");
        } else {
          console.error("Login failed:", res.error?.message); 
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20">
        <Title addClass="text-[40px] font-dancing" title={"Login"} />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 items-center my-20 md:w-1/2 w-full mx-auto">
          <Input type="text" value={formik.values.username} name="username" placeholder="Your Username" onChange={formik.handleChange} />
          <Input type="password" value={formik.values.password} name="password" placeholder="Your Password" onChange={formik.handleChange} />
          <div className="flex flex-col items-center gap-5 w-full mt-3">
            <button type="submit" className="btn-primary w-full">Login</button>
            <button onClick={() => signIn("github")} type="button" className="btn-primary w-full">Login with GitHub</button>
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
