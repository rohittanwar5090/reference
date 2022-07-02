import React from 'react'

function Template5Reviews() {
    return (
        <>
            <div className='grid place-content-center'>
                <div className='items-center lg:flex'>
                    <div className='pb-14 hidden lg:inline-flex'>
                        <img src="/images/template5/template5-review1.png" alt="" />
                    </div>
                    <div className='relative'>
                        <img src="/images/template5/template5-review.png" alt="" />
                        <div className='absolute top-16 left-14 lg:top-28 lg:left-20 w-2/5'>
                            <h6 className='text-xs lg:text-lg'>Loved the course! Helped me to become a professional baker and start earning money.</h6>
                            <div className="absolute -bottom-12 lg:-bottom-20">
                                <img src="/images/template5/template5-whitestars.png" alt="stars" />
                            </div>
                        </div>
                        <div className='absolute bottom-32 right-10 lg:right-16 lg:bottom-48'>
                            <p className='sm:text-xs lg:text-2xl font-bold'>- Crystal Angel</p>
                        </div>
                    </div>
                    <div className='pb-14 hidden lg:inline-flex'>
                        <img src="/images/template5/template5-review2.png" alt="review" />
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/template5/template5-border.png" alt="" />
            </div>
        </>
    )
}

export default Template5Reviews
