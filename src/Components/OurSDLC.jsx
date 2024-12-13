import React from 'react'

const OurSDLC = () => {
  return (
    <div className='w-full xl:flex xl:justify-center xl:items-center mt-12'>
      <div className='xl:w xl:w-[1240px] mx-5 flex justify-center items-center gap-10 flex-col'>
        <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl p-3 font-bold text-center'>Our Software Development Process</h1>
        <div className='flex flex-col items-center gap-10 sm:w-[70%] md:w-[90%] relative'>
          {/* //----------------------------------------------------------------------Research-------------------------------------// */}
            <div className='flex flex-col gap-10 md:flex-row-reverse items-center md:justify-between relative'>
              <div className='flex flex-col gap-4 md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Research</h1>
                  <p className='text-sm text-white'>We begin by understanding your needs through detailed discussions and analysis. This helps us gather all necessary requirements and plan the project effectively. And then by understanding your needs through detailed discussions and analysis. This helps us gather all necessary requirements and plan the project effectively.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fgnuy7t6wwfyyrood2n5d&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>1</div>
            </div>
            {/* //----------------------------------------------------------------------Design-------------------------------------// */}
            <div className='flex flex-col md:flex-row  md:justify-between relative gap-10 items-center'>
              <div className='flex flex-col gap-4  md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Design</h1>
                  <p className='text-sm text-white'>Once we know exactly what you need, it's time to make it look and feel just right. We start by sketching out different ideas and turning them into digital designs. These designs are like blueprints for your software, showing how everything will work together. We keep refining these designs until they match your vision perfectly. Then, we create detailed plans to guide the building process.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fds7oscscerk4tpvyk6gd&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>2</div>
            </div>
            {/* //----------------------------------------------------------------------Development-------------------------------------// */}
            <div className='flex flex-col gap-10 md:flex-row-reverse items-center  md:justify-between relative'>
              <div className='flex flex-col gap-4  md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Development</h1>
                  <p className='text-sm text-white'>With the design finalized, our team gets to work writing the code that will bring your software to life. We break the project into smaller pieces and tackle them one by one. Throughout the process, we keep you updated on our progress and welcome your feedback to ensure we're on track.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fg55pjsvrco0dqaamwfkf&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>3</div>
            </div>
            {/* //----------------------------------------------------------------------Testing-------------------------------------// */}
            <div className='flex flex-col gap-10 md:flex-row  md:justify-between relative items-center'>
              <div className='flex flex-col gap-4  md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Testing</h1>
                  <p className='text-sm text-white'>Before your software goes live, we put it through rigorous testing to make sure it's reliable and performs well. We check every part of the software to find any bugs or issues that need fixing. This includes testing how it works under different conditions and with different devices. Once we're confident everything is working smoothly, your software is ready to launch.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fzuyo3hdhhlkjgow9g4lq&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>4</div>
            </div>
            {/* //----------------------------------------------------------------------Deployment-------------------------------------// */}
            <div className='flex flex-col gap-10 md:flex-row-reverse  md:justify-between relative items-center'>
              <div className='flex flex-col gap-4  md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Deployment</h1>
                  <p className='text-sm text-white'>Once your software has passed all tests and is ready to go, we move to the deployment phase. This is when we make your software available for use by installing it on your servers or making it accessible through the internet. We ensure a smooth transition by carefully implementing the software into your existing systems and providing any necessary training for your team. Finally, we're there to support you as you start using your new software.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fyur7svmhppcpfp7jo347&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>5</div>
            </div>
            {/* //----------------------------------------------------------------------Maintenance-------------------------------------// */}
            <div className='flex flex-col gap-10 md:flex-row  md:justify-between relative items-center'>
              <div className='flex flex-col gap-4  md:w-[30%]'>
                  <h1 className='text-lg text-white font-bold'>Maintenance</h1>
                  <p className='text-sm text-white'>After your software is up and running, we provide ongoing support to keep it running smoothly. This includes fixing any bugs that may arise, making updates to improve performance or add new features, and providing technical assistance when needed. Our goal is to ensure your software continues to meet your needs and deliver value over time.</p>
              </div>
              <div className='md:w-[30%]'>
                  <img src="https://www.softwebtechsolution.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevxykr37%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FSWS%2FMain%2FDevelopment%2520Process%2Fds1fqvaqe8rcbau2grxy&w=2048&q=75" alt="" />
              </div>
              <div className='bg-white text-xl w-10 h-10 z-40 rounded-full font-bold absolute top-center left-[50%] md:flex hidden justify-center items-center'>6</div>
            </div>
            <div className='absolute hidden md:flex w-10 left-[50%] justify-center items-center top-[7.4%] h-[85%]'> <div className='border-[1px] border-dashed h-full '></div></div>
        </div>
      </div>
    </div>
  )
}

export default OurSDLC
