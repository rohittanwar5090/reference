import React from 'react'

function TechniquesRow({ first, src, heading, text }) {
    return (
        <div className='grid lg:grid-cols-2 lg:items-center lg:justify-around'>
            <div className={`lg:col-span-1 lg:w-3/4 mx-auto text-center text-[#490a97] ${first && 'order-last'} py-8 lg:py-0 `}
            >
                <h1
                    className='text-3xl font-bold ' >
                    {heading}
                </h1>
                <p className={`mt-3 ${'text-gray-500 '}`}>
                    {text}
                </p>
            </div>

            <div className={`lg:col-span-1 text-center mx-auto lg:w-3/4 ${!first && 'order-first lg:order-none'} `} >
                <img src={src} alt="" className='w-full h-auto object-contain mx-auto' />
            </div>
        </div>
    )
}

export default TechniquesRow
