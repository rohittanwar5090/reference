import React from 'react'

function PricingOptions() {
    const pricingOptions = [
        'Easy to use software',
        'Zero setup time and get one-on-one onboarding',
        'Always available friendly support team',
        'Secure and reliable'
    ]

    return (
        <>
            <div className="text-4xl">
                <h2 className='text-[#2A3158] font-semibold'>
                    Fill the form to get custom {" "}
                    <p
                        className='uppercase text-[#186FC5] '
                    >pricing options</p>
                </h2>
                <p className='text-gray-500 text-lg pt-2' >
                    EZ Colab, the only affordable solution to launch and scale your course quickly.
                </p>
                <ul className="space-y-2 pl-7 mb-3  lg:-ml-8 mt-3 " >
                    {
                        pricingOptions.map((option, idx) => {
                            return (
                                <li key={idx} className='list-none text-lg text-gray-500'>
                                    <i className="fas fa-check mr-2 text-blue-600"></i>
                                    {option}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default PricingOptions
