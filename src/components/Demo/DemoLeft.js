import React from 'react'

function DemoLeft() {
    return (
        <div className='col-span-1'>
            <h1 className='text-blue-600 font-bold text-4xl'>Need help with launching and scaling your online course?
            </h1>

            <p className='text-[#424348] mt-3' > Watch the video below to know how the demo will help you grow your online course
            </p>
            <div className='mt-5 '>
                <img src='/images/demo/video-image.png' alt="video-img" />
            </div>
            <h1 className=' text-[#424348] text-2xl my-5'>Get a free demo of how you can,
            </h1>

            <ol className='list-decimal list-inside text-[#424348]' >
                <li>Launch your online course in 7 days
                </li>
                <li>Get beautiful website designs & accelerate web development with a mini team of designer, coder & manager provided by us
                </li>
                <li>Always receive excellent customer support & boost the growth of your online course</li>
            </ol>
            <p className='mt-5 text-[#424348]'>See for yourself! Fill out the form to schedule a free demo, customised for your needs. </p>
        </div>
    )
}

export default DemoLeft
