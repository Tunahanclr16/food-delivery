"use client";
import Input from "@/app/components/Form/Input";
import Title from "@/app/components/ui/Title";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
export default function Admin() {
    const router=useRouter()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      try {
        const res = await axios.post("http://localhost:3000/api/users/admin", {
          username: values.username,
          password: values.password,
        });
        console.log("success");
                router.push("/admin")
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-60">
        <Title addClass="text-[40px] font-dancing" title={"Admin"} />
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-2 items-center my-20 md:w-1/2 w-full mx-auto"
        >
          <Input
            type="text"
            value={formik.values.text}
            name="username"
            placeholder="Your username"
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            value={formik.values.password}
            name="password"
            placeholder="Your Password"
            onChange={formik.handleChange}
          />
          <div className="flex flex-col items-center gap-5 w-full mt-3">
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
