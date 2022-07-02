import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import FeatureHeader from '../components/Features/FeatureHeader';
import FeaturesRows from '../components/Features/FeaturesRows';
import FeatureBanner from '../components/Features/FeatureBanner';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from "react-helmet";
import Footer from '../components/Footer/Footer';

function Features() {

    const loading = useLoader()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab: Features to help you scale your online course quickly
                </title>

                <meta name="robots" content="index, follow" />

                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
                    name="description"
                />
                <meta
                    content=" EZ Colab: Features to help you scale your online course quickly"
                    property="og:title"
                />
                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
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
                    content=" EZ Colab: Features to help you scale your online course quickly"
                    property="twitter:title"
                />
                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
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
                            <FeatureHeader />
                        </div>
                        <div className=" mx-auto px-2 lg:px-0">
                            <FeaturesRows />
                        </div>
                        <FeatureBanner />
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Features
