"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUser, FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const cart=useSelector((state)=>state.cart)
  return (
    <div
      className={`h-[88px] z-10  bg-secondary ${
        pathname == "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex items-center h-full justify-between">
        <div className="p-2">
          <Logo />
        </div>
        <div>
          <nav className="">
            {" "}
            <ul className="sm:flex items-center gap-x-2 text-sm hidden md:text-[1rem] font-open uppercase text-white">
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <Link href="menu">Menu</Link>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <a href="">About</a>
              </li>
              <li className="px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer">
                <Link href="">Book Table</Link>
              </li>
            </ul>
            <div
              className={
                isMenuOpen
                  ? "fixed top-0 left-0 w-full transition-all h-screen bg-white z-10 duration-500"
                  : "fixed top-0 left-[-1000%] w-[300px] h-screen bg-white z-10 duration-300"
              }
            >
              <div
                onClick={() => setIsMenuOpen(false)}
                className="absolute cursor-pointer right-4 top-4"
              >
                <IoMdClose size={28} />
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
        <div className="flex px-2 items-center gap-2 md:gap-4">
          <Link href="/auth/login">
            {" "}
            <FaUser className="text-white hover:text-primary cursor-pointer" />
          </Link>
          <span className="relative">
                  <Link href="/cart">
              <FaShoppingCart  className="hover:text-primary text-white transition-all cursor-pointer" />
                  </Link>
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
              </span>
          <FaSearch
            onClick={() => setSearchModal(true)}
            className="text-white hover:text-primary cursor-pointer"
          />
          <button onClick={() => setIsMenuOpen(true)} className="sm:hidden">
            <FaBars className="text-white hover:text-primary cursor-pointer" />
          </button>
          <button className="sm:flex hidden btn-primary">Order Online</button>
        </div>
      </div>
      {searchModal && <Search setSearchModal={setSearchModal} />}
    </div>
  );
}
