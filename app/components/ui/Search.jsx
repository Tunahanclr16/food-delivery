"use client"

import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import Pizza from "../../assets/f1.png";

export default function Search({ setSearchModal }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <OutsideClickHandler onOutsideClick={() => setSearchModal(false)}>
        <div className="bg-white w-full max-w-lg h-full md:w-[600px]  lg:w-[1200px] rounded-lg overflow-hidden">
          <div className="flex justify-end p-4">
            <IoIosClose
              size={32}
              className="cursor-pointer"
              onClick={() => setSearchModal(false)}
            />
          </div>
          <div className="p-4">
            <Title
              addClass="text-3xl mb-4 text-center font-dancing"
              title="Search"
            />
            <input
              type="text"
              className="border-none outline-none rounded-md px-4 py-2 w-full mb-4"
              placeholder="Search..."
            />
            <ul className=" p-2 md:p-4">
              <li className="flex items-center cursor-pointer justify-between p-2 hover:bg-primary transition-all">
                <div className="relative   flex-shrink-0">
                  <Image src={Pizza} alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex items-center cursor-pointer justify-between p-2 hover:bg-primary transition-all">
                <div className="relative   flex-shrink-0">
                  <Image src={Pizza} alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex items-center cursor-pointer justify-between p-2 hover:bg-primary transition-all">
                <div className="relative   flex-shrink-0">
                  <Image src={Pizza} alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
