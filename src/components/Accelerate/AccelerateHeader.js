import React from 'react'

function AccelerateHeader() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/Accelerate/accelerate-header.jpg')",
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}
            className='px-2 lg:px-0 mt-24 '
        >
            <div className='capitalize'>
                <div className='grid lg:grid-cols-2 items-center  '>
                    <div className='col-span-1 text-left px-10 py-5 lg:p-40'>
                        <h5 className='text-xl uppercase  text-[#f68a03]'
                        >Start learning online</h5>
                        <h1 className='text-2xl lg:text-4xl lg:mt-5 lg:mb-10 font-bold text-white text-left'>Accelerate your future.Learn anytime, anywhere</h1>
                        <div className='flex items-center text-white'>
                            <div className='mr-5 text-right'>
                                <h5 className='text-xs'>Demo Lectures</h5>
                                <h5 className='text-lg font-bold'>Watch Now</h5>
                            </div>
                            <div>
                                <img src="/images/Accelerate/play.png" alt="play-icon" />
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 lg:mt-40 ' >
                        <div className='px-5 py-5 lg:px-10 lg:py-10 bg-white text-center rounded-md
                         lg:w-3/5 mx-auto'>
                            <div>
                                <p className=' text-[#f68a03] text-xl lg:text-3xl font-bold'>
                                    100+
                                </p>
                                <p className='text-[#767577]'>
                                    Online courses, Explore a variety of fresh topics
                                </p>
                            </div>
                            <hr className=' my-4 bg-[#deeffe] h-[2px]' />
                            <div>
                                <p className=' text-[#f68a03] text-xl lg:text-3xl font-bold'
                                >
                                    Expert Instruction
                                </p>
                                <p className='text-[#767577]'>Find the right instructor for you</p>
                            </div>

                            <hr className=' my-4 bg-[#deeffe] h-[2px]' />

                            <div>
                                <p className='text-[#f68a03] text-xl lg:text-3xl font-bold'
                                >Be Industrial Leader</p>
                                <p className='text-[#767577]'>Learn on your schedule</p>
                            </div>

                            <hr className=' my-4 bg-[#deeffe] h-[2px]' />

                            <div>
                                <p>
                                    <i className=" text-[#f68a03] fas fa-th mr-5"></i>
                                    <span className='font-bold text-[#585759]'>Key Features</span>
                                </p>
                                <p className='text-left mt-4 text-[#767577]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, a asperiores accusantium dolor suscipit explicabo facere architecto deserunt quae repudiandae?</p>
                            </div>
                            <hr className=' my-4 bg-[#deeffe] h-[2px]' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccelerateHeader
