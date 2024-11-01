import React from 'react'
import { useState } from 'react'
const HeroSection = () => {
  const [value, setValue] = useState(1);
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=" border-4 w-[1240px] flex justify-between items-center h-auto">
        <div className='flex flex-col gap-6 bg-gray-600 w-[50%] py-10 text-white'>
          <h1 className='text-4xl font-bold w-[80%] leading-snug'>Empowering the Future through Innovation With SWS!</h1>
          <div className='flex flex-col gap-10'>
            <p className='w-[70%]'>We Empowering Education and Healthcare sectors with State-of-the-Art Technology along innovative solutions like LMS software, online exam software, hospital management software, and pathology software.</p>
            <button className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>Read More</button>
            <div className='flex gap-6'>
              <button className='underline'>Mobile Application</button>
              <button className='underline'>Web Development</button>
              <button className='underline'>Digital Marketing</button>
            </div>
          </div>
        </div>
        <div className='w-[50%] border-2 h-96 bg-gray-600'>
          <div className=''>
            <button onClick={()=>{setValue(1)}} className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>1</button>
            <button onClick={()=>{setValue(2)}} className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>2</button>
            <button onClick={()=>{setValue(3)}} className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>3</button>
            <button onClick={()=>{setValue(4)}} className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>4</button>
            <button onClick={()=>{setValue(5)}} className='leading-6 font-medium py-2 px-6 rounded-lg border-2 w-fit'>5</button>
            <div className='bg-green-800 h-40 w-[80%]'>{value}</div>
          </div>
        </div>
      </div>
      <div className=" border-4 w-[1240px] flex flex-row justify-between items-center text-lg font-medium p-2.5">
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src="/" alt="img" className='border-2'/>
            <h1>1 Year of Experience</h1>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <img src="/" alt="img" className='border-2'/>
            <h1>160 Happy Clients</h1>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <img src="/" alt="img" className='border-2'/>
            <h1>525 Successfully Projects Delivered</h1>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <img src="/" alt="img" className='border-2'/>
            <h1>10 Cities</h1>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
