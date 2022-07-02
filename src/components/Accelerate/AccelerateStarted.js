import React from 'react'

function AccelerateStarted() {
    return (
        <div className='container max-w-6xl  mx-auto my-20 px-5 lg:px-0'>
            <div className='grid lg:grid-cols-2 items-center'>
                <div className='col-span-1'>
                    <img src="/images/Accelerate/started.png" alt="img" />
                </div>

                <div className='col-span-1 mt-5 lg:mt-0'>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Take the next step toward your personal & professional goals with VC Learning </h1>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum labore veniam sint nisi sed laborum cumque doloribus, earum, delectus aspernatur eos dolores? Magni, temporibus fugiat? Impedit distinctio quo dolorem blanditiis molestias a officiis maxime, omnis odio perspiciatis non ut corrupti, eum molestiae, quia deleniti laborum repellat possimus. Inventore, at mollitia.
                    </p>

                    <div className='flex justify-start gap-x-10 mt-10' >
                        <div>
                            <img
                                src="/images/Accelerate/webinar.png"
                                className='w-12  h-auto'
                                alt="video" />
                            <h1 className='font-bold  mt-2'>Live classes</h1>
                        </div>
                        <div>
                            <img
                                src="/images/Accelerate/webinar.png"
                                className='w-12  h-auto'
                                alt="video" />
                            <h1 className='font-bold  mt-2'>Live classes</h1>
                        </div>
                        <div>
                            <img
                                src="/images/Accelerate/webinar.png"
                                className='w-12  h-auto'
                                alt="video" />
                            <h1 className='font-bold  mt-2'>Live classes</h1>
                        </div>
                    </div>
                    <div className=' mt-10'>
                        <button
                            className='rounded-md text-white px-5 py-2 bg-[#ff960c] text-xl'
                        >Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccelerateStarted
