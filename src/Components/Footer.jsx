import React from 'react'

const Footer = () => {
    return (
        <div className='w-full felx-col justify-center items-center'>
            <div className='bg-black w-full flex justify-center items-center py-10'>
                <div className='xl:w xl:w-[1240px] mx-5 w-full flex flex-col gap-5 md:flex-row md:justify-between md:items-center'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex justify-between items-center'>
                            <img className='w-16 h-16' src="./logo.jpeg" alt="" />
                            <div className='flex flex-col gap-3  md:hidden'>
                                <h1 className='text-white font-semibold'>Get in touch</h1>
                                <div className='flex gap-5'>
                                    <img className='w-8 h-8' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fcucaczzp8okpxfek6xbp&w=1080&q=75" alt="" />

                                    <img className='w-8 h-8' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fop0doadart2xbvvpkptk&w=1080&q=75" alt="" />

                                    <img className='w-8 h-8' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fogyfeisgd9ug5yibrxul&w=1080&q=75" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className='text-white font-semibold flex flex-col gap-2'>
                            <h1>Argsoft Solutions Pvt Ltd.</h1>
                            <h1>Address</h1>
                            <p>Sector-62,Noida,India.</p>
                            <div className='flex md:flex-col md:items-start md:gap-3 gap-5 items-center text-sm font-thin sm:text-lg'>
                                <h1>kunalkumarh2003@gmail.com</h1>
                                <h1>+91 8797327756</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-between sm:justify-center items-center gap-16 text-white'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-semibold sm:text-xl'>Company</h1>
                            <a className='text-xs sm:text-lg' href="/">About</a>
                            <a className='text-xs sm:text-lg' href="/">Services</a>
                            <a className='text-xs sm:text-lg' href="/">Portfolio</a>
                            <a className='text-xs sm:text-lg' href="/">Careers</a>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-semibold sm:text-xl'>Support</h1>
                            <a className='text-xs sm:text-lg' href="/">Contact</a>
                            <a className='text-xs sm:text-lg' href="/">Terms & Conditions</a>
                            <a className='text-xs sm:text-lg' href="/">Privacy Policy</a>
                            <a className='text-xs sm:text-lg' href="/">Disclaimer</a>
                        </div>
                    </div>

                    <div className='md:flex flex-col gap-3  hidden'>
                        <h1 className='text-white font-semibold'>Get in touch</h1>
                        <div className='flex gap-5'>
                            <img className='w-10 h-10' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fcucaczzp8okpxfek6xbp&w=1080&q=75" alt="" />

                            <img className='w-10 h-10' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fop0doadart2xbvvpkptk&w=1080&q=75" alt="" />

                            <img className='w-10 h-10' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FFooter%2Fogyfeisgd9ug5yibrxul&w=1080&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-400 flex justify-center items-center h-10'>
                <h1 className='font-lg font-semibold'>2024 Agrsoft Solutions All Rights Reserved</h1>
            </div>
        </div>
        )
}

export default Footer
