import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Template4GrePrep from './Template4GrePrep'
import Template4Header from './Template4Header'
import Template4Secrets from './Template4Secrets'
import Template4Techniques from './Template4Techniques'
import Template4Testimonial from './Template4Testimonial'
import Loader from '../../Loader';
import useLoader from '../../useLoader'
function Template4() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>

                        <Navbar />
                        <Template4Header />
                        <div className="container max-w-7xl mx-auto ">
                            <Template4GrePrep />
                            <Template4Techniques />
                        </div>
                        <Template4Secrets />
                        <div className="container max-w-7xl mx-auto ">
                            <Template4Testimonial />
                        </div>
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Template4
