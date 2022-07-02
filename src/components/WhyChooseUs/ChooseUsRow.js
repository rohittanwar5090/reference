import React from 'react'
import { Link } from 'react-router-dom'

function ChooseUsRow({ first, src, text1, text2 }) {
    return (
        <div className='grid lg:grid-cols-2 lg:items-center lg:justify-around'>
            <div
                className={`lg:col-span-1 w-4/6 mx-auto text-center rounded-lg mt-7 lg:mt-64 ring-1 ring-gray-200 p-6 lg:p-10 ${first ? 'order-last bg-[#186fc5]' : 'bg-white'}`}
            >
                <h1
                    className={`text-3xl font-bold ${first ? 'text-white' : 'text-[#186FC5]'}`} >
                    Ez Colab
                </h1>
                <p className={`mt-3 ${first ? 'text-white' : 'text-gray-500 '}`}>
                    {text1}
                </p>
                <Link to='/demo' target='_blank'>
                    <button
                        className={`${first ? 'bg-[#df7324]' : 'bg-[#406aa8]'} text-white px-8 py-2 rounded-full mt-3`}
                    >
                        Book a Demo
                    </button>
                </Link>
            </div>

            <div className={`lg:col-span-1 text-center mx-auto w-4/6 ${!first && 'order-first lg:order-none'} mt-28 lg:mt-0 `} >
                <img src={src} alt="" className='w-64 h-64 object-contain mx-auto' />
                <h1 className='text-3xl font-bold text-[#2A3158]'>Ordinary way</h1>
                <p className='text-gray-500 mt-3'>
                    {text2}
                </p>
            </div>
        </div>
    )
}

export default ChooseUsRow
