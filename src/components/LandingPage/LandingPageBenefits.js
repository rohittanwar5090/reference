import React from 'react'
import LandingPageBenefit from './LandingPageBenefit'
function LandingPageBenefits() {
    return (
        <div className='grid lg:grid-cols-3 justify-between'>
            <LandingPageBenefit
                src='/images/landing-page/leader.png'
                heading='Master Groups'
                text='Group all your courses & topics under various master groups. Within each master group, you can create unlimited public & private groups.' />
            <LandingPageBenefit
                src='/images/landing-page/people.png'
                heading='Minor Groups'
                text='To enable discussions, topic wise, amongst your community.'
            />
            <LandingPageBenefit
                src='/images/landing-page/hash-tag.png'
                heading='Hash Tagging'
                text='Our built-in hash tagging system can help you find any content posted instantly and organize various files & posts.'
            />
        </div>
    )
}

export default LandingPageBenefits
