import React from 'react'
import AccelerateCourses from '../components/Accelerate/AccelerateCourses';
import AccelerateHeader from '../components/Accelerate/AccelerateHeader';
import AccelerateSearch from '../components/Accelerate/AccelerateSearch';
import AccelerateStarted from '../components/Accelerate/AccelerateStarted';
import AccelerateTestimonial from '../components/Accelerate/AccelerateTestimonial';
import Navbar from '../components/Certificate/Navbar';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import Footer from '../components/Footer/Footer';

function Accelerate() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Navbar />
                        <AccelerateHeader />
                        <AccelerateSearch />
                        <AccelerateCourses />
                        <AccelerateTestimonial />
                        <AccelerateStarted />
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Accelerate
