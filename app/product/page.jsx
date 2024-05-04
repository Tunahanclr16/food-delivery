import React from 'react';
import Image from 'next/image';
import Title from '../components/ui/Title';
import PizzaImage from '../assets/f1.png';
import SizeImage from '../assets/size.png';

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen p-5 md:p-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full h-96 ">
          <Image src={PizzaImage} alt="Pizza" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <Title addClass="text-4xl md:text-6xl mb-4" title="Good Pizza" />
        <span className="text-primary text-2xl font-bold underline underline-offset-1 mb-4 block">$10</span>
        <p className="text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at
          ad aspernatur eius numquam molestiae.
        </p>
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2">Choose the size</h4>
          <div className="flex items-center gap-x-6">
            <div className="relative w-8 h-8">
              <Image src={SizeImage} alt="Size" layout="fill" objectFit="contain" />
              <span className="absolute top-0 right-0 text-xs bg-primary rounded-full px-2 py-1 font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src={SizeImage} alt="Size" layout="fill" objectFit="contain" />
              <span className="absolute top-0 right-0 text-xs bg-primary rounded-full px-2 py-1 font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src={SizeImage} alt="Size" layout="fill" objectFit="contain" />
              <span className="absolute top-0 right-0 text-xs bg-primary rounded-full px-2 py-1 font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm md:text-base font-semibold">Ketçap</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm md:text-base font-semibold">Mayonez</span>
          </label>
        </div>
        <button className="btn-primary mt-6">Add to Cart</button>
      </div>
    </div>
  );
}
