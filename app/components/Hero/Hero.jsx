import React from "react";
import Image from "next/image";
import Bg from "../../assets/bg.jpg";
import Title from "../ui/Title";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-88px)]">
      <div className="relative h-full">
        <Image
          src={Bg}
          alt="Bg Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute text-white top-32 md:top-48 container mx-auto inset-0 flex flex-col items-start gap-y-4 md:gap-y-10">
        <Title addClass="text-4xl lg:text-6xl text-white" title={"Fast Food Restaurant"}/>
        <p className="text-white text-xs sm:text-sm w-auto md:w-[500px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum nulla delectus facere nesciunt. Voluptatibus corrupti assumenda rerum dolores repudiandae odit doloribus sint, omnis quos illum magnam quas praesentium provident saepe iusto eum quam, eos asperiores ducimus. Quasi, voluptatum impedit.</p>
        <button className="btn-primary w-44 ">Order Now</button>
        </div>
    </div>
  );
}
