"use client"
import React from 'react'
import Input from '../Form/Input'
import { useFormik } from 'formik';

export default function Accounts() {
    const formik = useFormik({
        initialValues: {
          fullName: "",
          phoneNumber: "",
          email: "",
          address: "",
          job: "",
          bio: "",
        },
        onSubmit: async (values, actions) => {
          console.log(values);
          actions.resetForm();
        },
      });
    
  return (
    <form className='grid grid-cols-1 md:grid-cols-2 mt-2 gap-2' onSubmit={formik.handleSubmit}>
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
            type={"number"}
            placeholder="Add Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          <Input
            name="email"
            type={"email"}
            label="Email"
            placeholder="Add Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            name="address"
            label="Address"
            type={"text"}
            placeholder="Add Address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          <Input
            name="job"
            label="Job"
            type={"text"}
            placeholder="Add Job"
            value={formik.values.job}
            onChange={formik.handleChange}
          />
          <Input
            name="bio"
            label="Bio"
            type={"text"}
            placeholder="Add Bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
          />
          <button type="submit" className="mt-4 bg-primary text-white p-2 rounded">Submit</button>
        </form>
  )
}

