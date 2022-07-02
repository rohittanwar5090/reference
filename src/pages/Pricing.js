import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import PricingForm from '../components/Pricing/PricingForm';
import PricingHeader from '../components/Pricing/PricingHeader';
import PricingPlan from '../components/Pricing/PricingPlan';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import FAQs from '../components/Pricing/PricingFAQs';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

function Pricing() {
    const loading = useLoader()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab | 30 day money back guarantee
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
                    name="description"
                />
                <meta
                    content="EZ Colab | 30 day money back guarantee"
                    property="og:title"
                />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
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
                    content="EZ Colab | 30 day money back guarantee"
                    property="twitter:title"
                />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
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
                                background: "url('/images/pricing-bg.png')", backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                        >
                            <NavbarHeader />
                            <PricingHeader />
                        </div>
                        <div className="container mx-auto">
                            <PricingPlan />
                            <PricingForm />
                            <FAQs />
                        </div>
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default Pricing
