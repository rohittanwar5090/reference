import React from 'react'

function Template2Header() {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/template2/template2-header.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className='mt-24 grid place-items-center py-32 lg:p-64 '
        >
            <div className=' text-center text-black'>
                <h1 className='text-2xl lg:text-4xl text-white font-bold'>
                    <span className='text-[#97dfff]'>Build</span> your CAREER,BUSINESS OR HOBBY !
                </h1>

                <h6 className='text-white text-xl my-10'>
                    Online certified courses with in-depth and practical lessons in Marketing, Sign up for free, and reveal the MORE in you !
                </h6>
                <div
                    className='grid place-items-center'
                >
                    <p className='w-32 text-black text-center font-bold rounded-full px-4 py-2 bg-[#39bcf7]'
                    >
                        Try for free
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Template2Header
