import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[150px] bg-transparent items-center flex mx-auto justify-center text-white'>
            <div className='flex justify-between items-center w-[80%]'>
                <div className='text-5xl font-semibold'>Blaze Signage</div>
                <div className='flex gap-6 text-xl items-center'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Clients</div>
                    <div>Gallery</div>
                    <div className='ml-8 bg-white px-4 py-2 rounded-md text-black'>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar