import React from 'react'
import { LuMenuSquare } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='w-full h-[180px] bg-transparent backdrop-blur-md items-center flex mx-auto justify-center text-white'>
            <div className='flex justify-between items-center 2xl:w-[80%] w-full lg:p-12 p-2'>
                {/* <div className='font-semibold text-4xl xl:text-6xl'>Blaze Signage</div> */}
                <img src='logo/blaze-light.png' className='xl:w-fit w-[300px]'></img>
                {/* <div className='text-6xl font-semibold'>
                    Blaze Signage
                </div> */}
                <div className='lg:flex gap-6 lg:text-xl 2xl:text-2xl items-center hidden'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Clients</div>
                    <div>Gallery</div>
                    <div className='ml-4 bg-white px-4 py-2 rounded-md text-black'>Contact Us</div>
                </div>
                <div className='lg:hidden'>
                    <LuMenuSquare className='lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' />
                </div>

            </div>
        </div>
    )
}

export default Navbar