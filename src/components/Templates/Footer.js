import React from 'react'

function Footer({ bg }) {
    return (
        <div className={`${bg && 'bg-black text-white'} py-10 ${!bg && 'bg-[#212E4E] text-white'}`}>
            <div className='text-white px-5 lg:px-16  lg:flex lg:items-center justify-between space-y-5 lg:space-y-0'>
                <div className='text-5xl '>
                    <h1>LOGO</h1>
                </div>

                <div className='w-3/5'>
                    <div className=' space-y-3 lg:space-y-0 lg:px-10 lg:py-10'>
                        <ul className='lg:flex justify-around'>
                            <li>About</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Write for Us</li>
                            <li>Contact Us</li>
                            <li>Subscribe Now</li>
                        </ul>
                    </div>

                    <div className='lg:flex items-center justify-around  space-y-3 lg:space-y-0 py-10 '>
                        <p className='-mr-20'>Follow me around the web -</p>
                        <div className='flex gap-x-5'>
                            <a href="#yourlink" className='text-white text-4xl'>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#yourlink" className='text-white text-4xl'>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#yourlink" className='text-white text-4xl'>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#yourlink" className='text-white text-4xl'>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='px-5'>
                <hr className='w-full' />
            </div>

            <div className='space-y-3 py-5 lg:space-y-0 px-5 lg:px-28 lg:py-10'>
                <ul className='lg:flex justify-around'>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Blogs</li>
                    <li>Products</li>
                    <li>Video</li>
                </ul>
            </div>
            <p className='text-center pb-5'>&copy; copyright @ EZ Colab</p>
        </div>
    )
}

export default Footer
