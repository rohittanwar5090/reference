import React from 'react'

function Template3Footer() {
    return (
        <div className='text-white'>
            <div className=' text-center'>
                <h1 className='text-3xl font-bold'>App-based mobile learning</h1>
                <p className='my-8'>learners can also download our app and watch classes in mobile phone</p>
            </div>
            <div className='px-5 space-y-5 lg:space-y-0 lg:flex justify-center lg:gap-x-10 grid place-items-center'>
                <img src="/images/template3/playstore-w.webp" alt="" />
                <img src="/images/template3/apple-w.webp" alt="" />
            </div>
            <div className='space-y-3 lg:space-y-0 px-5 lg:px-28 py-10'>
                <ul className='lg:flex justify-around'>
                    <li>FAQs</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Refund policy</li>
                    <li>Help</li>
                </ul>
            </div>
            <p className='text-center pb-20'>&copy; copyright @ EZ Colab</p>
        </div>
    )
}

export default Template3Footer
