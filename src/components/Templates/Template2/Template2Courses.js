import React from 'react'
import Courses from './Courses'

function Template2Courses() {
    return (
        <div className='mt-20 px-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold  text-[#212e4e]'>Popular Courses</h1>
            </div>
            <div className=' p-5 mb-10 lg:p-0 max-w-6xl mx-auto mt-10 lg:mt-20 flex justify-center '>
                <div className='lg:gap-y-20 lg:grid grid-cols-3 gap-x-2 place-items-center'>
                    <Courses
                        src="/images/template2/digital-marketing.png"
                        text='Digital Marketing'
                    />
                    <Courses
                        src="/images/template2/bullhorn.png"
                        text='Social Media Marketing'
                        bg
                    />
                    <Courses
                        src="/images/template2/profit.png"
                        text='Organic Marketing'
                    />
                    <Courses
                        src="/images/template2/social-media.png"
                        text='Facebook/Instagram Advertising'
                        bg
                    />
                    <Courses
                        src="/images/template2/logotype.png"
                        text='Google Ads'
                    />
                    <Courses
                        src="/images/template2/newsletter.png"
                        text='Newsletter Marketing'
                        bg
                    />
                </div>
            </div>

        </div>
    )
}

export default Template2Courses
