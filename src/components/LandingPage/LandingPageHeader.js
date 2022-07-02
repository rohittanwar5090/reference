import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function LandingPageHeader() {
    return (
        <header className='p-5 lg:px-8'>
            <img
                src='/images/logo/EZ-Logo.png'
                alt="Ezcolab-logo"
                className=' px-2 py-1 rounded-md w-[80%] max-w-[280px]'
            />
            <div className=" items-center justify-between grid lg:grid-cols-2 mt-10 lg:mt-0 ">

                <div className="lg:w-4/5 lg:col-span-1 ">
                    <h1 className='font-bold text-4xl text-[#2A3158]'>Did you know</h1>
                    <p className=' font-bold text-xl text-[#186FC5]'
                    >that only 4% of members complete an online course successfully?</p>
                    <h1 className=' mt-4 text-4xl font-bold text-[#df7324]'
                    >Why ?</h1>
                    <p className='text-[#2A3158]'> Because of lack of collaboration and communication with the course creator. That’s why we set out on a mission to solve this major problem by creating the <span className='text-[#df7324]' > first ever community-centric LMS.</span> </p>
                </div>
                <div className=' lg:col-span-1'>
                    <img src='/images/landing-page/landing-page-header-img.png' alt="landing-page-header" className='h-auto object-contain w-full'
                    />
                </div>
            </div>
            <div className='text-center mt-10'>
                <p className=' font-bold text-2xl lg:w-3/4 mx-auto text-[#5b617f]'
                >
                    Presenting to you the most advanced collaboration and communication course building tool for your online academy.
                </p>
            </div>

            <div className='mt-10'>
                <div className='text-center'>
                    <h1 className='font-bold text-2xl text-[#186FC5] '
                    >Meet EZ Colab! 👋🏻</h1>

                    <AnchorLink href="#pricing"
                        className='inline-block mt-5  bg-[#df7324]  text-white rounded-md px-4 py-2' >
                        Buy Now
                    </AnchorLink>

                    <div className=' lg:w-1/2 mt-10 mx-auto'>
                        <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
                            <figure style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%', marginBlockEnd: 0, marginBlockStart: 0, marginInlineStart: 0, marginInlineEnd: 0 }}>
                                <iframe title='home-video' src="https://api.vadoo.tv/iframe_test?id=BhxSTDFz16BCXnNA4BxCRvYhcykoeCMQ" scrolling="no"
                                    style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', overflow: 'hidden', borderRadius: '5px' }} allowFullScreen={1} allow="autoplay">
                                </iframe>
                            </figure>
                        </div>
                    </div>

                    <div className='text-center mt-5'>
                        <p className='w-3/4 mx-auto font-bold text-xl text-[#5b617f]'
                        >
                            EZ Colab helps course creators and coaches to create and market their online course by building a community.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LandingPageHeader
