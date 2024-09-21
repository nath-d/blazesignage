import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-screen w-full bg-[url('/signage-pictures/open.jpg')] bg-cover bg-center"></div>
                <div className="absolute top-0 left-0 h-screen w-full bg-black/70 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <Navbar />
                    <div className='flex justify-start items-center h-screen p-4'>
                        <div className='xl:ml-48 mt-[-140px] w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 h-fit md:p-20 p-12 flex flex-col shadow-lg 
                rounded-3xl bg-gray-950/10 ring-1 ring-black/5 backdrop-blur-md border-[#EAE4D6] border-2'>
                            <div className='text-start text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold leading-tight'>
                                <span className='text-[#EAE4D6]'>SIGNS THAT</span><br />
                                <span className='text-red-600'>SHINE</span>
                            </div>
                            <div className='text-start text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#EAE4D6] font-extralight mt-4'>
                                From concept to creation, we bring your narrative to life.
                            </div>
                            <button className='bg-[#EAE4D6] text-start p-4 text-md md:text-xl mt-8 w-1/2 md:w-fit rounded-xl text-red-600 font-medium'>EXPLORE NOW</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero