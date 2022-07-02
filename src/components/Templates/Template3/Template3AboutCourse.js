import React from 'react'

function Template3AboutCourse() {
    return (
        <>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold text-white' >About the Course</h1>
                <hr className='w-12 h-1 mx-auto mt-2  bg-[#00a0e6]' />
            </div>
            <div className='lg:flex items-center lg:justify-around px-5 lg:px-0 space-y-10 lg:space-y-0'>
                <div className='text-white lg:w-1/3'>
                    <h1 className='text-2xl'>A Complete Course on the Indian Stock market</h1>
                    <h6 className='my-5'>A course curated by Kundan kishore for investors, traders, career seekers and students of india.</h6>
                    <div className='ring-1 ring-white w-3/4 lg:w-3/5 px-8 py-5 mx-auto lg:mx-0 ' >
                        <h2>Language: English</h2>
                        <h2>Enrolled Learners: 7,409</h2>
                        <h2>Validity Period: Lifetime</h2>
                        <h1 className='font-bold text-[#d5c109]' >$199 only</h1>
                    </div>

                    <div className='w-32 mt-10 mx-auto lg:mx-0 text-center  rounded-full px-2 py-2 text-black font-bold bg-[#39bcf7]'
                    >
                        Buy now
                    </div>
                </div>

                <div>
                    <img src="/images/template3/template3-about-course.png" alt="about-course" />
                </div>
            </div>
        </>
    )
}

export default Template3AboutCourse
