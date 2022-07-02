import React from 'react'
import ServicesFeature from './ServicesFeature'
function ServicesBenefits() {
    return (
        <div className='px-2 max-w-6xl mx-auto lg:px-0 lg:grid  grid-cols-3 space-y-5 lg:space-y-0 gap-5'>
            <ServicesFeature
                src='/images/services/services-onboarding-w.webp'
                benefits={true}
                heading='Done-for-you On-boarding'
                text='Sit back and relax while we set up your entire institute and get it running.'
            />
            <ServicesFeature
                benefits={true}
                src='/images/services/services-profit-w.webp'
                heading='Marketing made easy'
                text='Landing pages created for you to help you market your course and get more sales'
            />
            <ServicesFeature
                benefits={true}
                src='/images/services/services-delivery-w.webp'
                heading='Reliable & Fast delivery'
                text='Get your website up and running within 7 days.'
            />
            <ServicesFeature
                benefits={true}
                src='/images/services/services-humanity-w.webp'
                heading='Friendly Human Support'
                text="Just because we work remotely, doesn't mean we treat you like a stranger "
            />
            <ServicesFeature
                benefits={true}
                src='/images/services/services-webdesign-w.webp'
                heading='Design changes'
                text=' Get your website design & changes done in 1-2 business days, by our professional designers'
            />
            <ServicesFeature
                benefits={true}
                src='/images/services/services-websites-w.webp'
                heading='Website ownership'
                text="Your data is yours! Everything we do for you is owned by YOU!*"
            />
        </div>
    )
}

export default ServicesBenefits
