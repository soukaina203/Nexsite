import React from 'react'

function Method() {
    let dataOne = [
        { title: 'Meeting', background: '#1F5461', color: 'white', desc: 'We define type, target, and get to know your business more.' },
        { title: 'Structure', background: '#2A656D', color: 'white', desc: 'Creating sitemap and wireframes of the website.' },
    ]
    let DesignStep = { title: 'Design', desc: 'Delivering the final design of the website.' };

    let dataTwo = [
        { title: 'Development', background: '#EEF1F0', color: '#35767A', desc: 'Developing the solution using modern technologies.' },
        { title: 'Deployment', background: '#418787', color: 'white', desc: 'Hosting the website on a server and setting up a domain.' },
    ]

    return (
        <div className="px-4 py-12 mx-auto max-w-7xl">
            <h1 className="text-xl font-medium text-center md:text-3xl lg:text-4xl mb-14">How We Serve You?</h1>
            
            <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                
                {/* First Column */}
                <div className="flex flex-col gap-6">
                    {dataOne.map((e) => (
                        <div
                            key={e.title}
                            className="flex flex-col items-center justify-center w-full p-6 text-center h-44 rounded-2xl"
                            style={{ backgroundColor: e.background }}
                        >
                            <h1 className="text-2xl font-bold" style={{ color: e.color }}>{e.title}</h1>
                            <p className="text-lg" style={{ color: e.color }}>{e.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Design Column */}
                <div className="flex flex-col items-center justify-center border-2 border-[#35767A] w-[23rem]
                 h-[24rem] rounded-tl-full rounded-tr-full text-center p-8">
                    <h2 className="text-4xl font-semibold text-[#4C8588]">Design</h2>
                    <p className="mt-4 text-xl text-[#4C8588] ">Delivering the final design of the website.</p>
                    <div className="flex gap-[-2rem] mt-6">
                        <img src="design2.png" alt="Design Example 2" className="object-cover w-[8rem] h-[10rem] rounded-full"/>
                        <img src="design1.png" alt="Design Example 1" className="object-cover w-[8rem] h-[10rem] rounded-full"/>
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex flex-col gap-6">
                    {dataTwo.map((e) => (
                        <div
                            key={e.title}
                            className="flex flex-col items-center justify-center w-full p-6 text-center h-44 rounded-2xl"
                            style={{ backgroundColor: e.background }}
                        >
                            <h1 className="text-2xl font-bold" style={{ color: e.color }}>{e.title}</h1>
                            <p className="text-lg" style={{ color: e.color }}>{e.desc}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Method
