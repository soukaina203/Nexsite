import React from 'react';
import {
  FaCogs,           // Professional process
  FaRegClock,       // Delivering in deadlines
  FaBell,           // Keep you updates
  FaCheckCircle     // Validate the work
} from 'react-icons/fa';

function Steps() {
  const steps = [
    {
      icon: <FaCogs className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" />,
      title: 'Professional Process',
    },
    {
      icon: <FaRegClock className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" />,
      title: 'Delivering in Deadlines',
    },
    {
      icon: <FaBell className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" />,
      title: 'Keep You Updated',
    },
    {
      icon: <FaCheckCircle className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" />,
      title: 'Validate the Work at Each Step',
    },
  ];

  return (
    <div>
      {/* Hero text on image */}
      <div className="relative w-full h-[370px]">
        <img src="steps.png" alt="Steps background" className="object-cover w-full h-full" />
        <h1 className="absolute inset-0 flex items-center justify-center px-6 text-4xl md:text-6xl lg:text-7xl font-bold text-[#EEF1F0] text-center">
          Because Your Satisfaction Is Our Priority
        </h1>
      </div>

      {/* Steps cards */}
      <section className="flex items-center justify-center w-full py-16 bg-[white]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon, title }) => (
            <div
              key={title}
              className="group relative flex flex-col items-start p-8 w-72 h-64 rounded-3xl border border-white/20
                         bg-white/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-3
                         hover:shadow-2xl hover:shadow-[#2E849D]/40"
            >
              {/* Accent bar */}
              <span className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#2E849D] to-[#35767A]" />

              {/* Icon in circle */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full
                              bg-gradient-to-tr from-[#2E849D] to-[#35767A]">
                {icon}
              </div>

              {/* Title */}
              <h2 className="text-[#2A656D] text-xl font-semibold leading-snug">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Steps;
