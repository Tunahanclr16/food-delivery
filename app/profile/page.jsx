  "use client";
  import React, { useEffect } from 'react';
  import { useFormik } from 'formik';
  import Input from '@/app/components/Form/Input';
  import Title from '@/app/components/ui/Title';
  import { useRouter } from 'next/navigation';
  
  export default function Profile() {
    const router = useRouter();
    const formik = useFormik({
      initialValues: {
        id: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
        password: "",
        confirmPassword: ""
      },
      onSubmit: async (values, actions) => {
        try {
          const res = await axios.put("http://localhost:3000/api/users/", values);
          alert("Profile updated successfully");
        } catch (error) {
          console.error("Error updating profile:", error);
        }
        actions.resetForm();
      },
    });
  
    return (
      <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col">
      <div className="lg:w-80 w-100 flex-shrink-0">
          <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
            <b className="text-2xl mt-1">{formik.values.fullName}</b>
          </div>
          <ul className="text-center font-semibold">
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-home"></i>
              <button className="ml-1">Account</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-key"></i>
              <button className="ml-1">Password</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-motorcycle"></i>
              <button className="ml-1">Orders</button>
            </li>
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-sign-out"></i>
              <button className="ml-1">Exit</button>
            </li>
          </ul>
        </div>
        <div className="p-8  w-full">
          <Title addClass="md:text-[40px] text-[28px] sm:text-[32px]" title="Account settings" />
          <form onSubmit={formik.handleSubmit} className=" md:grid md:grid-cols-2 flex flex-wrap items-center gap-4">
            <Input
              name="fullName"
              label="Full Name"
              placeholder="Add Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <Input
              name="phoneNumber"
              label="Phone Number"
              type="number"
              placeholder="Add Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Add Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Input
              name="address"
              label="Address"
              type="text"
              placeholder="Add Address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <Input
              name="job"
              label="Job"
              type="text"
              placeholder="Add Job"
              value={formik.values.job}
              onChange={formik.handleChange}
            />
            <Input
              name="bio"
              label="Bio"
              type="text"
              placeholder="Add Bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Add Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Input
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            <button type="submit" className="mt-4 bg-primary text-white p-2 rounded col-span-2">Update</button>
          </form>
        </div>
      </div>
    );
  }
