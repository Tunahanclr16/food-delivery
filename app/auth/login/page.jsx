"use client"
import Input from '@/app/components/Form/Input';
import Title from '@/app/components/ui/Title';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center my-20">
                <Title addClass="text-[40px] font-dancing" title={"Login"} />
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 items-center my-20 md:w-1/2 w-full mx-auto">
                    <Input type="email" value={formik.values.email} name="email" placeholder="Your Email Address" onChange={formik.handleChange} />
                    <Input type="password" value={formik.values.password} name="password" placeholder="Your Password" onChange={formik.handleChange} />
               <div className='flex flex-col items-center gap-5 w-full mt-3'>
               <button type="submit" className="btn-primary w-full">Login</button>
                    <button className="btn-primary !bg-secondary w-full">Github Login</button>
                    <Link href="/auth/register">
                        <span className="text-sm underline cursor-pointer text-secondary">
                        Don&apos;t have an account yet? Register here
                        </span>
                    </Link>
               </div>
                </form>
            </div>
        </div>
    );
}
