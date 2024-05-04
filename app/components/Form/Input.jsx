import React from 'react'

export default function Input() {
  return (
    <div className='w-full'>
     <label htmlFor="" className='relative block cursor-text'>
      <input required type="text" className='h-14 w-full border-primary outline-none peer border px-4' />
      <span className='absolute  top-0 left-0 px-4 text-sm flex h-full items-center peer-valid:h-7 transition-all duration-200 peer-valid:text-xs  text-gray-400'>Email</span>
     </label>
    </div>
  )
}
