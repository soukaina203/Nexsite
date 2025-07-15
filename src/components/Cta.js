import React from 'react'

function Cta() {
  return (
    <div className='flex justify-between h-[25rem]  items-center bg-[#EEF1F0] '>
      
      <div className='flex flex-col p-4 pl-12'>
      <img src='NexsiteLogo2.png' className='w-[9.5rem] h-[2.3rem] '/>
      <h1 className='max-w-5xl pt-5 text-4xl font-semibold text-left'>
      You will never have a second chance to make the first impression , let us help You to make an unforgattable one with your clients </h1>
      <button class="text-red w-fit mt-5  hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden border
             border-[#2E849D] bg-[#EEF1F0] px-5 text-[#2E849D] hover:shadow-2xl transition-all before:absolute
             before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
              before:bg-[#2E849D] before:transition-all before:duration-500 hover:text-white
               hover:shadow-[#2E849D] hover:before:left-0 hover:before:w-full"><a href="/admin/profs" class="relative z-10 flex items-center justify-center text-xl font-semibold">Contact Us</a></button>

      </div>


      <img src='cta.png'  className='pr-4'/>
    </div>
  )
}

export default Cta
