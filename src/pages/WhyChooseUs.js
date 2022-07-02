import React from 'react'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import NavbarHeader from '../components/NavbarHeader';
import ChooseUsHeader from '../components/WhyChooseUs/ChooseUsHeader';
import ChooseUsRows from '../components/WhyChooseUs/ChooseUsRows';
import Footer from '../components/Footer/Footer';
function WhyChooseUs() {
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
                                backgroundImage: "url('/images/pricing-bg.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                            className='lg:pt-32'
                        >
                            <NavbarHeader />
                            <ChooseUsHeader />
                        </div>

                        <div className="max-w-5xl mx-auto"
                        >
                            <div style={{
                                position: 'relative'
                            }}>
                                <ChooseUsRows />
                                <div
                                    className='hidden lg:inline'
                                    style={{
                                        backgroundImage: 'url("/images/why-choose-us/why-choose-us-left.png")',
                                        backgroundRepeat: 'no-repeat',
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        top: '480px',
                                        left: '-460px',
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default WhyChooseUs
