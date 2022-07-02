import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { collaboratorListItems, ezCreatorList, createrListItems } from './PricingPlanListData'
function PricingPlan() {
    const [show, setShow] = useState(true)
    const [inr, setInt] = useState(true)
    function renderList(listName) {
        return (
            <Fragment>
                {
                    listName.map((list, index) => {
                        return (
                            <li key={index}>
                                <i className={`fas fa-check mr-2 text-blue-600`}></i>{list}
                            </li>
                        )
                    })
                }
            </Fragment>
        )
    }

    return (
        <>
            <div className='flex justify-center'>
                <h5
                    className={`${show
                        ? 'text-white bg-[#2563eb]'
                        : 'bg-white text-[#0762bb]'} 
                        cursor-pointer transition-all duration-200 px-5 py-2 ring-1 ring-[#0762bb]`}
                    onClick={() => setShow(true)}
                >
                    Monthly
                </h5>

                <h5
                    className={`${show
                        ? 'bg-white text-[#0762bb]'
                        : 'bg-[#2563eb] text-white'} 
                        cursor-pointer transition-all duration-200  px-5 py-2 ring-1 ring-[#0762bb]`}
                    onClick={() => setShow(false)}
                >
                    Annual
                </h5>
            </div>

            <div className={`flex justify-center mt-5`}>
                <h5
                    className={`${inr
                        ? 'text-white bg-[#2563eb]'
                        : 'bg-white text-[#0762bb]'} cursor-pointer transition-all duration-200  px-5 py-2 ring-1 ring-[#0762bb]`}
                    onClick={() => setInt(true)}
                >
                    USD
                </h5>

                <h5
                    className={`${inr
                        ? 'bg-white text-[#0762bb]'
                        : 'bg-[#2563eb] text-white'} cursor-pointer transition-all duration-200  px-5 py-2 ring-1 ring-[#0762bb]`}
                    onClick={() => setInt(false)}
                >
                    INR
                </h5>
            </div>

            <div className="container mx-auto mt-20 px-3 lg:p-0">
                <div className={`grid lg:grid-cols-3 lg:gap-x-3 justify-center`}>
                    <Fragment>
                        {
                            show ? (
                                <Fragment>
                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center'>Collaborator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl text-[#333a5f]'
                                        >
                                            {inr ? `$${29}/mo` : `₹${(29 * 75).toString().slice(0, 1)},${(29 * 75).toString().slice(1)}/mo`}
                                        </h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for Community Building and Collaborating</h1>
                                        }
                                        <a href="https://buy.stripe.com/3csaFW57K4FT1MscMN"
                                            target='_blank'
                                            rel="noreferrer"
                                            className=''
                                        >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(collaboratorListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center'>Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl text-[#333a5f]'
                                        >
                                            {inr ? `$${149}/mo` : `₹${(149 * 75).toString().slice(0, 2)},${(149 * 75).toString().slice(2)}/mo`}
                                        </h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for DIY Creators with minimal coding experience</h1>
                                        }

                                        <a href="https://buy.stripe.com/6oEg0g8jW8W91Ms5ko" target='_blank' rel="noreferrer" >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(createrListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="relative overflow-hidden col-span-1 bg-blue-100 pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center'>EZ Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl text-[#333a5f]'
                                        >
                                            {inr ? `$${299}/mo` : `₹${(299 * 75).toString().slice(0, 2)},${(299 * 75).toString().slice(2)}/mo`}
                                        </h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for Non Technical Creators with custom services</h1>
                                        }

                                        <Link to='/demo' target='_blank' >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Get started
                                            </div>
                                        </Link>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(ezCreatorList)
                                            }
                                        </ul>
                                        <div>
                                            <h1 className='absolute top-10 -right-9 transform rotate-45  px-6 text-xl bg-blue-600 text-white inline-block'>Most Popular</h1>
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center' >Collaborator</h5>

                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl text-[#333a5f]'>
                                            {inr ? `$${24}/mo` : `₹${(24 * 75).toString().slice(0, 1)},${(24 * 75).toString().slice(1)}/mo`}
                                            (billed annually)
                                        </h1>

                                        {
                                            !show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>

                                                {inr ? `save $${60}/mo` : `save ₹${(60 * 75).toString().slice(0, 1)},${(60 * 75).toString().slice(1)}/mo`}
                                            </h1>
                                        }

                                        <a href="https://buy.stripe.com/3cs4hy8jWfkx0Io7sx" target='_blank' rel="noreferrer"
                                        >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(collaboratorListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center'>Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl text-[#333a5f]'>

                                            {inr ? `$${124}/mo` : `₹${(124 * 75).toString().slice(0, 1)},${(124 * 75).toString().slice(1)}/mo`}

                                            (billed annually)</h1>
                                        {!show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>

                                            {inr ? `save $${300}/mo` : `save ₹${(300 * 75).toString().slice(0, 1)},${(300 * 75).toString().slice(1)}/mo`}
                                        </h1>}

                                        <a href="https://buy.stripe.com/8wM15m9o02xL2QwdQW" target='_blank' rel="noreferrer"
                                        >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(createrListItems)
                                            }
                                        </ul>

                                    </div>

                                    <div className="relative overflow-hidden col-span-1 bg-blue-100 pt-7 pb-2 px-2">
                                        <h5 className='text-[#186FC5] text-3xl font-bold text-center'>EZ Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl text-[#333a5f]'>
                                            {inr ? `$${249}/mo` : `₹${(249 * 75).toString().slice(0, 2)},${(249 * 75).toString().slice(2)}/mo`}
                                            (billed annually)
                                        </h1>
                                        {!show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>
                                            {inr ? `save $${600}/mo` : `save ₹${(600 * 75).toString().slice(0, 2)},${(600 * 75).toString().slice(2)}/mo`}
                                        </h1>}

                                        <Link to='/demo' target='_blank' >
                                            <div className={`text-white text-[1.2rem] cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Get started
                                            </div>
                                        </Link>
                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(ezCreatorList)
                                            }
                                        </ul>
                                        <div>
                                            <h1 className='absolute top-10 -right-9 transform rotate-45  px-6 text-xl bg-blue-600 text-white inline-block'>Most Popular</h1>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }
                    </Fragment>
                </div>
            </div>

            <div className='mx-2 lg:mx-0 my-10 lg:my-16'>
                <img src="/images/pricing/pricing-review-1.png" className='lg:w-3/5  h-auto object-contain mx-auto' alt="" />
            </div>
        </>
    )
}

export default PricingPlan
