import React from 'react'

function Template3Testimonials() {
    return (
        <div className=' my-10 lg:my-28 px-5 lg:px-0'>
            <div className='text-center mb-10 lg:mb-20'>
                <h1 className='text-3xl font-bold text-white'>Testimonials</h1>
                <hr className='w-12 h-1 mx-auto mt-2 bg-[#39bcf7]' />
            </div>
            <div className=' grid place-items-center'>
                <div className='relative'>
                    <img src="/images/template3/template3-testimonial.png" alt="testimonail" />
                    <div className='absolute  px-5 lg:p-10 top-20'>
                        <h6 className='text-xs lg:text-xl'>
                            Being a newcomer, I couldn't have hoped for a better start to the equity world! I gained deeper insights into the investment industry and helped me in my career planning.
                        </h6>
                        <img className='mx-auto mt-5' src="/images/template3/template3-stars.png " alt='stars' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template3Testimonials
