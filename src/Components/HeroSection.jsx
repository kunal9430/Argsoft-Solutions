import React from 'react'

const HeroSection = () => {

  return (
    <div className='relative flex flex-col justify-center items-center bg-indigo-800 bg-opacity-30'>
      <div className='absolute -top-[23%] -z-10 h-[123%] w-full'>
      <video
        muted
        loop
        autoPlay
        className="h-full w-full object-cover"
        src="/istockphoto-1315161903-640_adpp_is.mp4"
      />
      </div>
      <div className="xl:w xl:w-[1240px] lg:flex lg:flex-row justify-between items-center h-auto flex-col w-full px-3">
        <div className='flex flex-col gap-6 xl:w  xl:w-[50%] w-full py-10 text-white'>
          <h1 className='text-2xl sm:text-3xl l:text-4xl font-bold w-full l:w-[80%] leading-snug'>Our Motto provide Solutions!</h1>
          <div className='flex flex-col gap-10'>
            <p className='sm:w-[70%]'>Argsoft Solutions is an ERP development company that creates custom software to streamline business operations. Their solutions integrate key functions like finance, inventory and more.</p>
            <button className='leading-6 font-medium py-2 px-6 rounded-lg  w-full sm:w-fit border-2'>Read More</button>
            <div>
              <button className='underline'>ERP Development</button>
            </div>
          </div>
        </div>
        <div className='xl:w  xl:w-[50%] w-full h-96 flex l:justify-start justify-center items-center'>
           <div className=' w-[90%] h-[90%]'>
            <video muted loop autoPlay className="h-full w-full object-cover" src="./public/istockphoto-1315161903-640_adpp_is.mp4" />
           </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full px-[20px]'>
        <div className="bg-gray-500 bg-opacity-30 rounded-xl py-5 mb-3 xl:w xl:w-[1240px] w-full flex justify-center gap-3 sm:justify-around items-center text-white text-center px-2">
            <div className='flex flex-col items-center gap-2 w-fit'>
              <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FHero%2Feaghs0x5ljl0emoxq0g9&w=640&q=75" alt="img" className='h-10 w-10 sm:h-14 sm:w-14'/>
              <h1 className='text-[12px]'>111 Year of Experience</h1>
            </div>

            <div className='flex flex-col items-center gap-2 w-fit'>
              <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FHero%2Foomqs3x83rxsaryaodwi&w=640&q=75" alt="img" className='h-10 w-10 sm:h-14 sm:w-14'/>
              <h1 className='text-[12px]'>160 Happy Clients</h1>
            </div>

            <div className='flex flex-col items-center gap-2 w-fit'>
              <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FHero%2Fsjy9ujcydtyureovw8zu&w=640&q=75" alt="img" className='h-10 w-10 sm:h-14 sm:w-14'/>
              <h1 className='text-[12px]'>525 Successfully Projects Delivered</h1>
            </div>

            <div className='flex flex-col items-center gap-2 w-fit'>
              <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FHero%2Fglk1yq6fiu7cbvxzr0s4&w=640&q=75" alt="img" className='h-10 w-10 sm:h-14 sm:w-14'/>
              <h1 className='text-[12px]'>110 Cities</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection