import Hero from '@/app/components/Hero/Hero'
import Campaigns from '@/app/components/Home/Campaigns'
import MenuWrapper from '@/app/components/product/MenuWrapper'
import React from 'react'

export default function Index() {
  return (
    <div className=''>
        <Hero/>
        <Campaigns/>
        <MenuWrapper/>
    </div>
  )
}
