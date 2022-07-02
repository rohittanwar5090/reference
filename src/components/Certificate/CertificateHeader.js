import React from 'react'

function CertificateHeader() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/certificate/certificate-header.jpg')",
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}
            className='px-2 lg:px-0 mt-24 grid place-items-center'
        >
            <div className='text-center capitalize lg:w-3/5'>
                <h1 className='text-3xl lg:text-4xl font-extrabold text-[#f68a03] '
                >
                    Advanced certificate in digital marketing & communication
                </h1>
                <h6 className='text-white text-lg lg:text-xl my-10 font-bold'>
                    Master Digital Marketing: strategy, social media marketing, SEO, Youtube, Email, Facebook, Marketing, Analytics & more.
                </h6>
            </div>
        </div>
    )
}

export default CertificateHeader
