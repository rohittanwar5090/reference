import React from 'react'
import { Link } from 'react-router-dom'
function Row({ src, heading, text, optional, first, textSec, textTer, textQuat, mobileLogo, btn }) {
    return (
        <div className='row my-5 lg:justify-around lg:items-center lg:grid lg:grid-cols-2 '>
            <div className={`flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'}`} >
                <img src={src} className='block mx-auto h-auto object-contain w-[35rem]' alt="home-features " />
            </div>

            <div
                className={`px-1  mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'} `}>
                <h1 className='text-3xl font-bold text-[#186fc5]' >{heading}</h1>
                <p className='text-xl mt-2 text-[#2A3158]'>{text}</p>
                {
                    textSec && <p className='text-xl mt-2'>{textSec}</p>
                }
                {
                    textTer && <p className='text-xl mt-2'>{textTer}</p>
                }
                {
                    textQuat && <p className='text-xl mt-2'>{textQuat}</p>
                }
                {
                    optional && (
                        <h1 className='text-[#DF7324] text-xl mt-1 font-bold '>{optional}</h1>
                    )
                }
                <br />
                {
                    mobileLogo && (
                        <div className='lg:flex mt-5 gap-5'>
                            <a href="https://apps.apple.com/bf/app/ezcolab/id1547083614" target='_blank' rel='noreferrer'>
                                <img src={mobileLogo[1]} alt="apple-icon" className='cursor-pointer' />
                            </a>
                            <div className='my-2 lg:my-0' />
                            <a href="https://play.google.com/store/apps/details?id=com.ezcolab" target='_blank' rel='noreferrer'>
                                <img src={mobileLogo[0]} alt="playstore-icon" className='cursor-pointer' />
                            </a>
                        </div>
                    )
                }
                <br />
                {
                    btn && (
                        <div className='mt-3'>
                            <Link to='/pricing' target='_blank' className='text-white rounded-full px-4 py-2 bg-[#DF7324]' >Get started</Link>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Row
