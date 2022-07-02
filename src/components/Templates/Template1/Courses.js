import React from 'react'

function Courses({ src, text }) {
    return (
        <div
            className=' text-center w-full lg:w-3/4 px-10 py-8 cursor-pointer h-64 lg:col-span-1 rounded-md flex flex-col justify-between'
            style={{
                boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)',
            }}
        >
            <div>
                <img className='mx-auto' src={src} alt="marketing" />
                <h1 className='text-2xl font-bold mt-2 text-[#212e4e]' >{text}</h1>
            </div>

            <div className='w-32 mx-auto text-center text-white rounded-md  bg-[#212e4e] px-4 py-2'
            >
                View More
            </div>
        </div>
    )
}

export default Courses
