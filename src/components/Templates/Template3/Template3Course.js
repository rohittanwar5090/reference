import React from 'react'

function Template3Course() {
    return (
        <div className='py-10 px-5 lg:px-0'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-white' >Introduction to Course</h1>
                <hr className='w-12 h-1 mx-auto mt-2 bg-[#00a0e6]' />
            </div>
            <div className=' pt-10 grid place-items-center'>
                <div className='relative'>
                    <img src="/images/template3/template3-shadowImg.png" style={{
                        boxShadow: '0px 0px 15px 14px rgba(68,12,96,1)'
                    }} alt="" />
                    <div className='absolute top-1/2 left-1/2 -mx-5 -mt-5'>
                        <img src="/images/template3/template3-play.png" alt="play-icon" />
                    </div>
                </div>

            </div>
            <div className='pt-20 px-5 text-center lg:text-left grid place-items-center'>
                <div className='lg:grid grid-cols-2 items-center lg:gap-x-24 '>
                    <div className='col-span-1 relative block z-10'>
                        <img src="/images/template3/template3-man.png " className='mx-auto  lg:mx-0' alt="" />
                        <div className='hidden lg:inline-flex absolute left-20 lg:left-0  bottom-0 z-[-50]'>
                            <img src="/images/template3/template3-arrows.png" alt="" />
                        </div>
                    </div>
                    <div className='col-span-1 text-white mt-5 lg:mt-0'>
                        <h1 className='text-3xl font-bold'>About the instructor</h1>
                        <div className='mt-10'>
                            <h3 className='text-2xl font-bold'>Mr. Anand Nilka</h3>
                            <hr className='w-12 h-1 mx-auto lg:mx-0 mt-1 bg-[#00a0e6]' />
                            <p className='mt-3 text-lg lg:text-xl'>15+ years of experience in the NYSE Ex-Morgan Stanley, Barclays Capital, and RBS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template3Course
