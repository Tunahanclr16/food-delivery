import Hero from '@/app/components/Hero/Hero'
import About from '@/app/components/Home/About'
import Campaigns from '@/app/components/Home/Campaigns'
import MenuWrapper from '@/app/components/product/MenuWrapper'
import Input from '@/app/components/Form/Input'
import React from 'react'
import Reservation from '@/app/components/Home/Reservation'

export default function Index() {
  return (
    <div className=''>
        <Hero/>
        <Campaigns/>
        <MenuWrapper/>
        <About/>
        <Reservation/>
    </div>
  )
}
