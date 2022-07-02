import React from 'react'

function Template4Header() {
    return (
        <div
            style={{
                background: "url('/images/template4/template4-header.png') no-repeat center center",
                backgroundSize: 'cover',
                width: '100vw',
                height: '100%',
            }}
            className='mt-10 lg:mt-24 px-5 lg:p-20'
        >
            <div className='pt-40 lg:pt-20 pb-10 lg:pb-0 lg:w-1/2'>
                <h1 className='text-2xl lg:text-5xl  font-bold uppercase text-[#490a97] '>Make GRE Prep Easy</h1>
                <h6 className='text-xl text-gray-600 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum obcaecati quam perferendis quas! Quidem, deserunt! Amet quam soluta consectetur provident. Sint dolores aliquid commodi perspiciatis.</h6>
                <h6 className='text-xl font-bold text-gray-600'>
                    Attend our FREE <span className='underline text-[#ff4772]'>6 Strategies to Dominate Your GRE Preparation </span>webinar </h6>
                <div
                    className='pt-10'
                >
                    <p className='inline-block text-white text-center rounded-full px-4 py-2 bg-[#490a97]'
                    >
                        Register Today !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Template4Header
