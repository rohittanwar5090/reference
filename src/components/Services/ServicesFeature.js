import React from 'react'
function ServicesFeature({ src, text, heading, benefits }) {
    return (
        <div
            className={` text-center lg:col-span-1 py-14 px-1`}
            style={{ boxShadow: '0px 3px 10px #00000040' }}
        >
            <img src={src} className='mx-auto object-contain' alt="services-features" />
            <h1 className={`text-[#4e5474] font-bold my-3 text-xl ${benefits && 'text-xs uppercase'} `}>{heading}</h1>
            <p className={`${benefits && 'text-md'} text-[#7F7F7F]`} >{text}</p>
        </div>
    )
}

export default ServicesFeature