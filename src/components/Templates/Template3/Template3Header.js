import React from 'react'

function Template3Header() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/template3/template3-header.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%'
            }}
            className='p-10 lg:p-20'
        >
            <div className='pt-40 lg:w-2/5'>
                <h1 className='text-2xl lg:text-4xl text-white font-bold uppercase' >A complete course on the indian stock market</h1>
                <h6 className='text-xl text-white my-5'>A course curated for beginners, to learn in depth about stock market</h6>
                <div
                    className=''
                >
                    <p className='inline-block bg-[#39bcf7] text-black font-bold text-center rounded-full px-4 py-2'
                    >
                        Start learning now
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Template3Header
