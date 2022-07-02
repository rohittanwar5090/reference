import React from 'react'

function Template5Header() {
    return (
        <>
            <div className='relative'>
                <div
                    style={{
                        background: "url('/images/template5/template5-bg.png') no-repeat center center",
                        backgroundSize: 'cover',
                        // height: '100vh',
                        width: '100%'
                    }}
                    className='px-5 lg:px-20 pt-64 lg:pt-40 h-3/4 lg:h-full'
                >
                    <div className='grid lg:grid-cols-2 items-center space-y-7 lg:space-y-0'>
                        <div className='col-span-1 font-extrabold lg:ml-20 my-20 lg:my-10'>
                            <h1 className='uppercase text-2xl lg:text-5xl '>
                                <span className='text-[#cd9c56]'>
                                    Learn Baking
                                </span>
                                {" "}in Just 7 days
                            </h1>
                            <h1 className='text-lg mt-4 lg:text-2xl'>
                                Kick start your career with us today and learn baking  from award winning coaches
                            </h1>
                        </div>

                        <div className='col-span-1 hidden lg:grid place-items-center'>
                            <img
                                className='ml-20 mt-0 lg:mt-20 block w-3/4 h-11/12 lg:w-3/5 lg:h-auto object-contain'
                                src="/images/template5/template5-header.png" alt="header-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:inline-flex absolute top-1/3 left-0'>
                <img
                    src="/images/template5/template5-headerLeft.png" alt="header-img"
                />
            </div>
        </>
    )
}

export default Template5Header

