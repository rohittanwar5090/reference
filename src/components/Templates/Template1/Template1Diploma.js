import React from 'react'

function Template1Diploma() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/template1/template1-bg.png')",
                backgroundSize: 'cover'
            }}
            className='lg:grid grid-cols-2 items-center'
        >
            <div className='col-span-1 lg:w-4/5 p-10 lg:p-20 '>
                <h1 className='text-3xl lg:text-4xl font-bold  text-[#8ed2f2]'>
                    Earn a certified Diploma qualification
                </h1>

                <h6 className='text-white text-xl lg:text-2xl my-5 '>
                    Demostrate your new skills and gain a step up in your career with Rudd Academy globally recognised certification.
                </h6>
            </div>

            <div className='col-span-1 lg:mt-auto'>
                <img src="/images/template1/template1-man.png" alt="" />
            </div>
        </div>
    )
}

export default Template1Diploma
