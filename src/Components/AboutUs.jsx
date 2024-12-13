import React from 'react'
import OurLeadership from './OurLeadership'

const AboutUs = () => {
  return (
    <>
      <div className='w-full xl:flex xl:justify-center xl:items-center h-auto'>
        <div className='xl:w xl:w-[1240px] mx-5 h-full'>
          <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>About Us</h1>
        </div>
      </div>
      <OurLeadership />
    </>
  )
}

export default AboutUs
