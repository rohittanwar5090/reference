import React from 'react'

function AccelerateSearch() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/images/Accelerate/search-bg.png')",
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
                }}
            >
                <div
                    className='grid place-items-center h-3/5 lg:h-full'
                >
                    <div className='w-full px-5 lg:px-0'>
                        <div className='flex justify-center '>
                            <input
                                className='text-gray-600 px-5 py-2 text-xl mr-1 w-full lg:w-2/5 '
                                type="text"
                                placeholder='what do you want to learn ?'
                            />
                            <button
                                className='text-white px-5 py-2 text-xl bg-[#ff960c]'

                            >Learn</button>
                        </div>
                        <div className='text-center mt-10'>
                            <h1
                                className='text-[#ff960c] uppercase text-xl'>Get started with VC learning
                            </h1>

                            <h1 className='text-4xl text-white font-bold'>
                                How it works
                            </h1>
                        </div>

                        <div className='relative -mb-60 lg:-mb-96 mt-10'>
                            <img src="/images/Accelerate/works.png"
                                className='lg:w-2/5 h-auto mx-auto'
                                alt="works"
                            />
                            <div
                                className='absolute top-1/2  -mx-5 -mt-5 left-1/2'
                            >
                                <img
                                    className='w-10 lg:w-full'
                                    src="/images/Accelerate/play.png" alt="play-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' -mt-20 lg:mt-60   flex gap-x-3 justify-center'>
                <button
                    className='rounded-md text-white px-5 bg-[#ff960c] py-2 text-xl'
                >Start Teaching</button>
                <button
                    className='rounded-md text-white bg-[#ff960c] px-5 py-2 text-xl'
                >Start Learning</button>
            </div>

            <div className='my-16'>
                <h1 className='text-center text-2xl lg:text-4xl font-extrabold'>Why VC Learning Works</h1>
                <div className='mx-auto lg:flex gap-x-10 justify-center w-full lg:w-1/2 mt-10 '>
                    <div className=' p-1 w-1/2 mx-auto lg:w-1/4 h-32  bg-white '
                        style={{
                            boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
                        }}
                    >
                        <div className='ring-1 ring-[#f68a03] flex flex-col justify-between py-2 h-full w-full bg-white' >
                            <img
                                src="/images/Accelerate/video.png"
                                className='w-12 mx-auto h-auto'
                                alt="video" />
                            <h1 className='font-bold text-center mt-2'>Recorded Videos</h1>
                        </div>
                    </div>
                    <div className=' p-1 w-1/2 lg:w-1/4 my-10 lg:my-0  mx-auto h-32  bg-white '
                        style={{
                            boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
                        }}
                    >
                        <div className=' flex flex-col justify-between py-2 h-full w-full bg-white ring-[#f68a03] ring-1'>
                            <img
                                src="/images/Accelerate/webinar.png"
                                className='w-12 mx-auto h-auto'
                                alt="video" />
                            <h1 className='font-bold text-center mt-2'>Live classes</h1>
                        </div>
                    </div>
                    <div className=' p-1 w-1/2 lg:w-1/4  mx-auto h-32  bg-white '
                        style={{
                            boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
                        }}
                    >
                        <div className='flex flex-col justify-between py-2 h-full w-full bg-white ring-1 ring-[#f68a03]'>
                            <img
                                src="/images/Accelerate/assignment.png"
                                className='w-12 mx-auto h-auto'
                                alt="video" />
                            <h1 className='font-bold text-center mt-2'>Assignments</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AccelerateSearch
