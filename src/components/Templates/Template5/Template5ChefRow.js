import React from 'react'

function Template5ChefRow({ heading1, heading2, first, src, text }) {
    return (
        <div className='grid lg:grid-cols-2 lg:items-center lg:justify-around'>
            <div className={`lg:col-span-1 lg:w-1/2 mx-auto   ${first && 'order-last'} py-8 lg:py-0 `}
            >
                <h1
                    className='text-3xl font-bold ' >
                    {heading1}
                </h1>
                <h1
                    className='text-3xl font-bold my-3 text-[#cd9c56]'>
                    {heading2}
                </h1>
                <p className={`mt-3 ${'text-gray-500 '}`}>
                    {text}
                </p>
            </div>

            <div className={`lg:col-span-1 text-center mx-auto lg:w-3/4 ${!first && 'order-first lg:order-none'} `} >
                <img src={src} alt="" className='w-96 h-auto object-contain mx-auto' />
            </div>
        </div>
    )
}

export default Template5ChefRow
