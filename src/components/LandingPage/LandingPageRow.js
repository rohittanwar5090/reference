import React from 'react'

function LandingPageRow({ src, orangeText, heading, text, optional, first, textSec, textTer, textQuat }) {
    return (
        <div className='row  my-20 lg:justify-around lg:items-center lg:grid lg:grid-cols-2 '
        >
            <div className={`flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'}`}>
                <img src={src} className='w-[25rem] block mx-auto h-auto object-contain' alt="landing page features " />
            </div>

            <div
                className={`mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'} `}>
                <h1 className='text-2xl font-bold text-[#186FC5]'
                >{heading}</h1>
                <p className='text-lg mt-2 text-[#5b617f]' >{text}</p>
                {
                    textSec && <p className='text-lg mt-2 text-[#5b617f]'>{textSec}</p>
                }
                {
                    textTer && <p className={`${orangeText ? 'text-[#df7324]' : 'text-[#5b617f]'} text-lg mt-2 font-bold`}
                    >{textTer}</p>
                }

                {
                    textQuat && <p className='text-lg mt-2 text-[#5b617f]' >{textQuat}</p>
                }

                {
                    optional && (
                        <h1 className='text-lg mt-1 font-bold text-[#df7324]'>{optional}</h1>
                    )
                }
            </div>
        </div>
    )
}

export default LandingPageRow
