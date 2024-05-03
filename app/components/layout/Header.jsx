"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUser, FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Title from "../ui/Title";
import Search from "../ui/Search";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className="h-[88px] bg-secondary">
      <div className="container mx-auto flex items-center h-full justify-between">
        <div className="p-2">
          <Logo />
        </div>
        <div>
    <nav
          className=""
        >            <ul className="sm:flex items-center gap-x-2 text-sm hidden md:text-[1rem] font-open uppercase text-white">
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <a href="">Home</a>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <a href="">Menu</a>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <a href="">About</a>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <a href="">Book Table</a>
              </li>
            </ul>
            <div className={ isMenuOpen ? "fixed top-0 left-0 w-full h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
              <div onClick={()=>setIsMenuOpen(false)} className="absolute cursor-pointer right-4 top-4">
              <IoMdClose size={28}/>
              </div>
            <ul className=" items-center justify-center h-full gap-5 font-bold  text-base flex flex-col md:text-[1rem] font-open uppercase text-black">
              
              <li className=" hover:text-primary transition-all cursor-pointer">
                <a href="">Home</a>
              </li>
              <li className=" hover:text-primary transition-all cursor-pointer">
                <a href="">Menu</a>
              </li>
              <li className=" hover:text-primary transition-all cursor-pointer">
                <a href="">About</a>
              </li>
              <li className=" hover:text-primary transition-all cursor-pointer">
                <a href="">Book Table</a>
              </li>
              <button className="btn-primary">Order Online</button>
            </ul>
            </div>
          </nav>
        </div>
        <div className="flex px-2 items-center gap-4">
          <FaUser className="text-white hover:text-primary cursor-pointer" />
          <FaShoppingCart className="text-white hover:text-primary cursor-pointer" />
          <FaSearch
            onClick={() => setSearchModal(true)}
            className="text-white hover:text-primary cursor-pointer"
          />
          <button onClick={()=>setIsMenuOpen(true)} className="sm:hidden">
            <FaBars className="text-white hover:text-primary cursor-pointer" />
          </button>
          <button className="sm:flex hidden btn-primary">Order Online</button>
        </div>
      </div>
      {searchModal && <Search setSearchModal={setSearchModal} />}
    </div>
  );
}
