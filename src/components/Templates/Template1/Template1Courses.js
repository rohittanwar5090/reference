import React from 'react'
import Courses from './Courses'

function Template1Courses() {
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold  text-[#212e4e]'>Popular Courses</h1>
                <hr className='w-12 h-1 mx-auto mt-2  bg-[#00a0e6]' />
            </div>
            <div className=' p-5 lg:p-0 mx-auto max-w-6xl mt-10 lg:mt-20 '>
                <div className='grid lg:grid-cols-3 place-items-center space-y-8 lg:space-y-0 gap-y-10 '>
                    <Courses src="/images/template1/marketing.png" text='Digital Marketing' />
                    <Courses src="/images/template1/bullhorn.png" text='Social Media Marketing' />
                    <Courses src="/images/template1/profit.png" text='Organic Marketing' />
                    <Courses src="/images/template1/social-media.png" text='Facebook/Instagram Advertising' />
                    <Courses src="/images/template1/logotype.png" text='Google Ads' />
                    <Courses src="/images/template1/newsletter.png" text='Newsletter Marketing' />
                </div>
            </div>
        </div>
    )
}

export default Template1Courses
