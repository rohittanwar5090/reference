import React from 'react'
import { Helmet } from 'react-helmet'
import LandingPageFaqs from '../components/LandingPage/LandingPageFaqs'
import LandingPageFeatures from '../components/LandingPage/LandingPageFeatures'
import LandingPageHeader from '../components/LandingPage/LandingPageHeader'
import LandingPagePricing from '../components/LandingPage/LandingPagePricing'
import useLoader from '../components/useLoader'
import Loader from '../components/Loader';
import Footer from '../components/Footer/Footer'

function LandingPage() {
    const loading = useLoader()

    return (
        <>
            <Helmet>
                <title>Secure your LifeTime Deal for EZ Colab today!</title>
                <meta
                    content="The only time you ever get the best community-centric LMS on offer! Grab our limited time LTD deal today! "
                    name="description"
                />
                <meta
                    content="Secure your LifeTime Deal for EZ Colab today! "
                    property="og:title"
                />
                <meta
                    content="The only time you ever get the best community-centric LMS on offer! Grab our limited time LTD deal today! "
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
                    content="Secure your LifeTime Deal for EZ Colab today! "
                    property="twitter:title"
                />
                <meta
                    content="The only time you ever get the best community-centric LMS on offer! Grab our limited time LTD deal today! "
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
                        <div style={{
                            backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                        }}>
                            <LandingPageHeader />
                        </div>
                        <main className="container mx-auto">
                            <LandingPageFeatures />
                            <LandingPagePricing />
                            <LandingPageFaqs />
                        </main>
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default LandingPage
