import React from 'react'

function CertificateTestimonial() {
    return (
        <div className="w-full lg:w-4/5 mx-auto p-5 lg:p-11 mt-5">
            <div className="text-2xl text-center font-medium text-[#2a3158]">
                <h1
                    className='font-bold text-3xl lg:text-4xl text-[#2680eb]'
                >
                    Testimonial
                </h1>
            </div>
            <div className="flex justify-between items-end mt-16">
                <div className='bg-[#f68a03] px-[0.8rem] py-2 text-white text-base cursor-pointer rounded-full'>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src='/images/home/home-woman-w.webp' alt="testimonials" />
                    <h1 className='my-5 text-3xl font-bold text-[#374b5c]'>Jane Doe</h1>
                    <div className="flex justify-between text-2xl ">
                        {
                            [1, 2, 3, 4, 5].map((item, idx) => (
                                <i key={idx} className="far fa-star text-[#f68a03]"></i>
                            ))
                        }
                    </div>
                </div>
                <div className='bg-[#f68a03] px-[0.8rem] py-2 text-white text-base cursor-pointer rounded-full'>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
            <div className="w-full lg:w-4/5 mx-auto mt-5">
                <p className='text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis iste accusamus doloremque similique autem perspiciatis aut pariatur odit impedit animi, necessitatibus nihil. Minus voluptatum libero odit reiciendis assumenda, molestiae rerum.
                </p>
            </div>
        </div>
    )
}

export default CertificateTestimonial
