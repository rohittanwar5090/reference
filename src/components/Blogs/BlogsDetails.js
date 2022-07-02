import React from 'react'

function BlogsDetails(props) {
    const { text1, text2, text3 } = props
    return (
        <div>
            <div className='my-5'>
                <img src='/images/blogs/blog-detail-img.png' alt="" className='w-11/12' />
            </div>
            <p className='text-gray-600'>{text1}</p>
            <p className='text-gray-600'>{text2}</p>
            <p className='text-gray-600'>{text3}</p>
        </div>
    )
}

export default BlogsDetails
