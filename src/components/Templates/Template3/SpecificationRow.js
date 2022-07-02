import React from 'react'

function SpecificationRow({ src, heading, text }) {
    return (
        <div className='text-white col-span-1 text-center lg:text-left lg:w-1/2'>
            <img src={src} className='mx-auto lg:mx-0' alt="" />
            <div className='my-6'>
                <p>{heading}</p>
                <hr className='w-12 h-1 mx-auto lg:mx-0 mt-2  bg-[#00a0e6]' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi id dicta excepturi adipisci alias accusamus ratione modi magnam delectus!</p>
        </div>
    )
}

export default SpecificationRow
