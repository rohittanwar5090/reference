import React from 'react'

function CertificateAdvanced() {
    return (
        <>
            <div className='bg-[#171e2c]'>
                <div className='container max-w-6xl mx-auto'>
                    <div className='px-5 lg:px-0 grid lg:grid-cols-2 py-20'>
                        <div className='text-white'>
                            <h1 className=' text-[#186fc5] text-3xl lg:text-4xl font-bold '>
                                Advanced Learning from VC Learning
                            </h1>
                            <p className='my-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum, quo nobis eos aperiam ex sed molestias autem consequatur recusandae numquam enim nostrum fugit fuga dolorum repudiandae accusamus nisi reprehenderit quam nemo. Inventore, repellendus voluptatum fuga commodi aperiam incidunt sequi saepe itaque, iusto labore similique eum expedita ipsa enim. Quos.
                            </p>
                            <ul className='space-y-4'>
                                <li>- Advanced Certification from VC Learning</li>
                                <li>- Join VC Learning alumni network</li>
                                <li>- Easily shareable across Linkedin, Naukri, etc</li>
                                <li>- Learning of Advanced topic</li>

                            </ul>
                        </div>
                        <div className='col-span-1 mt-5 lg:mt-0 grid place-items-center'>
                            <img
                                className='h-auto'
                                src="/images/certificate/certificate-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' bg-[#f68a03]'>
                <div className='container max-w-6xl mx-auto'>
                    <div className='text-center lg:text-left px-5 lg:px-0 lg:flex items-center justify-around text-white
                 py-10'>
                        <div className='lg:w-3/4 '>
                            <h1 className='text-3xl font-extrabold'>Syllabus</h1>
                            <p className='text-xl mt-2'>Best-in-class content by leading faculty and industry leaders in the form of videos, cases and projects.</p>
                        </div>
                        <div className='mt-5 lg:mt-0'>
                            <button
                                className='bg-[#11131d] p-3 rounded-md'
                            >
                                Download Syllabus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CertificateAdvanced
