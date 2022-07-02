import React from 'react'

function Template3Hightlight() {
    return (
        <div className='py-20 my-20 bg-[#2f0855]'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-white' >COURSE HIGHLIGHT</h1>
                <hr className='w-12 h-1 mx-auto mt-2  bg-[#00a0e6]' />
            </div>
            <div className='lg:flex justify-around'>
                <div className='text-center w-1/2 mx-auto grid place-items-center lg:w-3/4 p-5'>
                    <img src="/images/template3/template3-hightlight1.png" alt="" />
                    <h1 className='text-white mt-2'>100+ video lectures</h1>
                </div>
                <div className='text-center w-1/2 mx-auto grid place-items-center lg:w-3/4 p-5'>
                    <img src="/images/template3/template3-hightlight2.png" alt="" />
                    <h1 className='text-white mt-2'>Research report writing with certification</h1>
                </div>
                <div className='text-center w-1/2 mx-auto grid place-items-center lg:w-3/4 p-5'>
                    <img src="/images/template3/template3-hightlight3.png" alt="" />
                    <h1 className='text-white mt-2'>Tests, quizzes & case studies</h1>
                </div>
                <div className='text-center w-1/2 mx-auto grid place-items-center lg:w-3/4 p-5'>
                    <img src="/images/template3/template3-hightlight4.png" alt="" />
                    <h1 className='text-white mt-2'>Live doubt-clearing sessions</h1>
                </div>
                <div className='text-center w-1/2 mx-auto grid place-items-center lg:w-3/4 p-5'>
                    <img src="/images/template3/template3-hightlight4.png" alt="" />
                    <h1 className='text-white mt-2'>50+ hours of video content</h1>
                </div>
            </div>
        </div>
    )
}

export default Template3Hightlight
