import React from 'react'
import ServicesFeature from './ServicesFeature'
import { Link } from 'react-router-dom'

function ServicesFeaturesRow() {
    return (
        <>
            <div className='grid place-items-center'>
                <Link to='/work' target='_blank'>
                    <button className='text-white  mt-3 rounded-md px-4 py-2  bg-[#df7324] '
                    >Checkout Our Work Here</button>
                </Link>
            </div>
            <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3  space-y-5 lg:space-y-0 gap-5'>
                <ServicesFeature
                    src='/images/services/services-webdesign-1-w.webp'
                    benefits={false}
                    heading='Web designing'
                    text='Get professional websites and convert your leads into sales.'
                />
                <ServicesFeature
                    benefits={false}
                    src='/images/services/services-automation-w.webp'
                    heading=' Automation tasks'
                    text='We’ll set up our lead generation API instantly on your website.'
                />
                <ServicesFeature
                    benefits={false}
                    src='/images/services/services-technical-w.webp'
                    heading='Technical support'
                    text=" Our team is an email away to fix those ‘little’ website errors that take hours to solve yourself."
                />
            </div>
        </>
    )
}

export default ServicesFeaturesRow
