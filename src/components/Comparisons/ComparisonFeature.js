import React from 'react'

function ComparisonFeature() {
    return (
        <div className='mt-10 px-3'>
            <h1 className='text-4xl font-bold text-center text-[#186fc5]'>Feature Comparison</h1>

            <section className='ring-1 ring-gray-600 rounded-lg mt-5'>
                <div className='bg-blue-600 grid grid-cols-3 rounded-tl-lg rounded-tr-lg text-white text-2xl py-2 px-2 lg:px-0'>
                    <h1 className='text-center col-span-1'>Features</h1>
                    <h1 className='text-center col-span-1'>Ezcolab</h1>
                    <h1 className='text-center col-span-1'>company1</h1>
                </div>

                <div className='grid grid-cols-3 text-xl p-1 mb-5'>
                    <ul className='text-center col-span-1  space-y-5'>
                        <li>
                            licene management
                        </li>
                        <li>
                            licene management
                        </li>
                        <li>
                            licene management
                        </li>
                        <li>
                            licene management
                        </li>
                        <li>
                            licene management
                        </li>
                    </ul>

                    <div className=' col-span-1 text-center flex flex-col justify-around  space-y-5'>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-gray-400`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                    </div>

                    <div className=' col-span-1 text-center  flex flex-col justify-around   space-y-5'>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                        <div>
                            <i className={`fas fa-check-circle mr-2 text-blue-600`}></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComparisonFeature
