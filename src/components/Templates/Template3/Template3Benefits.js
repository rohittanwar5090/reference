import React from 'react'

function Template3Benefits() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/template3/template3-benefits.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%'
            }}
            className='py-20 my-20'
        >
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-white' >COURSE BENEFITS</h1>
                <hr className='w-12 h-1 mx-auto mt-2  bg-[#00a0e6]' />
            </div>

            <div className='flex items-around justify-between mt-20'>
                <div className='grid space-y-20 lg:space-y-28'>
                    <div className=' w-1/2 mx-auto grid place-items-center '>
                        <img src="/images/template3/template3-benefit1.png" className='mr-auto' alt="" />
                        <h1 className='text-white mt-2'>Learn how to make career in stock market</h1>
                    </div>
                    <div className=' w-1/2 mx-auto grid place-items-center '>
                        <img src="/images/template3/template3-benefit2.png" className='mr-auto' alt="" />
                        <h1 className='text-white mt-2'>Learn to identify good stocks/share to invest</h1>
                    </div>
                </div>

                <div className='grid space-y-20 lg:space-y-28'>
                    <div className=' w-1/2 mx-auto grid place-items-center '>
                        <img src="/images/template3/template3-benefit3.png" className='mr-auto' alt="" />
                        <h1 className='text-white mt-2'>Learn all hidden screts, myths and trivia of the stock market</h1>
                    </div>
                    <div className=' w-1/2 mx-auto grid place-items-center '>
                        <img src="/images/template3/template3-benefit4.png" className='mr-auto' alt="" />
                        <h1 className='text-white mt-2'>Learn to manage your stock investment portfolio</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template3Benefits
