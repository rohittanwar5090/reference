import React from 'react'

function LandingPageBenefit({ src, heading, text }) {
    return (
        <div className='text-center px-10  lg:col-span-1'>
            <img
                src={src} className='mx-auto font-bold text-2xl'
                alt="landing page benefits"
            />
            <h1 className='my-3 text-[#4e5474]' >{heading}</h1>
            <p>{text}</p>
        </div>
    )
}

export default LandingPageBenefit
