'use client'

import { React, useState } from 'react'
import { LuMenuSquare } from "react-icons/lu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='w-full h-[140px] bg-transparent backdrop-blur-md items-center flex mx-auto justify-center text-white'>
            <div className='flex justify-between items-center 2xl:w-[80%] w-full lg:p-2 p-2'>
                {/* <div className='font-semibold text-4xl xl:text-6xl'>Blaze Signage</div> */}
                <img src='logo/newBlaze-light.png' className='xl:w-[400px] w-[300px]'></img>
                {/* <div className='text-6xl font-semibold'>
                    Blaze Signage
                </div> */}
                <div className='lg:flex gap-6 lg:text-xl 2xl:text-2xl items-center hidden text-[#EAE4D6]'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Clients</div>
                    <div>Gallery</div>
                    <div className='ml-4 bg-[#EAE4D6] px-4 py-2 rounded-md text-black'>Contact Us</div>
                </div>
                <div className='lg:hidden'>
                    <LuMenuSquare onClick={toggleMenu} className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] text-[#EAE4D6]' />
                </div>
                {isMenuOpen && (
                    <div className='lg:hidden flex flex-col items-center text-[#EAE4D6] bg-blue-200 w-full h-screen absolute top-[140px] z-50'>
                        <div className='py-2'>Home</div>
                        <div className='py-2'>Services</div>
                        <div className='py-2'>Products</div>
                        <div className='py-2'>Clients</div>
                        <div className='py-2'>Gallery</div>
                        <div className='py-2 bg-[#EAE4D6] text-black px-4 rounded-md'>Contact Us</div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar