import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=" border-4 w-[1240px] flex justify-between items-center gap-24">
        <div className='flex flex-col gap-6'>
          <h1>Empowering the Future through Innovation With SWS!</h1>
          <div className='flex flex-col gap-6'>
            <p>We Empowering Education and Healthcare sectors with State-of-the-Art Technology along innovative solutions like LMS software, online exam software, hospital management software, and pathology software.</p>
            <button className='leading-6 font-medium py-2 px-3 rounded-lg border-2 w-fit'>Read More</button>
            <div className='flex gap-6'>
              <button className='underline'>Mobile Application</button>
              <button className='underline'>Web Development</button>
              <button className='underline'>Digital Marketing</button>
            </div>
          </div>
        </div>
        <video src="" className="border-4 w-[549px] h-[343px] bottom-[57px] left-[81px]"></video>
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
