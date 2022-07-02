import React from 'react'
import SpecificationRow from './SpecificationRow'

function Template3Specification() {
    return (
        <div className='px-5 lg:px-0'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-white' >Course Specifications</h1>
                <hr className='w-12 h-1 mx-auto mt-2 bg-[#39bcf7]' />
            </div>
            <div className='mt-16 lg:grid grid-cols-2 place-items-center space-y-10 lg:space-y-0 lg:gap-y-20'>
                <SpecificationRow
                    src='/images/template3/profits.png'
                    heading='Investing + Trading'
                />
                <SpecificationRow
                    src='/images/template3/photo-video.png'
                    heading='90+ video lessons'
                />
                <SpecificationRow
                    src='/images/template3/analytics.png'
                    heading='Assessments'
                />
                <SpecificationRow
                    src='/images/template3/question.png'
                    heading='live doubt clearing'
                />
            </div>
            <div
                className='grid place-items-center mt-10'
            >
                <p className='inline-block text-black font-bold text-center rounded-full px-4 py-2 bg-[#39bcf7]'
                >
                    Buy Now
                </p>
            </div>
        </div>
    )
}

export default Template3Specification
