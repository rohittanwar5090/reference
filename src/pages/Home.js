import React from 'react'
import HomeBenefits from '../components/Home/HomeBenefits';
import Header from '../components/Home/HomeHeader';
import NavbarHeader from '../components/NavbarHeader';
import HomeVideo from '../components/Home/HomeVideo';
import LearningFun from '../components/Home/LearningFun';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';
import HomeLead from '../components/Home/HomeLead';
import HomeTestimonials1 from '../components/Home/HomeTestimonials1';

function Home() {

    const loading = useLoader()

    return (
        <>
            <Helmet>

                <title>
                    Launch your online course &amp; coaching in 7 days with EZ Colab
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    name="description"
                />
                <meta
                    content="Launch your online course &amp; coaching in 7 days with EZ Colab"
                    property="og:title"
                />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    property="og:description"
                />

                {
                    /**
                      <meta
                    content=""
                    property="og:image"
                />
                     */
                }
                <meta
                    content="Launch your online course &amp; coaching in 7 days with EZ Colab"
                    property="twitter:title"
                />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    property="twitter:description"
                />
                {
                    /**
                     <meta
                    content=""
                    property="twitter:image"
                /> 
                     */
                }

                <meta property="og:type" content="website" />
            </Helmet>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <NavbarHeader />
                        <Header />
                        <HomeLead />
                        <HomeVideo />
                        <HomeBenefits />
                        <HomeTestimonials1 />
                        <HomeLead />
                        <LearningFun />
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Home
