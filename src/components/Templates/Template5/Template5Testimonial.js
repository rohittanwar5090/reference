import React from 'react'

function Template5Testimonial() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/template5/template5-testimonial.png')",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
            }}
            className='px-5 lg:px-0 relative'
        >
            <div className='grid place-items-center text-center pt-32'>
                <div className='bg-white shadow-lg lg:w-1/2 pb-10  rounded-md px-5 lg:px-20  '>
                    <img src="/images/template5/template5-woman.png" className='mx-auto -mt-28 lg:-mt-16' alt="" />
                    <h1 className='text-xl lg:text-2xl font-bold text-center'>Sarah</h1>
                    <div className="flex justify-center  text-2xl py-4 lg:py-10">
                        <img src="/images/template5/template5-stars.png" alt="" />
                    </div>
                    <p className='text- lg:text-xl'>Perfect course for home bakers who want to turn professional.The courses are well designed and teach in depth.The course community helped me to get in touch with many bakers across the world</p>
                </div>
            </div>
            <div>
                <img src="/images/template5/template5-border.png" alt="" />
            </div>
        </div>
    )
}

export default Template5Testimonial
