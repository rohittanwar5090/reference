import React from 'react'
import ChooseUsRow from './ChooseUsRow'
function ChooseUsRows() {
    return (
        <div className='mb-40'>
            <ChooseUsRow
                text1='We provide a wide range of marketing tools that you can use for just about anything including designing, sending emails, creating campaigns and social media scheduling.'
                text2='A bunch of additional monthly paid subscriptions to take care of your marketing needs.'
                src='/images/why-choose-us/Design-team-rafiki-w.webp'
            />

            <ChooseUsRow
                first={true}
                src='/images/why-choose-us/setup-bro-w.webp'
                text1='We are the ONLY team that provides custom web services to create and manage beautiful and converting websites, landing pages and more..'
                text2='A DIY tool where you yourself have to be the designer, coder and manager for your knowledge business.'
            />

            <ChooseUsRow
                src='/images/why-choose-us/Telecommuting-rafiki-w.webp'
                text1='Complete one-on-one personal onboarding to help you launch your online course ASAP.'
                text2='Lengthy and boring videos/ articles that take you forever  just to get started.'
            />

            <ChooseUsRow
                first={true}
                src='/images/why-choose-us/Course-app-rafiki-w.webp'
                text1='The first ever community centric course creation platform with gamification that makes the learning and teaching experience super engaging and fun. '
                text2='An ordinary creation platform with minimal community engagement (BORING for your students!)'
            />

        </div>
    )
}

export default ChooseUsRows
