import React from 'react'

function Template2Blogs() {
    return (
        <div className='mt-20 container max-w-4xl mx-auto px-5 lg:px-0'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold  text-[#212e4e]'>Educator Blogs</h1>
            </div>

            <div className="mt-10 text-center lg:grid grid-cols-2 space-y-10 lg:space-y-0 gap-10 ">
                <div className="rounded-md  col-span-1  grid place-items-center p-0" >
                    <img src='/images/template1/template1-blog.png' className='rounded-tr-md rounded-tl-md object-cover w-full' alt='' />
                    <h6 className='pt-3 font-bold text-[#4d5771]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, consectetur.</h6>
                </div>
                <div className="rounded-md  col-span-1  grid place-items-center p-0" >
                    <img src='/images/template1/template1-blog.png' className='rounded-tr-md rounded-tl-md object-cover w-full' alt='' />
                    <h6 className='pt-3 font-bold text-[#4d5771]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, consectetur.</h6>
                </div>
                <div className="rounded-md  col-span-1  grid place-items-center p-0" >
                    <img src='/images/template1/template1-blog.png' className='rounded-tr-md rounded-tl-md object-cover w-full' alt='' />
                    <h6 className='pt-3 font-bold text-[#4d5771]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, consectetur.</h6>
                </div>
                <div className="rounded-md  col-span-1  grid place-items-center p-0" >
                    <img src='/images/template1/template1-blog.png' className='rounded-tr-md rounded-tl-md object-cover w-full' alt='' />
                    <h6 className='pt-3 font-bold text-[#4d5771]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, consectetur.</h6>
                </div>


            </div>

            <div className=' my-20 w-32 text-white text-center mx-auto rounded-full px-4 py-2 bg-[#212e4e] '
            >
                Load More
            </div>
        </div >
    )
}

export default Template2Blogs
