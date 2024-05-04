import Image from "next/image";
import React from "react";
import Pizza from "../../assets/f1.png";
import { SlBasket } from "react-icons/sl";
export default function MenuItem() {
  return (
    <div className="bg-secondary">
<div className="flex items-center rounded-l-3xl justify-center mx-auto w-[360px] bg-white">
<Image alt="pizza" src={Pizza} height={200} width={200} objectFit="cover" className=" "  />
</div>
<p className="text-sm text-white px-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed, cupiditate aut iure cumque mollitia similique tempora quod non corrupti.</p>
<div className="flex items-center px-3 mb-2 mt-2 justify-between">
    <div>
    <span className="text-white font-bold">20TL</span>
    </div>
    <div className="bg-primary rounded-full w-10 h-10  flex items-center justify-center cursor-pointer">
        <SlBasket  className="text-black" />
    </div>
</div>
    </div>
  );
}
