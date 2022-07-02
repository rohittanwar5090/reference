import React from 'react'
import { Link } from 'react-router-dom'

function ComparisonHeader() {
    return (
        <section className='max-w-6xl mx-auto pt-28 lg:pt-32 '>
            <div className='lg:grid grid-cols-2 '>
                <div className=' px-4 lg:px-0 col-span-1 flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-[#186fc5]'
                    >EZ colab V/s company1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere reprehenderit repellat ipsam quasi laudantium, mollitia id veniam deleniti reiciendis a.</p>

                    <div className='space-y-2 py-5'>
                        <div>
                            <input type="text" placeholder='work email' className='ring-1 lg:w-1/2 shadow-lg text-lg rounded-full ring-black px-2 py-1' />
                        </div>
                        <div>
                            <input type="text" placeholder='Company size' className='ring-1 lg:w-1/2 shadow-lg text-lg rounded-full ring-black px-2 py-1' />
                        </div>
                    </div>

                    <div>
                        <Link to='/demo' target='_blank' className='text-white rounded-full px-4 py-2 bg-[#df7324]' >Request a Demo</Link>
                    </div>
                </div>

                <div className='px-2 lg:px-0 col-span-1 grid place-items-center'>
                    <img src='/images/comparison/comparison-header.png' className='w-full h-auto object-contain' alt="features-header" />
                </div>
            </div>
        </section>
    )
}

export default ComparisonHeader
