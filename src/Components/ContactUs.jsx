import React from 'react'

const ContactUs = () => {
    return (
        <div className='flex justify-center items-center'>
          <div className='mx-5 xl:w xl:w-[1240px]'>
            <div className='w-full flex flex-col gap-10 my-10'>
              <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>Contact Us</h1>
              <div className='w-full xl:flex gap-16 items-center justify-center'>
                <div className='hidden xl:flex w-auto'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2Fcontact%2520us%2Fe66vzranwi7g6qfkefyo&w=2048&q=75" alt="" />
                </div>
                <div className='bg-white p-5 rounded-xl flex flex-col gap-5 xl:w-[50%]'>
                  <h1 className='hidden md:flex font-bold text-lg'>Contact Us</h1>
                  <h1 className='font-bold text-lg'>Your email address will not be published. Required fields are marked *</h1>
                  <form action="">
                    <div className='flex flex-col gap-3'>
                    <div className='flex flex-col md:flex-row gap-5'>
                      <div className='flex flex-col md:w-[50%]'>
                        <label className='text-gray-700 font-semibold mb-2 text-lg'>
                          Full Name*
                        </label>
                        <input className='h-10 w-full border border-gray-300 rounded-lg p-2 outline-none' required type="text" placeholder='Type Here'/>
                      </div>

                      <div className='flex flex-col md:w-[50%]'>
                        <label className='text-gray-700 font-semibold mb-2 text-lg'>
                          Select Services*
                        </label>
                        <select className='h-10 w-full border border-gray-300 rounded-lg p-2 outline-none' required>
                          <option value="">Select</option>
                          <option value="AI/ML">AI/ML</option>
                          <option value="Mobile Application Development">Mobile Application Development</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                      </div>

                      <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex flex-col md:w-[50%]'>
                          <label className='text-gray-700 font-semibold mb-2 text-lg'>
                            E-mail*
                          </label>
                          <input className='h-10 w-full border border-gray-300 rounded-lg p-2 outline-none' required type="email" placeholder='Type Here'/>
                        </div>

                        <div className='flex flex-col md:w-[50%]'>
                          <label className='text-gray-700 font-semibold mb-2 text-lg'>
                            Mobile Number*
                          </label>
                          <input className='h-10 w-full border border-gray-300 rounded-lg p-2 outline-none' required type="text" placeholder='Type Here'/>
                        </div>
                      </div>

                      <div>
                        <label className='text-gray-700 font-semibold mb-2 text-lg'>
                          Message
                        </label>
                        <textarea className='h-32 w-full border border-gray-300 rounded-lg p-2 outline-none' required placeholder='Type Here'/>
                      </div>

                      <button type='submit' className='md:w-fit md:px-14 md:h-12 md:text-lg h-10 w-full border border-sky-500 rounded-lg p-2 text-sky-500 font-semibold outline-none '>Submit</button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
}

export default ContactUs
