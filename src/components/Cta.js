import React from 'react';

function Cta() {
  return (
    <div className="
      flex flex-col lg:flex-row
      items-center justify-center
      bg-[#EEF1F0]
      /* mobile & tablette */
      gap-8 px-4 py-10 h-auto
      /* desktop (≥1024 px) : on garde ton style d’origine */
      lg:h-[25rem] lg:gap-[13rem] lg:px-0 lg:py-0
      /* très grands écrans */
      xl:gap-[16rem] 2xl:gap-[20rem]">

      {/* Bloc gauche */}
      <div className="flex flex-col items-center max-w-xl px-0 text-center lg:items-start lg:text-left ">

        <img
          src="NexsiteLogo2.png"
          alt="Logo"
          className="w-[9.5rem] h-[2.3rem] mb-4 lg:mb-0"
        />

        <h1 className="max-w-2xl pt-5 text-xl font-semibold sm:text-xl lg:text-2xl">
          You will never have a second chance to make the first impression, let us help you make an unforgettable one with your clients
        </h1>

        <button className="
          relative mt-6 h-[50px] px-5 w-fit overflow-hidden
          border border-[#2E849D] bg-[#EEF1F0] text-[#2E849D]
          transition-all hover:text-white hover:shadow-2xl
          before:absolute before:inset-0 before:z-0 before:w-0 before:h-full
          before:bg-[#2E849D] before:transition-all before:duration-500
          hover:before:w-full">

          <a
            href="/admin/profs"
            className="relative z-10 flex items-center justify-center text-xl font-semibold"
          >
            Contact&nbsp;Us
          </a>
        </button>
      </div>

      {/* Image droite */}
      <img
        src="cta.png"
        alt="CTA illustration"
        className="object-contain w-full max-w-xs mt-8 lg:mt-0 lg:pr-4"
      />
    </div>
  );
}

export default Cta;
