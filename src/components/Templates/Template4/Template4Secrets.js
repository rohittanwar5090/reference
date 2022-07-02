import React from 'react'

function Template4Secrets() {
    return (
        <div className=' bg-[#eeeeee] px-5 lg:px-4 grid lg:grid-cols-2 items-center py-20 my-10' >
            <div className='col-span-1 lg:w-11/12 lg:p-10'>
                <h1 className='text-3xl font-extrabold text-[#490a97]'
                >
                    Register for the webinar to
                    <span className='text-[#ff4772]'> learn more Techniques & secrets </span>
                </h1>
                <div
                    className='pt-10 '
                >
                    <p className='inline-block bg-[#490a97]  text-white text-center rounded-full px-8 py-2'
                    >
                        Sign up
                    </p>
                </div>
            </div>

            <div className='col-span-1'>
                <div className=''>
                    <img src="/images/template4/template4-secrets.png" className='w-3/4 object-contain h-auto mx-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Template4Secrets
