import React from 'react'

function AccelerateCourseRow({ src, course, instructor, courses, details }) {
    return (
        <div className='w-96 pb-3  '
            style={{
                boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
            }}
        >
            <img src={src} className='w-full h-auto' alt="img" />
            <p className='text-center text-white p-1  bg-[#f68a03]'>
                {course}
            </p>
            <h5 className='text-center my-4 '>
                Instructor Name:
                <span className='text-blue-600'> {instructor}</span>
            </h5>
            <div className='flex items-center justify-around'>
                <p>Classes No <span className='text-blue-600'>{courses}</span></p>
                <div>
                    <i className="fas fa-clock mr-2"></i>
                    <span>Time</span>
                </div>
                <p className='text-blue-600'>3 hours 20 min</p>
            </div>
            <div className='p-2'>
                <hr />
                <p className='text-gray-600 py-3'>
                    {details}
                </p>
                <hr />
            </div>
            <h1 className='text-center cursor-pointer text-[#f68a03]' >View Program <i className="fas fa-arrow-right"></i></h1>
        </div>
    )
}

export default AccelerateCourseRow
