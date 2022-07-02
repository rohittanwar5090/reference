import React from 'react'
import Footer from '../Footer'
import Navbar from './Navbar'
import Template1Blogs from './Template1Blogs'
import Template1Courses from './Template1Courses'
import Template1Header from './Template1Header'
import Testimonial from './Testimonial'
import Loader from '../../Loader';
import useLoader from '../../useLoader'
import Template1Diploma from './Template1Diploma'
function Template1() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Navbar />
                        <Template1Header />
                        <div className="container max-w-7xl mx-auto ">
                            <Template1Courses />
                            <Testimonial />
                        </div>
                        <Template1Diploma />
                        <Template1Blogs />
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Template1
