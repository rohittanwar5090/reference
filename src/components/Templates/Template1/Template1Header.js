import React from 'react'

function Template1Header() {
    return (
        <div style={{
            backgroundImage: "linear-gradient(to right bottom,#E0EFFF,#EFF5FC)",
        }} className='pt-40'>
            <div className='grid items-center  lg:grid-cols-2 px-5 lg:px-10'>
                <div className='lg:col-span-1 p-3 lg:p-0 lg:w-11/12'>
                    <h1 className='text-3xl lg:text-5xl font-extrabold text-[#233d62]' >Build your career,business or hobby</h1>
                    <h6 className='text-xl my-5 text-gray-600'>Online certified courses with in-depth and practical lessons in Marketing, Sign up for free, and reveal the MORE in you !</h6>
                    <div className='w-32 text-black text-center rounded-full bg-[#00a0e6] px-4 py-2'
                    >
                        Try for free
                    </div>
                </div>

                <div className='lg:col-span-1 mt-8 lg:mt-0 flex justify-center items-center'>
                    <img src="/images/template1/template1-header.png" className='w-3/4 h-auto object-contain' alt="header-img" />
                </div>
            </div>
        </div>

    )
}

export default Template1Header
