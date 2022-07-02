import React from 'react'

function Courses({ src, text, bg }) {
    return (
        <div
            className={`text-center lg:w-3/4 lg:col-span-1 rounded-md px-10 py-10 ${bg ? 'bg-[#212e4e] ' : 'bg-white'} `}
        >
            <img className='mx-auto w-16 h-16 object-contain' src={src} alt="marketing" />
            <h1 className={`text-lg font-bold mt-2 ${bg ? 'text-white' : 'text-[#212e4e] '}`}
            >{text}</h1>
        </div>
    )
}

export default Courses
