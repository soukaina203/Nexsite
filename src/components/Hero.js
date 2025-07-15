import React from 'react'

function Hero() {
  return (
    <div>
      <div class="relative w-full h-full px-6 isolate pt-14 lg:px-8 ">
        <div class="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#baa4b3] to-[#b6a1b0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          >

          </div>
        </div>
        <div class="max-w-full mx-auto py-11 sm:py-48 lg:py-44 ">
          <div class="mt-[-3rem] text-center sm:mt-[-1rem]  flex justify-center items-center flex-col">

            <h1 class="p-3  text-4xl  font-bold leading-10  line-height-[3rem]  sm:text-5xl md:text-6xl lg:text-[3.5rem]  text-[#2E849D]">Need A Website That showcase your services</h1>
            <p class="max-w-2xl mt-3 text-lg leading-8 text-gray-600 sm:text-base md:text-lg lg:text-xl">Or Struggling with the online presence of your business : Nexsite is here to accoumplish that mission</p>
            <div class="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4 max-w-2xl text-[2rem] sm:gap-x-6">


              <button class="text-red w-fit hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden border
             border-[#2E849D] bg-[#2E849D] px-3 text-white shadow-2xl transition-all before:absolute
             before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
              before:bg-white before:transition-all before:duration-500 hover:text-[#2E849D]
               hover:shadow-[#2E849D] hover:before:left-0 hover:before:w-full"><a href="/admin/profs" class="relative z-10 flex items-center justify-center text-xl font-semibold">Discover Our Services</a></button>


<button class="text-red w-fit hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden border
             border-[#2E849D] bg-white px-3 text-[#2E849D] shadow-2xl transition-all before:absolute
             before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
              before:bg-[#2E849D] before:transition-all before:duration-500 hover:text-white
               hover:shadow-[#2E849D] hover:before:left-0 hover:before:w-full"><a href="/admin/profs" class="relative z-10 flex items-center justify-center text-xl font-semibold">Contact Us</a></button>


            </div>
          </div>

        </div>

      </div>

      <div class="relative w-full h-full px-8  flex justify-center items-center isolate md:mt-[-13rem] pt-14 lg:px-8">
        <img src="pictures.png" alt="" class="mx-auto mb-4 lg:mx-0" />
      </div>
    </div>
  )
}

export default Hero
