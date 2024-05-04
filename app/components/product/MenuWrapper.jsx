import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'
export default function MenuWrapper() {
  return (
    <div className='container mx-auto mb-16'>
      <Title addClass="text-5xl text-center"  title={"Our Menu"}/>
   <div className='flex items-center flex-wrap gap-4 justify-center mt-14'>
   <button className='px-8 text-white py-2 rounded-3xl bg-secondary'>
        All
      </button>
      <button className='px-8 text-secondary py-2 rounded-3xl '>
        Pizza
      </button>
      <button className='px-8 text-secondary py-2 rounded-3xl '>
        Burger
      </button>
      <button className='px-8 text-secondary py-2 rounded-3xl '>
        Drink
      </button>
   </div>
   <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    </div>
    </div>
  )
}

