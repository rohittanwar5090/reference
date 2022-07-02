import React from 'react'
import TechniquesRow from './TechniquesRow'

function Template4Techniques() {
    return (
        <div className='px-5 lg:px-0'>
            <h1 className='text-4xl font-extrabold text-center py-8 lg:py-16 text-[#490a97] '
            >Techniques you will learn in our webinar</h1>
            <div className='grid gap-y-10'>
                <TechniquesRow
                    src='/images/template4/template4-rowImg1.png'
                    heading='The Right way to learn GRE vocabulary words'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit ducimus. Eligendi temporibus, reprehenderit praesentium distinctio nulla similique itaque porro.'
                />
                <TechniquesRow
                    first
                    src='/images/template4/template4-rowImg2.png'
                    heading="Getting a great verbal score even if you're not good at english"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit ducimus. Eligendi temporibus, reprehenderit praesentium distinctio nulla similique itaque porro.'
                />
                <TechniquesRow
                    src='/images/template4/template4-rowImg3.png'
                    heading="Getting a great Quant score even if you're our of touch at Math"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit ducimus. Eligendi temporibus, reprehenderit praesentium distinctio nulla similique itaque porro.'
                />
                <TechniquesRow
                    first
                    src='/images/template4/template4-rowImg4.png'
                    heading="Simplyfying the GRE AWA essay to write 75% of it in one shot"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit ducimus. Eligendi temporibus, reprehenderit praesentium distinctio nulla similique itaque porro.'
                />
            </div>
        </div>
    )
}

export default Template4Techniques
