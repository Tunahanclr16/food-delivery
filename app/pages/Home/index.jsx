import Hero from '@/app/components/Hero/Hero'
import Campaigns from '@/app/components/Home/Campaigns'
import React from 'react'

export default function Index() {
  return (
    <div className='relative'>
        <Hero/>
        <Campaigns/>
    </div>
  )
}
