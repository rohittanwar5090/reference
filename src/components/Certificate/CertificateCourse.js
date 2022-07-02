import React from 'react'

function CertificateCourse() {
    return (
        <div className='container max-w-6xl mx-auto  p-7 lg:p-20'>
            <div className='grid gap-x-3 lg:grid-cols-2 items-center'>
                <div className='col-span-1 mt-10 lg:mt-0 order-last lg:order-first'>
                    <h1
                        className='font-bold text-2xl lg:text-4xl text-[#2680eb]'
                    >
                        Who this course is for:
                    </h1>
                    <ol className='space-y-2 mt-6 px-3 lg:px-5 list-disc text-gray-700'>
                        <li>
                            Anyone who wants to become a digital marketer, promote a business</li>
                        <li> Anyone who is tired of their day job or wants a career change</li>
                        <li>  People who want to earn an additional income from freelancing</li>
                        <li>Digital Marketers who want some more tricks</li>

                    </ol>
                </div>

                <div className='col-span-1 order-first lg:order-last  grid place-items-center'>
                    <img
                        className='lg:w-11/12 mx-auto h-auto object-contain'
                        src="/images/certificate/certificate-webinar.png" alt="webinar-img" />
                </div>
            </div>
        </div>
    )
}

export default CertificateCourse
