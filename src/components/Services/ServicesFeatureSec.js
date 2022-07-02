import React from 'react'
function ServicesFeatureSec() {
    return (
        <div className='py-10 lg:py-0 lg:grid grid-cols-2 items-center'>
            <div className='px-2 lg:px-20'>
                <h1
                    className='text-2xl  font-semibold text-[#186FC5]'
                >Your Remote Web Design & Tech Department for a Fraction of the Cost</h1>
                <p
                    className=' mt-3 text-[#2A3158]'
                >Do you pay a lot for local agencies to do small website updates? You surely have to wait a long time for them as well. EZ Colab gives you the best UI/UX designer, developer and project manager for free. </p>
            </div>
            <div>
                <img src='/images/services/services-department-w.webp' className=' h-auto object-contain' alt="services-features" />
            </div>
        </div>
    )
}

export default ServicesFeatureSec
