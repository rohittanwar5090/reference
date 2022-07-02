import React from 'react'

function CertificatePreview() {
    return (
        <div className='grid place-items-center -mt-20 lg:-mt-10'>
            <div className='lg:flex justify-between bg-white shadow-2xl rounded-md'>
                <div
                    className='flex-[0.5] p-2 pl-5'>
                    <h1
                        className='font-bold text-3xl lg:text-4xl text-[#2680eb]'
                    >Preview this course</h1>
                    <hr className='w-12 h-1 my-4 bg-[#245ea7]' />
                    <h5 className='text-gray-600 font-bold text-lg'>This course include</h5>
                    <ul className='space-y-3 mt-7 text-left'>
                        <li>
                            <i className={`fas fa-play mr-5 text-blue-600`}></i>
                            45 hours on-demand video
                        </li>
                        <li>
                            <i className={`fas fa-cloud-download-alt mr-5 text-blue-600`}></i>
                            12 downloadable resources
                        </li>
                        <li>
                            <i className={`fas fa-clock mr-5 text-blue-600`}></i>
                            Full lifetime access
                        </li>
                        <li>
                            <i className={`fas fa-mobile-alt mr-5 text-blue-600`}></i>
                            Access on mobile and laptop
                        </li>
                        <li>
                            <i className={`fas fa-check mr-5 text-blue-600`}></i>
                            Certificate on completion
                        </li>
                    </ul>
                </div>

                <div className='flex-[0.5] '>
                    <div className='relative mx-auto lg:mx-0 mt-5 lg:mt-0 w-64 h-full '>
                        <img
                            className='lg:ml-9 h-full w-full mx-auto lg:mx-0'
                            src="/images/certificate/certificate-preview.jpg"
                            alt=""
                        />

                        <div className='absolute left-0 right-0 bottom-10 lg:-right-9 '>
                            <div
                                className='px-2  py-1 text-white text-lg font-bold flex gap-x-2 items-center justify-center lg:justify-around bg-[#233d63]'
                            >
                                <div>
                                    <h1>But this course</h1>
                                </div>

                                <div>
                                    <h5 className='text-[#c4be29]'>$76.99</h5>
                                    <h5
                                        className='font-bold text-xs text-[#db800f]'
                                    >
                                        <span className='line-through'>
                                            $104.99
                                        </span>
                                        {" "}24% off
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificatePreview
