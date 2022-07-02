import React from 'react'

function BlogsPost({ post }) {
    return (
        <>
            <div className="grid grid-cols-3 items-center border-b-2 border-black w-full ">
                <div className='col-span-2'>
                    <h4 className="text-sm font-semibold text-[#2a3158]">
                        cutting-edge products launched through logitech
                    </h4>
                    <div className="post-info text-md ml-1 mt-4">
                        <i className="far fa-clock mr-2"></i>
                        <span>Nov 10,2021</span>
                    </div>
                </div>

                <div className="mb-5 col-span-1">
                    <img src={post ? '/images/blogs/post-1.png' : '/images/blogs/post-2.png'} alt="blogs-post" />
                </div>
            </div>
        </>
    )
}

export default BlogsPost
