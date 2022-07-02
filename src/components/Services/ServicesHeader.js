import React from 'react'
function ServicesHeader() {
    const listItems = [
        'Delegate web development tasks to us ',
        'Chat with us anytime',
        'Scale your online course faster'
    ]

    return (
        <div className='pt-32'>
            <div className="grid place-items-center">
                <h4 className='text-[#186FC5]  text-lg px-2 text-center lg:px-0 lg:text-3xl font-semibold'>Are you spending more time designing your website instead of building your course?</h4>
                <ul className="list-none lg:flex items-center mt-5">
                    {
                        listItems.map((list, index) => (
                            <span className='flex items-center pl-5' key={index}>
                                <i className="fas fa-square transform rotate-45 mr-2 text-xs text-blue-600"></i>
                                <li className='text-[#2A3158] text-md'>{list}</li>
                            </span>
                        ))
                    }
                </ul>
                <div className='mt-10 px-2 lg:px-0'>
                    <img src='/images/services/services-header.svg' alt="services-header" className='object-contain' />
                </div>

                <div className="mt-10">
                    <h4 className="text-[#186FC5] text-center text-2xl font-semibold">
                        Your website, Imagined by you & created by us !
                    </h4>
                    <h4 className="text-[#186FC5] text-center text-2xl mt-4 font-semibold">
                        Imagine Getting All Your Website Tasks Done with no hassle
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ServicesHeader
