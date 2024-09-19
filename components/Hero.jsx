import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-screen w-full bg-[url('/signage-pictures/open.jpg')] bg-cover bg-center z-0"></div>
                <div className="absolute top-0 left-0 h-screen w-full bg-black/70 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <Navbar />
                    <div className='flex justify-start items-center h-screen'>
                        <div className='mt-[-220px] md:w-2/5 h-1/2 px-12 gap-4 flex flex-col shadow-lg xl:ml-48 py-20
                        aspect-auto rounded-3xl bg-gray-950/10 ring-1 ring-black/5 backdrop-blur-lg border-8 border-gray-10'>
                            <div className='text-8xl lg:text-9xl text-white font-bold'><span>SIGNS THAT</span><br /><span className='text-red-600'>SHINE</span></div>
                            <div className='text-2xl lg:text-3xl text-white font-extralight'>From concept to creation, we bring your narrative to life.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

{/* <div
className="h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-10">

</div> */}