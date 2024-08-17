import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[150px] bg-blue-200 items-center flex mx-auto justify-center'>
            <div className='flex justify-between items-center w-[80%]'>
                <div className='text-4xl font-semibold'>Blaze Signage</div>
                <div className='flex gap-6 text-lg items-center'>
                    <div>Home</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Clients</div>
                    <div>Gallery</div>
                    <div className='ml-8 bg-white px-4 py-2 rounded-md'>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar