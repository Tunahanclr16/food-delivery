import React from 'react'

export default function Input({ placeholder, type, name, onChange,value }) {
    return (
        <div className='w-full'>
            <label htmlFor={name} className='relative block cursor-text'>
                <input required type={type} value={value} onChange={onChange} name={name} className='h-14 w-full border-primary outline-none peer border px-4' />
                <span className='absolute  top-0 left-0 px-4 text-sm flex h-full items-center peer-valid:h-7 transition-all duration-200 peer-valid:text-xs  text-gray-400'>{placeholder}</span>
            </label>
        </div>
    )
}
