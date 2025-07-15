import React from 'react';
import { FaPencilRuler, FaCode, FaCloudUploadAlt } from 'react-icons/fa'; // React Icons (fa)

function Mission() {
    const sections = [
        {
            icon: <FaPencilRuler className="text-white w-[3.5rem] h-[3.5rem]" />,
            background: '#35767A',
            color: 'white',
            title: 'Design',
            desc: 'From sketches to wireframes to designing beautiful interfaces'
        },
        {
            icon: <FaCode className="text-white w-[5rem] h-[5rem]" />,
            background: '#418787',
            color: 'white',
            title: 'Development',
            desc: 'Developing the solution from scratch using modern frameworks and technologies'
        },
        {
            icon: <FaCloudUploadAlt className="w-[5rem] h-[5rem] text-[#2E849D]" />,
            background: '#EEF1F0',
            color: 'black',
            title: 'Deployment',
            desc: 'Deploying the website on a server, with the domain name'
        },
    ];

    return (
        <section
            data-animation="animate-slide-right"
            className="section relative pt-20 pb-12 bg-white z-40 lg:pt-[120px] lg:pb-[90px]"
        >
            <h1 className="text-xl font-medium text-center md:text-3xl lg:text-4xl mb-14">Our Mission</h1>
            <div className="container mx-auto bg-white">
                <div className="flex flex-wrap items-center justify-center -mx-4">
                    {/* Left image */}
                    <div className="w-full px-4 lg:w-4/12 animate-fade-left animate-delay-400 animate-once">
                        <img src="Mission.png" className="p-3 md:p-0" alt="Mission" />
                    </div>

                    {/* Right blocks */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12 animate-fade-left animate-delay-400 animate-once">
                        <div className="flex flex-col gap-3 p-5 mt-10 lg:mt-0 lg:ml-4">
                            {sections.map((element, index) => (
                                <div
                                    key={index}
                                    className="flex text-left gap-[2rem] w-full h-[11rem] justify-start items-center pl-[4rem] rounded-2xl"
                                    style={{ backgroundColor: element.background }}
                                >
                                    {element.icon}
                                    <div className="flex flex-col" style={{ color: element.color }}>
                                        <h1 className="text-3xl font-semibold">{element.title}</h1>
                                        <p className="max-w-2xl pr-2 text-xl font-normal">{element.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;
