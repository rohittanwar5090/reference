import React from 'react'
import LandingPageRow from './LandingPageRow'
import LandingPageBenefits from './LandingPageBenefits'

function LandingPageFeatures() {
    return (
        <div>
            <div className='mt-20'>
                <LandingPageRow
                    src='/images/features/feature-course-builder-w.webp'
                    heading='Advanced Course Builder'
                    text='With our easy to use course builder, create unlimited modules and sub-modules with complete flexibility of owning your content or hosting it on our secure servers.'
                />

                <LandingPageRow
                    first
                    src='/images/features/feature-live-classes-w.webp'
                    heading='Engage with Live Classes'
                    text='You can host live classes, one-on-one events, webinars & more with our built-in Zoom Integration. (More integrations coming soon.)'
                />
            </div>

            <LandingPageBenefits />

            <div>
                <LandingPageRow
                    src='/images/features/feature-digitised-Suggestion-Portal-w.webp'
                    heading='Idea and Suggestion Portal'
                    text='Our unique Idea Portal helps your community to provide and vote on ideas & suggestions that you can implement to make your course the best it can be!'
                />
                <LandingPageRow
                    first={true}
                    src='/images/features/feature-event-management-w.webp'
                    heading='Event Management'
                    text='Our event management portal lets you schedule personal, group & Institute level events so that no one ever misses them. Leave those pesky calendar invites in the past.'
                />
                <LandingPageRow
                    src='/images/landing-page/assignment-tests.png'
                    heading='Assignments and Tests'
                    text='You can keep students engaged by giving them assignments, homework, quizzes and timed tests, with an option to provide feedback and remarks as well.'
                    optional='Sweet right ?'
                />
                <LandingPageRow
                    first={true}
                    src='/images/landing-page/stars-stickers.png'
                    heading='Stars and Stickers'
                    text='Remember our childhood when we got stars and stickers for good work in school? When learning is made fun, retention is much higher.'
                    textSec=' Welcome to the digital age of stars and stickers, the gamification engine. It comes with loads of pre-loaded badges that can be awarded by you to your community. You can also create custom badges as per your requirements. '
                />

                <LandingPageRow
                    src='/images/features/feature-white-label-w.webp'
                    heading='Did someone say white-label ?'
                    text='Your online institute can now have your own custom branding to make you stand out in the crowd.'
                />

                <LandingPageRow
                    first={true}
                    src='/images/features/feature-lead-generation-w.webp'
                    heading='Lead Generation and Marketing'
                    text='What’s the point of creating a course if you cannot market & sell them, right?  
                '
                    textSec='That’s why we have created our very own lead generation and email system creating the perfect all-in-one solution for lead management'

                    textTer='You can now sync and manage all your leads with our custom API under one platform. The API also gives insights on the time and web page on which leads were submitted.'

                    textQuat='With our Marketing Analytics Dashboard, you can now collect & analyze data regarding leads & new subscribers.'
                />
                <LandingPageRow
                    src='/images/landing-page/email-new.png'
                    heading='Emails and Newsletters'
                    text='Send curated emails, newsletters, updates and much more using our templates with our built-in email editor. Don’t worry about domain connectors or figuring out which email marketing tool is the best for you. EZ Colab is here to help you with email marketing!'
                />

                <LandingPageRow
                    first
                    src='/images/features/feature-phone-w.webp'
                    heading='Content Scheduler'
                    text='Publishing content regularly on your social media for social proof and engagement is key for every course creator.That’s why we created a simplified scheduling tool that helps you post on Facebook, Instagram etc. at specified times effortlessly.'
                />
                <LandingPageRow
                    src='/images/landing-page/signup-new.png'
                    heading='Instant Sign up Page'
                    text='
                Converting leads into students could not be easier! Build a custom sign - up page quickly for your institute, embed the link in your website, landing pages, emails etc.and watch your student numbers rocket sky - high.'
                />

                <LandingPageRow
                    first
                    src='/images/landing-page/landing-dashboard.png'
                    heading='Analytics Dashboard'
                    text='Measure and get actionable insights about your institute’s performance using our analytics dashboard. Keep track of every metric- from student performance, to marketing analytics with our Analytics software. '
                    textSec='Make informed, data-driven decisions with our custom insights for growing your online institute.'
                    textTer='We have a few nitty gritty details as a secret in our app. Start exploring now!'
                />

                <LandingPageRow
                    src='/images/landing-page/Sales.jpg'
                    heading='Sales'
                    text='With EZ Colab, managing your sales will be as easy as baking a pie. Don’t believe us?'
                    textSec='Connect your stripe account with our app and track your sales without ever leaving the platform.'
                />

                <LandingPageRow
                    first
                    orangeText
                    src='/images/features/feature-white-label-w.webp'
                    text='EZ Colab helps provide a “business in a box” solution for your online academy.
            '
                    textSec='Choosing the right LMS for your course is very important because YOLO (You only launch once). Our pun game is strong.
            '
                    textTer='Secure your LifeTime Deal for EZ Colab today!'
                    optional='Happy creation with EZ Colab! 🥳 '
                />

            </div>
        </div>
    )
}

export default LandingPageFeatures
