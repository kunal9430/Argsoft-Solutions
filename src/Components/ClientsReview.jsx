import React, { useState } from 'react'

const ClientsReview = () => {
    const [content, setContent] = useState(0);
    const contentArr = {
      0:{
        Review: "I’ll definitely recommend it to others who need a hassle-free exam experience.",
        name: "Rajesh Gupta",
        desingnation: "Indian Public School"
      },
      1:{
        Review: "The LMS has really simplified and streamlined online assessments. Kudos to the team for their outstanding service!",
        name: "Anita Sharma",
        desingnation: "National Public School, Director"
      },
      2:{
        Review: "I was impressed by Online Exam' user-friendly platform and excellent support. The exam experience was seamless with instant results and feedback. Online Exam has made online assessments stress-free and efficient. Great job to the team!",
        name: "Ravi Kumar",
        desingnation: "Gyaan Sarovar Public School, Director"
      }
    }
    

    return (
        <div className='flex justify-center items-center'>
          <div className='mx-5 xl:w xl:w-[1240px]'>
            <div className='w-full flex flex-col gap-10 my-10'>
              <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>What our clients say</h1>
              <div className='flex justify-center items-center gap-5'>
                <div className='md:w md:w-[768px] border-2 mt-16 rounded-xl py-5 relative'>
                    <div className='absolute md:-top-24 sm:left-14 left-5 bg-gray-400 border-2 md:h-[140px] md:w-[140px] rounded-2xl h-24 w-24 -top-16 '></div>
                    <div className='sm:pl-14 pl-5 pr-5 flex flex-col gap-3'>
                      <div className='flex justify-end py-5'>
                        <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FClinetComment%2Frlxdnvdkdi0lmrstxojq&w=2048&q=75" alt="" />
                      </div>
                      <div className='flex flex-col gap-10'>
                        <div>
                          <p className='font-semibold text-white sm:text-xl w-[80%]'>{contentArr[content].Review}</p>
                        </div>
                        <div className='flex justify-between'>
                          <div className='flex flex-col gap-2'>
                            <div className='flex justify-cneter gap-3 sm:gap-5 items-center'>
                              <img className='sm:h-10 sm:w-10 h-6 w-6' src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FClinetComment%2Fhvlpncbv51xczmaqqh1b&w=2048&q=75" alt="" />
                              <h1 className='font-semibold text-white sm:text-2xl text-xl'>{contentArr[content].name}</h1>
                            </div>
                            <p className='text-white text-xs sm:text-sm'>{contentArr[content].desingnation}</p>
                          </div>
                          <div className='flex p-3 gap-3 items-end '>
                            <button onClick={() => {content===0?setContent(2):setContent(content-1)}} className='h-10 w-10 rounded-full flex justify-center items-center bg-white'>-</button>
                            <button onClick={() => {content===2?setContent(0):setContent(content+1)}} className='h-10 w-10 rounded-full flex justify-center items-center bg-white'>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
}

export default ClientsReview
