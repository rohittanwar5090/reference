import React from 'react'

function CertificateInstructor() {
    return (
        <div className='container px-3 lg:px-0 max-w-5xl mx-auto my-10'>
            <h1
                className='font-bold text-center text-3xl lg:text-4xl text-[#2680eb]'
            >About the Instructor
            </h1>

            <div
                className='rounded-md mt-28 bg-[#233d63]'
            >
                <div className='grid place-items-center'>
                    <img
                        className='-mt-16'
                        src="/images/certificate/certificate-instructor.png"
                        alt=""
                    />
                </div>

                <div className='py-10 grid place-items-center items-start space-y-8 text-center lg:text-left lg:space-y-0 text-white lg:grid-cols-3 '>
                    <div className='col-span-1'>
                        <div>
                            <p>Joined 4 years ago</p>

                            <ul className='mt-2 lg:mt-5 '>
                                <li>
                                    <i className="mr-3 text-[#f68a03] fas fa-star"
                                    ></i>
                                    <span>
                                        4.6 instructor rating
                                    </span>
                                </li>

                                <li>
                                    <i className="text-[#f68a03] mr-3 fas fa-play"></i>
                                    <span>24 courses</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <p
                            className='text-[#f68a03]  text-xl font-bold'
                        >Ajay Kumar</p>

                        <ul className='mt-2 lg:mt-5 '>
                            <p>
                                <i className="text-[#f68a03]  mr-3 fas fa-users"></i>
                                <span>45,768 students</span>
                            </p>
                        </ul>

                    </div>

                    <div className='col-span-1'>
                        <p
                        >Digital marketer and writer</p>
                        <ul className='mt-2 lg:mt-5 '>
                            <p>
                                <i className="text-[#f68a03] mr-3 fas fa-comment-alt"></i>
                                <span>
                                    2,533 reviews</span>
                            </p>
                            <p>
                                <i className="text-[#f68a03]  mr-3 fas fa-bars"></i>
                                <span>view all courses</span>
                            </p>
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CertificateInstructor
