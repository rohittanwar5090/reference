import React from 'react'

function Template4Testimonial() {
    return (
        <div className='px-2 lg:px-0'>
            <h1 className='text-2xl lg:text-4xl  font-bold text-center text-[#490a97] ' >What our students tell about us !</h1>

            <div className='relative grid place-items-center pt-10'>
                <div className='relative px-3 lg:px-5 '>
                    <img src="/images/template4/template4-testimonial1.png" alt="" />
                    <div className='absolute bottom-9 left-10 lg:bottom-20 lg:left-16'>
                        <img src="/images/template4/template4-testimonial2.png" alt="" />
                    </div>
                </div>
                <div className='w-3/4 lg:w-1/4 text-center absolute top-5 lg:top-10'>
                    <div className="flex justify-center mt-12">
                        <img src="/images/template4/template4-stars.png" alt="" />

                    </div>
                    <h3 className='text-[#490a97]  lg:text-xl font-bold lg:py-5'>Shriya</h3>
                    <p className='text-xs lg:text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum, voluptates eveniet veniam obcaecati ratione suscipit a quas iste ipsa.</p>
                </div>
            </div>
            <div className='grid place-items-center py-10'>
                <img src="/images/template4/template4-testimonial3.png" alt="" />
            </div>
        </div>
    )
}

export default Template4Testimonial
