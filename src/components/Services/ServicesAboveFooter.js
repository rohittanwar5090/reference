import React from 'react'
import { Link } from 'react-router-dom'

function ServicesBelowTesti() {
    return (
        <>
            <div className='grid place-items-center'>
                <Link to='/demo' target='_blank'>
                    <button
                        className='text-white mt-3 rounded-md px-4 py-2 bg-[#df7324]' >Get started</button>
                </Link>
            </div>

            <div
                style={{
                    backgroundImage: "url('/images/pricing-bg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
                className='p-5 lg:p-20 mt-5'
            >
                <div
                    className='text-lg lg:text-2xl px-2 lg:px-0 py-5 lg:py-10 mx-auto rounded-md w-full lg:w-1/2 text-center'
                    style={{
                        boxShadow: '0px 0px 18px 9px rgba(128,128,128,0.3)'
                    }}
                >
                    <h6
                        className='text-[#186FC5] p-2 '
                    >
                        How Often Did You Hear Yourself Saying:
                    </h6>

                    <h6
                        className='text-[#2A3158] p-2 lg:my-5'
                    >
                        "Yes, I Know! We Should Update Our Website."
                    </h6>

                    <div className=" font-semibold">
                        <Link to='/demo'
                            target='_blank'
                            className='p-2 rounded-md inline-block bg-[#df7324] text-white'
                        >
                            Get your new dream team today!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesBelowTesti
