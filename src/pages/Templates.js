import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import TemplatesCard from '../components/Templates/TemplatesCard';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet';
function Services() {
    const loading = useLoader()
    return (
        <>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>
                                EZ Colab | Templates
                            </title>

                        </Helmet>
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                        </div>
                        <div className="container mx-auto">
                            <div className='px-3 lg:px-0 grid place-items-center'>
                                <h1 className='text-2xl lg:text-3xl font-bold pt-28  text-center text-[#186fc5] '>Stop Wasting Time and Money Making a Course Funnel Yourself! </h1>
                                <p className='text-center my-8 text-lg text-[#2a3158]'>
                                    Creating a beautiful and converting course funnel can be daunting even for seasoned course creators. That's why we give you a dedicated team to design an enticing funnel that will help you convert traffic into subscribers. You can then focus all your time on content creation.
                                </p>
                                <Link to='/demo' target='_blank' >
                                    <div className='text-white text-center rounded-md px-2 lg:px-4 py-2 bg-[#df7324]'>
                                        Get your personalized course funnel today!
                                    </div>
                                </Link>
                            </div>
                            <div className='px-5 pb-10 lg:px-0 pt-20 grid lg:grid-cols-2  gap-10 '>

                                <div className='col-span-1'>
                                    <Link to='/work/template1' target='_blank'>
                                        <TemplatesCard src='/images/template1/template1.PNG' />
                                    </Link>
                                </div>

                                <div className='col-span-1'>
                                    <Link to='/work/template2' target='_blank'>
                                        <TemplatesCard src='/images/template2/template2.PNG' />
                                    </Link>
                                </div>

                                <div className='col-span-1'>
                                    <Link to='/work/template3' target='_blank'>
                                        <TemplatesCard src='/images/template3/template3.PNG' />
                                    </Link>
                                </div>

                                <div className='col-span-1'>
                                    <Link to='/work/template4' target='_blank'>
                                        <TemplatesCard src='/images/template4/template4.PNG' />
                                    </Link>
                                </div>
                                <div className='col-span-1'>
                                    <Link to='/work/template5' target='_blank'>
                                        <TemplatesCard src='/images/template5/template5.PNG' />
                                    </Link>
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

export default Services
