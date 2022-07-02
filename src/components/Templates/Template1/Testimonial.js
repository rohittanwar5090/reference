import React from 'react'

function Testimonial() {
    return (
        <div className="w-full lg:w-4/5 mx-auto py-10 px-1 lg:p-11 ">
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-[#212e4e]'>Testimonials</h1>
                <hr className='w-12 h-1 mx-auto mt-2 bg-[#00a0e6]' />
            </div>
            <div className='flex items-center gap-x-2 py-10'>
                <span className='bg-[#00a0e6] px-[0.8rem] py-2 text-white text-base cursor-pointer rounded-full'>
                    <i className="fas fa-arrow-left"></i>
                </span>

                <div className='rounded-md px-5 lg:px-10 py-2 lg:py-5' style={{
                    boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
                }}>
                    <div className="flex justify-center  mt-8 ">
                        <div className='flex gap-x-5 items-center'>
                            <img
                                src='/images/template1/template1-testimonial1.png'
                                className='hidden lg:inline-flex rounded-full h-32 w-32 p-2 opacity-60' alt="testimonials"
                            />

                            <img
                                src='/images/template1/template1-testimonial2.png'
                                className='ring-1 lg:h-40 lg:w-40 ring-black rounded-full p-2' alt="testimonials"
                            />

                            <img
                                src='/images/template1/template1-testimonial3.png'
                                className='lg:h-32 lg:w-32  hidden rounded-full  lg:inline-flex p-2 opacity-60' alt="testimonials"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/5 mx-auto mt-5">
                        <p className='text-center'>
                            Simple and Easy to use Platform for my course creation.
                            I will never have to worry aabout managing my website again.
                            Their Team is very supportive and constantly updating the app.
                        </p>
                    </div>
                    <div className="flex justify-center gap-x-2 text-2xl mt-12">
                        {
                            [1, 2, 3, 4, 5].map((item, idx) => (
                                <i key={idx} className="far fa-star text-[#00a0e6]"></i>
                            ))
                        }
                    </div>
                </div>

                <span className='bg-[#00a0e6] px-[0.8rem] py-2 text-white text-base cursor-pointer rounded-full'>
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>
        </div>
    )
}

export default Testimonial
