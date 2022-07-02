import React from 'react'
import { Link } from 'react-router-dom'

function BlogsHeader() {
    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className='header p-5 lg:px-8'>
            <div className=" items-center grid lg:grid-cols-2 mt-20 lg:mt-20 lg:px-5 ">
                <div className="px-1 lg:px-0 lg:w-11/12 lg:col-span-1 ">
                    <div>
                        <span className='text-[#186FC5] text-5xl font-bold '> Welcome to EZ Colab Blogs </span>
                    </div>
                    <p className='my-5 text-xl font-bold '>
                        BLogs added and updated weekly to help create, market and sell your online courses daily
                    </p>
                    <div className='lg:flex gap-x-5 font-bold'>
                        <p className='flex items-center'>
                            <i className='far fa-check-circle mr-2 text-blue-600'></i>Quality content delivered
                        </p>
                        <p className='flex items-center'>
                            <i className='far fa-check-circle mr-2 text-blue-600'></i>Optimized for course creators &amp; coaches
                        </p>
                    </div>

                    <form className='text-gray-500 mt-8 space-y-4'>
                        <div>
                            <label htmlFor='firstName'>First Name </label>
                            <input type="text" id='firstName' className='mt-2 w-11/12 lg:w-full block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name </label>
                            <input type="text" id='lastName' className='mt-2 w-11/12 lg:w-full block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
                        </div>
                        <div>
                            <label htmlFor='email' >Email </label>
                            <input type="email" id='email' className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
                        </div>

                        <div className='px-2 w-full lg:w-1/2'>
                            <Link to=''>
                                <button type='submit' onClick={submitForm} className='text-white  rounded-full px-4 py-2 bg-[#DF7324] '>
                                    Subscribe and get 10% off
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='lg:col-span-1 mt-20 lg:mt-0 flex justify-center items-center '>
                    <img src='/images/blogs/blogs-header.png' className='w-full transform-gpu scale-110 lg:w-4/5 h-auto object-contain' alt="blogs-header" />
                </div>
            </div>
        </div>
    )
}

export default BlogsHeader
