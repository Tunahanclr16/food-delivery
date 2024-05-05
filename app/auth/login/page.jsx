import Input from '@/app/components/Form/Input'
import Title from '@/app/components/ui/Title'
import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center flex-col justify-center '>
      <Title addClass="text-6xl font-dancing" title={"Login"} />
      <Input/>
      <Input/>

    </div>
  )
}
