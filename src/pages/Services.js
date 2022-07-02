import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import ServicesBenefits from '../components/Services/ServicesBenefits';
import ServicesFeatureSec from '../components/Services/ServicesFeatureSec';
import ServicesFeaturesRow from '../components/Services/ServicesFeaturesRow';
import ServicesHeader from '../components/Services/ServicesHeader';
import ServicesRows from '../components/Services/ServicesRows';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import ServicesAboveFooter from '../components/Services/ServicesAboveFooter';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

function Services() {
    const loading = useLoader()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab | Custom Web Services and Onboarding
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
                    name="description"
                />
                <meta
                    content=" EZ Colab | Custom Web Services and Onboarding"
                    property="og:title"
                />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
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
                    content=" EZ Colab | Custom Web Services and Onboarding"
                    property="twitter:title"
                />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
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
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                            <ServicesHeader />
                        </div>
                        <div className="container mx-auto">
                            <ServicesFeaturesRow />
                            <ServicesRows />
                            <ServicesBenefits />
                            <ServicesFeatureSec />
                        </div>
                        <ServicesAboveFooter />
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default Services
