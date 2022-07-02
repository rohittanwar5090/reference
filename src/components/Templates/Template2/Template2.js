import React from 'react'
import Footer from '../Footer'
import Navbar from './Navbar'
import Templae2Diploma from './Templae2Diploma'
import Template1Blogs from '../Template1/Template1Blogs'
import Template2Courses from './Template2Courses'
import Template2Header from './Template2Header'
import Template2Tablet from './Template2Tablet'
import Loader from '../../Loader';
import useLoader from '../../useLoader'
function Template2() {
    const loading = useLoader()

    return (
        <div>
            <div
            >
                {
                    loading ? (
                        <Loader loading={loading} />
                    ) : (
                        <>
                            <Navbar />
                            <Template2Header />
                            <div className="container max-w-7xl mx-auto ">
                                <Template2Courses />
                                <Template2Tablet />
                            </div>
                            <Templae2Diploma />
                            <Template1Blogs />
                            <Footer />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Template2
