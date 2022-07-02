import React from 'react'
function ComparisonRow({ src, heading, text, first }) {
    return (
        <div className='row my-5 lg:justify-around lg:items-center lg:grid lg:grid-cols-2 '>
            <div className={`flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'}`} >
                <img src={src} className='w-96 px-1 lg:px-0 block mx-auto h-auto object-contain' alt="home-features" />
            </div>

            <div
                className={`px-1 mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'} `}>
                <h1 className='text-3xl font-bold text-[#186fc5]'>{heading}</h1>
                <p className='text-xl mt-10 text-[#2a3158]'>{text}</p>
            </div>
        </div>
    )
}

export default ComparisonRow
