import React from 'react'

function Template2Tablet() {
    return (
        <div className='grid place-content-center py-20 px-1 lg:px-0'>
            <div className='relative'>
                <img src="/images/template2/template2-tablet.png" alt="tablet" />
                <div className='absolute top-0'>
                    <div className=' py-2 lg:py-5'>
                        <div className="flex justify-center mt-8 ">
                            <div className='flex gap-x-5 items-center'>
                                <img
                                    src='/images/template1/template1-testimonial1.png'
                                    className='hidden lg:inline-flex rounded-full lg:h-32 lg:w-32 p-2 opacity-60' alt="testimonials"
                                />

                                <img
                                    src='/images/template1/template1-testimonial2.png'
                                    className='ring-1 h-16 w-16 lg:h-40 lg:w-40 ring-black rounded-full p-2' alt="testimonials"
                                />

                                <img
                                    src='/images/template1/template1-testimonial3.png'
                                    className='lg:h-32 lg:w-32  hidden rounded-full  lg:inline-flex p-2 opacity-60' alt="testimonials"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-4/5 mx-auto mt-5">
                            <p className='text-xs lg:text-lg px-10 lg:px-2  text-center'>
                                Simple and Easy to use Platform for my course creation.
                                I will never have to worry aabout managing my website again.
                                Their Team is very supportive and constantly updating the app.
                            </p>
                        </div>

                        <div className="hidden lg:flex justify-center gap-x-2 text-2xl mt-12">
                            <i className="far fa-star"> </i>
                            <i className="far fa-star" ></i>
                            <i className="far fa-star" ></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template2Tablet
