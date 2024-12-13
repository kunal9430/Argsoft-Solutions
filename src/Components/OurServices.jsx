import React, { useState } from 'react'

const OurServices = () => {
  const [hover, setHover] = useState(0);

  return (
    <div className='w-full xl:flex xl:justify-center xl:items-center h-auto'>
      <div className='xl:w xl:w-[1240px] mx-5 h-full'>
        <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>Our Services</h1>
        <div className='flex flex-col gap-4 items-center sm:grid sm:grid-cols-2 my-5 py-3 lg:gap-10'>
            <div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className='w-[97%] h-64 relative lg:h-96'>
                <div className='w-full h-full rounded-xl'>
                    <video autoPlay muted loop src="https://res.cloudinary.com/devxykr37/video/upload/f_auto:video,q_auto/v1/SWS/Animation/xr8l8go01bc3rofvg5mb" className='h-full w-full object-cover rounded-xl'></video>
                </div>
                <div className={`w-full h-12 bg-gray-400 bg-opacity-90 rounded-b-xl absolute bottom-0 flex items-center justify-center text-white text-xl ${(hover==1)&&"h-full rounded-t-xl"}`}>{hover==1&&<button className='bg-gray-500 bg-opacity-40 text-white px-5 py-2 rounded-lg text-sm'>Explore Now</button>||"AI & ML"}</div>
            </div>

            <div onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className='w-[97%] h-64 relative lg:h-96'>
                <div className='w-full h-full rounded-xl'>
                    <video autoPlay muted loop src="https://res.cloudinary.com/devxykr37/video/upload/f_auto:video,q_auto/v1/SWS/Animation/sycla0xw2u4oh5tcfvof" className='h-full w-full object-cover rounded-xl'></video>
                </div>
                <div className={`w-full h-12 bg-gray-400 bg-opacity-90 rounded-b-xl absolute bottom-0 flex items-center justify-center text-white text-xl ${(hover==2)&&"h-full rounded-t-xl"}`}>{hover==2&&<button className='bg-gray-500 bg-opacity-40 text-white px-5 py-2 rounded-lg text-sm'>Explore Now</button>||"Mobile Development"}</div>
            </div>

            <div onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} className='w-[97%] h-64 relative lg:h-96'>
                <div className='w-full h-full rounded-xl'>
                    <video autoPlay muted loop src="https://res.cloudinary.com/devxykr37/video/upload/f_auto:video,q_auto/v1/SWS/Animation/i3qpuaakdezfsq3b4ypa" className='h-full w-full object-cover rounded-xl'></video>
                </div>
                <div className={`w-full h-12 bg-gray-400 bg-opacity-90 rounded-b-xl absolute bottom-0 flex items-center justify-center text-white text-xl ${(hover==3)&&"h-full rounded-t-xl"}`}>{hover==3&&<button className='bg-gray-500 bg-opacity-40 text-white px-5 py-2 rounded-lg text-sm'>Explore Now</button>||"Website Development"}</div>
            </div>

            <div onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} className='w-[97%] h-64 relative lg:h-96'>
                <div className='w-full h-full rounded-xl'>
                    <video autoPlay muted loop src="https://res.cloudinary.com/devxykr37/video/upload/f_auto:video,q_auto/v1/SWS/Animation/g85pmabrpcuehjfhuoei" className='h-full w-full object-cover rounded-xl'></video>
                </div>
                <div className={`w-full h-12 bg-gray-400 bg-opacity-90 rounded-b-xl absolute bottom-0 flex items-center justify-center text-white text-xl ${(hover==4)&&"h-full rounded-t-xl"}`}>{hover==4&&<button className='bg-gray-500 bg-opacity-40 text-white px-5 py-2 rounded-lg text-sm'>Explore Now</button>||"Digital Marketing"}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
