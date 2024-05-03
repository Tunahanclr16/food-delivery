"use client"
import React, { useState } from 'react'
import Logo from '../ui/Logo'
import { FaUser } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Title from '../ui/Title';
import Search from '../ui/Search';
export default function Header() {
    const [searchModal,setSearchModal]=useState(false)
  return (
    <div className='h-[88px] bg-secondary'>
    <div className='container mx-auto flex items-center h-full justify-between'>
    <div>
        <Logo/>
      </div>
      <div>
        <ul className='flex items-center gap-x-2 text-sm md:text-[1rem] font-open uppercase text-white'> 
            <li className=' px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer'><a href="">Home</a></li>
            <li className=' px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer'><a href="">Menu</a></li>
            <li className=' px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer'><a href="">About</a></li>
            <li className=' px-[5px] py-[20px] hover:text-primary transition-all cursor-pointer'><a href="">Book Table</a></li>
        </ul>
      </div>
      <div className='flex items-center gap-4 '>
        <FaUser className='text-white hover:text-primary cursor-pointer'  />
        <FaShoppingCart className='text-white hover:text-primary cursor-pointer '  />
        <FaSearch onClick={()=>setSearchModal(true)} className='text-white hover:text-primary cursor-pointer '  />
        <button className='btn-primary'>Order Online</button>
      </div>
    </div>
    {searchModal && (
       <Search setSearchModal={setSearchModal}/>
    )}
    </div>
  )
}
