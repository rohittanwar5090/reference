import React from 'react'

function DemoTestimonial() {
    return (
        <div className='px-5 mt-10 lg:mt-0 lg:px-0 shadow-lg grid place-items-center pb-32'>
            <h1 className='text-[#186FC5] text-center lg:text-left font-bold text-3xl my-8'>What our customers say</h1>
            <div className='bg-white text-center shadow-2xl lg:w-1/2 my-4 text-gray-600  rounded-md p-5'>
                <div>
                    <img src="/images/demo/demo-testimonialImg.jpg"
                        className=' block my-5 h-32 w-auto object-contain mx-auto' alt="testimonial-img"
                    />
                    <h5 className='mb-2 text-center'>I chose EZ Colab because of Easy to use UI that syncs with course creation workflow, Gamification, good limits for the budget, Fast development and the willingness of the founder to listen to customer feedbacks
                    </h5>
                    <h1 className='text-xl font-bold my-2'>Indratno Widiarto</h1>
                    <h1 className='text-gray-600'>Founder, Xperdio Academy</h1>
                </div>
            </div>
        </div>
    )
}

export default DemoTestimonial
