import React from 'react'

function HomeLead() {
    return (
        <div className={`bg-[#081953] px-10 py-5 lg:grid grid-cols-4 mt-20 lg:px-12 lg:py-10`}
        >
            <div className='col-span-1 rounded-full '>
                <img src="/images/home/brochure-img.png" className='w-48 h-auto object-cover  mx-auto' alt="brochure-img" />
            </div>

            <div className="col-span-3 text-center lg:text-left mt-5 space-y-5 lg:space-y-0 lg:mt-0 lg:flex justify-center items-center gap-x-5 lg:px-5">
                <div>
                    <div className='text-white'>
                        <h1 className='text-2xl'>Get your free workbook on {'"The four phases in launching your online course"'}</h1>
                        <p className='text-lg my-4'>
                            Learn the entire process of launching your online course with our step by step guide including free worksheets, checklists and questionnaires.
                        </p>
                    </div>
                    <div className='lg:flex space-y-4 lg:space-y-0 gap-x-10'>
                        <form className='w-full'>
                            <input type="text" placeholder="Your Name" className='w-full h-12 px-2 outline-none cursor-pointer rounded-md' />
                        </form>
                        <form className='w-full'>
                            <input type="email" placeholder="Your Email" className='w-full h-12 px-2 outline-none cursor-pointer rounded-md' />
                        </form>
                        <div className='col-span-1 grid place-items-center mt-4 lg:mt-0'>
                            <a href="#yourlink" className='text-white rounded-md text-xl px-5 py-2 bg-[#DF7324]' >Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLead
