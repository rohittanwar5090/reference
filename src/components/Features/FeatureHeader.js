import React from 'react'
function Header() {
    return (
        <div className='p-5 lg:px-8'>
            <div className="grid items-center lg:grid-cols-2 mt-20 lg:mt-32 lg:px-5 ">
                <div className="lg:col-span-1 ">
                    <p className='text-[#186FC5]  font-bold text-3xl lg:text-4xl mt-2'>
                        Your online course should be perfect, and we have the right tools for you.
                    </p>

                    <div
                        className="mt-5 trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6192a046fd9c5e5d047aebb5" data-style-height="24px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-no-reviews="hide" data-scroll-to-list="true" data-allow-robots="true" data-min-review-count="10">
                        <a href="https://www.trustpilot.com/review/ezcolab.com" target="_blank" rel="noopener">Trustpilot</a>
                    </div>
                </div>
                <div className='lg:col-span-1 mt-8 lg:mt-0 flex justify-center items-center '>
                    <img src='/images/features/features-header-w.webp' className='w-full lg:w-4/5 h-auto object-contain' alt="features-header" />
                </div>
            </div>
            <div className='text-[#186FC5] font-bold text-center px-4 lg:px-10 py-5'>
                <p>Scroll down for a comprehensive list of our feature offering</p>
            </div>
        </div>
    )
}

export default Header
