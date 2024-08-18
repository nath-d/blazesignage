import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-screen w-full bg-[url('/signage-pictures/open.jpg')] bg-cover bg-center z-0"></div>
                <div className="absolute top-0 left-0 h-screen w-full bg-black/30 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <Navbar />
                </div>
            </div>



        </>
    )
}

export default Hero