import React from 'react'

function AboutUsTeam() {
    const TeamImages = [
        '/images/about-us/aboutus-team-1.png',
        '/images/about-us/aboutus-team-2.png',
        '/images/about-us/aboutus-team-3.png',
        '/images/about-us/aboutus-team-4.png',
        '/images/about-us/aboutus-team-5.png'
    ]
    return (
        <div className='mb-10'>
            <div className='text-center' >
                <h3 className='text font-semibold lg:text-xl text-[#186FC5] '>Our Team</h3>
                <h1 className=' text-[#2a3158] text-3xl lg:text-4xl font-semibold'>lets meet our team</h1>
            </div>
            <div className='place-items-center grid lg:flex mt-20 justify-around text-center'>
                {
                    TeamImages.map((img, idx) => {
                        return (
                            <div key={idx} className='mb-4 lg:mb-0'>
                                <img src={img} className='object-contain' alt="aboutus-teams" />
                                <h2 className='text-[#2a3158]text-2sxl lg:text-3xl font-semibold'>{`Team ${idx + 1}`} </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutUsTeam
