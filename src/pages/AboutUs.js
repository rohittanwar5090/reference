import React from 'react'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import NavbarHeader from '../components/NavbarHeader';
import AboutUsHeader from '../components/about-us/AboutUsHeader';
import AboutUsTeam from '../components/about-us/AboutUsTeam';
import AboutsUsExecutives from '../components/about-us/AboutsUsExecutives';
import AboutUsText from '../components/about-us/AboutUsText';
import AboutUsHelp from '../components/about-us/AboutUsHelp';
import Footer from '../components/Footer/Footer';

function AboutUs() {
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
                                background: "url('images/background.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        >
                            <NavbarHeader />
                            <AboutUsHeader />
                        </div>
                        <div className="container mx-auto">
                            <AboutUsHelp />
                            <AboutUsText />
                            <AboutsUsExecutives />
                            <AboutUsTeam />
                        </div>
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default AboutUs
