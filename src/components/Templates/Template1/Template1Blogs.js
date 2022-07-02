import React from 'react'

function Template1Blogs() {
    return (
        <div className='mt-20 container max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold  text-[#212e4e]'>Educator Blogs</h1>
                <hr className='w-12 h-1 mx-auto mt-2  bg-[#00a0e6] ' />
            </div>

            <div className="mt-10 text-center lg:grid grid-cols-3 space-y-10 lg:space-y-0 gap-10 text-lg font-bold  text-[#3c4864]">
                <div className=" col-span-1 px-8 grid place-items-center" >
                    <img src='/images/template1/template1-blog1.png' alt='' />
                    <h6 className='pt-3'>How Is Fineline Tattoo Different From the Regular Tattoo?</h6>
                </div>
                <div className=" col-span-1 px-8  grid place-items-center" >
                    <img src='/images/template1/template1-blog2.png' alt='' />
                    <h6 className='pt-3'>7 Reasons to choose React native for web design</h6>
                </div>
                <div className="  col-span-1 px-8  grid place-items-center" >
                    <img src='/images/template1/template1-blog3.png' alt='' />
                    <h6 className='pt-3'>Art of making wireframes for minimal design</h6>
                </div>
                <div className=" col-span-1 px-8  grid place-items-center" >
                    <img src='/images/template1/template1-blog4.png' alt='' />
                    <h6 className='pt-3'>Using google ads for your cold lead generation</h6>
                </div>
                <div className=" col-span-1 px-8  grid place-items-center" >
                    <img src='/images/template1/template1-blog5.png' alt='' />
                    <h6 className='pt-3'>How to plan you ERP UI design among your team</h6>
                </div>
                <div className=" col-span-1 px-8  grid place-items-center" >
                    <img src='/images/template1/template1-blog6.png' alt='' />
                    <h6 className='pt-3'>Designing wireframes for Figma</h6>
                </div>
            </div>

            <div className=' my-20 w-32 text-white text-center mx-auto rounded-full px-4 py-2  bg-[#212e4e]'
            >
                Load More
            </div>
        </div>
    )
}

export default Template1Blogs
