import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import FeatureHeader from '../components/Features/FeatureHeader';
import FeaturesRows from '../components/Features/FeaturesRows';
import FeatureBanner from '../components/Features/FeatureBanner';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from "react-helmet";
import Footer from '../components/Footer/Footer';

function OutSources() {

    const loading = useLoader()

    return (
        <>
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

export default OutSources