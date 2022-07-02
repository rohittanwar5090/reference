import React from 'react'
import FeatureRow from './FeatureRow'
function FeaturesRow() {
    return (
        <div>
            <FeatureRow
                src='/images/features/feature-course-builder-w.webp'
                mainheading='Course Builder'
                maintext='Hassle free course creation'
                headPri='Module Creation'
                textPri='Create unlimited modules and sub-modules and organise your course.'
                headSec="Drip Content"
                textSec='Control the schedule of your course content so that students systematically access content.'
                headTer='Notes'
                textTer='Take down notes on our built-in scratch pad while viewing video content simultaneously.'
                headQuat='Assignments & Quizzes'
                textQuat='Assess students with marked assignments, timed, quizzes and easily provide feedback'
                feature1='/images/features/feature-icon-1.png'
                feature2='/images/features/feature-icon-2.png'
                feature3='/images/features/feature-icon-3.png'
                feature4='/images/features/feature-icon-4.png'
            />
            <FeatureRow
                first={true}
                src='/images/features/feature-live-classes-w.webp'
                mainheading='Live classes & webinars'
                headPri='Dedicated Portal'
                textPri='Conduct unlimited live classes & webinars for all students or a sub-set of students.'
                headSec="Integrations"
                textSec='Conduct live classes with Zoom.'
                feature1='/images/features/feature-icon-6.png'
                feature2='/images/features/feature-icon-7.png'
            />

            <FeatureRow
                src='/images/features/feature-theme-personalization-w.webp'
                mainheading='Themes and Personalisation'
                headPri='Pre-built Themes'
                textPri='Use one of our 20+ pre-built themes and make your academy look attractive'
                headSec="Custom Themes"
                textSec='Design and upload custom themes to further customize your institute'
                headTer='Personalize'
                textTer='Easily personalize the student and instructor dashboard and provide a better learning and teaching experience'
                feature1='/images/features/feature-icon-6.png'
                feature2='/images/features/feature-icon-7.png'
                feature3='/images/features/feature-icon-7.png'
            />


            <FeatureRow
                first={true}
                src='/images/features/feature-certificates-w.webp'
                mainheading='Certificates'
                headPri='Pre-built Templates'
                textPri='Choose from one of our extensive template library for your certificate and build it in minutes'
                headSec="Custom Templates"
                textSec='Create and upload your own template to make your certficate unique'
                headTer='Social Sharing & Verification'
                textTer='Your students can proudly share their certificates and you can vertify their achievement anytime'
                feature1='/images/features/feature-icon-43.png'
                feature2='/images/features/feature-icon-44.png'
                feature3='/images/features/feature-icon-45.png'
            />

            <FeatureRow
                src='/images/features/feature-campaigns-w.webp'
                mainheading='Campaigns'
                headPri='Multi-Campaigns'
                textPri='Run up to four simultaneous campaigns and get maximum engagement'
                headSec="Pin-Point Analytics"
                textSec='Know exactly who viewed and clicked each of your campaigns. Amazing right?'
                headTer='Email Workflow'
                textTer='Create email lists based on analytics instantly and boost your marketing sky-high'
                feature1='/images/features/feature-icon-46.png'
                feature2='/images/features/feature-icon-47.png'
                feature3='/images/features/feature-icon-48.png'
            />

            <FeatureRow
                first={true}
                src='/images/features/feature-student-engagement-w.webp'
                mainheading='Student Engagement'
                headPri='Student Analytics'
                textPri='Track and understand your students progress across your institute'
                headSec="Celebrate student progress"
                textSec='Automatically assign badges and send congratulatory emails as students progress through the course'
                headTer='Enhance student engagement'
                textTer='Send reminder emails automatically to low engagement students and get them back on track'
                feature1='/images/features/feature-icon-6.png'
                feature2='/images/features/feature-icon-7.png'
                feature3='/images/features/feature-icon-7.png'
            />
            <FeatureRow
                src='/images/features/feature-lead-generation-w.webp'
                mainheading='Lead generation & marketing'
                headPri='CRM API'
                textPri='Install our custom API and easily manage all your leads'
                headSec="Email marketing"
                textSec='Send updates, newsletters and much more with our in-built marketing suite'
                headTer='Email editor & template creator'
                textTer='Create beautiful custom emails with our email editor or use one of our readily available templates.'
                feature1='/images/features/feature-icon-8.png'
                feature2='/images/features/feature-icon-9.png'
                feature3='/images/features/feature-icon-10.png'

            />

            <FeatureRow
                first={true}
                src='/images/features/feature-office-w.webp'
                mainheading='Office hours'
                maintext='Organize your key documents in one place & make it accessbile at any time'
                headPri='Student booking'
                textPri='Allow Students to easily book one-on-one sessions or office hour sessions with instructors and admins'
                headSec="Integrations"
                textSec='Use calendly, tidyCal & more to automate booking and get notified'
                feature1='/images/features/feature-icon-42.png'
                feature2='/images/features/feature-icon-41.png'

            />
            <FeatureRow
                src='/images/features/feature-phone-w.webp'
                mainheading='Social media content scheduler'
                headPri='Plan'
                textPri='Plan your content for Facebook, Instagram, Twitter, and Linkedin from one simple calendar'
                headSec="Draft"
                textSec='Draft your posts in advance for all  social media platforms'
                headTer='Publish'
                textTer='Schedule and publish your content at just the right time'
                feature1='/images/features/feature-icon-40.png'
                feature2='/images/features/feature-icon-39.png'
                feature3='/images/features/feature-icon-38.png'
            />
            <FeatureRow
                first={true}
                src='/images/features/feature-white-label-w.webp'
                mainheading='White Label'
                headPri='Custom Branding'
                textPri='Style your online academy to best suit your course'
                headSec="Mobile application (coming soon)"
                textSec='Get your own white labelled mobile application for iOS and andriod'
                feature1='/images/features/feature-icon-11.png'
                feature2='/images/features/feature-icon-12.png'

            />
            <FeatureRow
                src='/images/features/feature-master-groups-w.webp'
                mainheading='Course Bundle'
                maintext='Create unlimited course bundles'
                headPri='Easy Organisation'
                textPri='Group various courses and communities in your academy under any course bundle'
                headSec="Pre-Enabled Course Bundles "
                textSec='We have some pre-enabled course bunldes to simplify all your use cases '
                feature1='/images/features/feature-icon-13.png'
                feature2='/images/features/feature-icon-14.png'

            />
            <FeatureRow
                first={true}
                src='/images/features/feature-minor-groups-w.webp'
                mainheading='Interactive Course'
                maintext='Admin and Instructors can create unlimited courses and communities.'
                headPri='Course Types'
                textPri='Create free courses for lead generation and paid courses to suit your learning model.'
                headSec="Interactive Elements"
                textSec='Each course comes with a knowledge base, social media style community forum and much more.'
                headTer='Course guidelines '
                textTer='Optional setup of rules and regulations for easy communication and collaboration. '
                feature1='/images/features/feature-icon-15.png'
                feature2='/images/features/feature-icon-16.png'
                feature3='/images/features/feature-icon-17.png'
            />
            <FeatureRow
                src='/images/features/feature-example-for-minor-groups-w.webp'
                mainheading='24/7 Connectivity with your students'
                maintext='Take your course and community on the go and create a perfect learning experience for students.'
                headPri='iOS and Android App Available'
                textPri='Admins, Instructors and students can download the app and learn anytime, anywhere.'
                feature1='/images/features/feature-icon-13.png'
            />

            <FeatureRow
                first={true}
                src='/images/features/feature-content-sharing-w.webp'
                mainheading='Content Sharing'
                maintext='Share queries and thoughts with all types of files, images, audio, links, code and even embed videos.'
                headPri='Posts '
                textPri='Ability to like and comment to manage all thoughts in the same post  '
                headSec="Notes"
                textSec='Quick sharing without any comments.'
                headTer='Polls'
                textTer='Easily create polls, with multiple options.'
                feature1='/images/features/feature-icon-18.png'
                feature2='/images/features/feature-icon-19.png'
                feature3='/images/features/feature-icon-20.png'

            />
            <FeatureRow
                src='/images/features/feature-digitised-Suggestion-Portal-w.webp'
                mainheading='Digitised Suggestion Portal'
                maintext='Administration can easily resolve all concerns and consider new suggestions with effective collaboration. '
                headPri='One click suggestion'
                textPri='Students and instructors can instantly post suggestions or concerns.'
                headSec="Topic tags"
                textSec='Admin can create various topic tags which can be used by all users while creating a suggestion'
                headTer='Vote'
                textTer='All users can upvote and downvote on any suggestion'
                feature1='/images/features/feature-icon-21.png'
                feature2='/images/features/feature-icon-22.png'
                feature3='/images/features/feature-icon-23.png'
            />
            <FeatureRow
                first={true}
                src='/images/features/feature-event-management-w.webp'
                mainheading='Event Management Portal '
                maintext='One stop place for your entire institute to manage all events and activities. Event types'
                headPri='Personal'
                textPri='All members can create Personal events'
                headSec="Course/Group level"
                textSec='All instructors can create course/group level events and activities'
                headTer='Institute level'
                textTer='Admin can create institute level events and activities'
                feature1='/images/features/feature-icon-24.png'
                feature2='/images/features/feature-icon-25.png'
                feature3='/images/features/feature-icon-26.png'
            />
            <FeatureRow
                src='/images/features/feature-feedback-portal-w.webp'
                mainheading='Feedback Portal '
                maintext='Helps admin and instructors receive constructive feedback about all courses and groups.'
                headPri='Courses  '
                textPri='Students can take guided decisions about future courses'
                headSec="Events and Activities"
                textSec='Helps administration recieve feedback on events and activities happening in the institute'
                feature1='/images/features/feature-icon-27.png'
                feature2='/images/features/feature-icon-28.png'

            />
            <FeatureRow
                first={true}
                src='/images/features/feature-gamified-w.webp'
                mainheading='Gamified learning  '
                maintext='Make learning fun with gamification.'
                headPri='Badges'
                textPri=' Pre-enabled badges to help you get started with
                gamification and award your students with custom
                badges.'
                headSec="Leaderboard"
                textSec=' Weekly &#38; monthly leaderboards to build a
                competitive spirit in your students.'
                headTer='Show off badges'
                textTer='Students can share their badges easily on portfolio
                &#38; social media.'
                feature1='/images/features/feature-icon-29.png'
                feature2='/images/features/feature-icon-30.png'
                feature3='/images/features/feature-icon-31.png'

            />
            <FeatureRow
                src='/images/features/feature-knowledge-base-w.webp'
                mainheading='Knowledge Base '
                maintext='  Organise your key documents in one place &#38; make it
                accessible at any time.'
                headPri='Topic clusters'
                textPri=' Organise all documents topic wise.'
                headSec="File tracking"
                textSec='Students can stay up to date with all topic clusters with simple tracking.'
                feature1='/images/features/feature-icon-32.png'
                feature2='/images/features/feature-icon-33.png'
            />

            <FeatureRow
                first={true}
                src='/images/features/feature-we-are-not-done-yet-w.webp'
                mainheading='We are not done yet'
                headPri='Hashtags'
                textPri='Organise and filter all shared content easily using
                our built-in hashtag system. '
                headSec="Anonymous sharing"
                textSec='Students can share anonymously to all their peers.'
                headTer='Endorse'
                textTer='Instructors and admin can endorse good content and queries shared by students'
                headQuat='Pins'
                textQuat='Students can revisit/follow their favourite posts from various groups using our built-in pinning system.'
                feature1='/images/features/feature-icon-34.png'
                feature2='/images/features/feature-icon-35.png'
                feature3='/images/features/feature-icon-36.png'
                feature4='/images/features/feature-icon-37.png'
            />
        </div>
    )
}

export default FeaturesRow
