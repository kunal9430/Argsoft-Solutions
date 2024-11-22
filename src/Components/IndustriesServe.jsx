import React from 'react'

const IndustriesServe = () => {
    return (
        <div className='flex justify-center items-center'>
          <div className='mx-5 xl:w xl:w-[1240px] w-full flex flex-col gap-10 my-10'>
              <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>Industries we serve</h1>
              <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
                <div className='flex flex-col justify-center items-center gap-3 bg-gray-300 bg-opacity-30 p-5 rounded-lg'>
                  <img className='h-14 w-14' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2Findustryweserve%2Fvyvdovaia8ijatsctw9y&w=1080&q=75" alt="" />
                  <h1 className='text-base text-white text-center font-semibold'>Edutech Sector</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 bg-gray-300 bg-opacity-30 p-5 rounded-lg'>
                  <img className='h-14 w-14' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2Findustryweserve%2Fdpzgmm6f8tuslmwoycm8&w=1080&q=75" alt="" />
                  <h1 className='text-base text-white text-center font-semibold'>Health Sector</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 bg-gray-300 bg-opacity-30 p-5 rounded-lg'>
                  <img className='h-14 w-14' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2Findustryweserve%2Fitniioxzd2ek5t8q51bn&w=1080&q=75" alt="" />
                  <h1 className='text-base text-white text-center font-semibold'>Ecommerce</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 bg-gray-300 bg-opacity-30 p-5 rounded-lg'>
                  <img className='h-14 w-14' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2Findustryweserve%2Fzrdbdufyzp6cggyulqqh&w=1080&q=75" alt="" />
                  <h1 className='text-base text-white text-center font-semibold'>Digital Marketing</h1>
                </div>
              </div>
          </div>
        </div>
        )
}

export default IndustriesServe
