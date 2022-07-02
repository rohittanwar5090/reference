import React from 'react'

function CertificateReq() {
    return (
        <div className='px-5 lg:px-0 container max-w-5xl mx-auto my-20'>
            <div className='grid text-gray-600 lg:grid-cols-2 gap-y-10 lg:gap-y-0'>
                <div className='col-span-1 lg:border-r-2 border-gray-300'>
                    <h1 className='text-[#186fc5] text-3xl lg:text-4xl font-bold '>
                        What you'll learn?
                    </h1>
                    <ul className='mt-8 space-y-3 '>
                        {
                            LearnData.map((data, idx) => (
                                <li className='flex items-center' key={idx}>
                                    <img
                                        src={`/images/certificate/${data.img}.png`} alt="icons"
                                    />
                                    <span className='ml-4'>
                                        {data.text}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-span-1 lg:ml-10'>
                    <h1 className='text-[#186fc5] text-3xl lg:text-4xl font-bold '>
                        Requirements
                    </h1>

                    <ul className='mt-8  space-y-3'>
                        {
                            RequirementsData.map((data, idx) => (
                                <li className='flex items-center' key={idx}>
                                    <i className={`fas fa-hand-point-right mr-2 text-blue-600`}></i>
                                    <span className='ml-4'>
                                        {data.text}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CertificateReq
const LearnData = [
    {
        img: 'promotion',
        text: 'Proven Tips and Tricks of the Digital Marketing Trade'
    },
    {
        img: 'unique',
        text: 'Unique way of promoting a Business from Scratch'
    }
    ,
    {
        img: 'web-traffic',
        text: 'How to generate More Traffic and Leads for Your Brand'
    },
    {
        img: 'social-marketing',
        text: 'Digital Marketing Tools and Strategies'
    },
    {
        img: 'growth',
        text: 'Growth Hacking'
    },
    {
        img: 'inbound',
        text: ' Inbound Marketing'
    },
    {
        img: 'social-media',
        text: 'Marketing Strategy'
    },
    {
        img: 'salary',
        text: 'Income Statements'
    }
]

const RequirementsData = [
    {
        text: 'Basic knowledge of digital marketing terms'
    },
    {
        text: 'Basic understanding of business'
    },
    {
        text: 'Pen and paper for making notes'
    },
    {
        text: 'Internet connection'
    },
    {
        text: 'No digital marketing experience required!'
    }
]