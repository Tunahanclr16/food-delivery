"use client"
import React from 'react';
import Title from '../ui/Title';
import Input from '../Form/Input';
import { useFormik } from 'formik';

export default function Reservation() {
    const formik=useFormik({
        initialValues:{
            fullName:"",
            phoneNumber:"",
            email:"",
            persons:"",
            date:""
        },
        onSubmit:values=>{
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <div className="container mx-auto py-12">
            <Title addClass="text-[40px] font-dancing mb-10" title={"Book A Table"} />
            <div className="flex justify-between flex-wrap-reverse gap-10">
                <div className="lg:flex-1 w-full">
<form action="" onSubmit={formik.handleSubmit}>
<div className="flex flex-col gap-y-3">
                    <Input type="text" value={formik.values.name}  name="fullName" placeholder="Your Full Name" onChange={formik.handleChange} />
                    <Input type="number"  value={formik.values.phoneNumber} name="phoneNumber" placeholder="Your Phone Number" onChange={formik.handleChange} />
                    <Input type="email"  value={formik.values.email} name="email" placeholder="Your Email Address" onChange={formik.handleChange} />
                    <Input type="number"  value={formik.values.persons} name="persons" placeholder="How Many Persons?" onChange={formik.handleChange} />
                    <Input type="datetime-local" value={formik.values.date}  name="date" onChange={formik.handleChange} />
                    </div>
                    <button className="btn-primary mt-4">BOOK NOW</button>
</form>
                </div>
                <div className="lg:flex-1  w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-full w-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
