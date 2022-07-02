import React from 'react'
import Navbar from './Navbar'
import Template3Course from './Template3Course'
import Template3Footer from './Template3Footer'
import Template3Header from './Template3Header'
import Template3Specification from './Template3Specification'
import Template3Testimonials from './Template3Testimonials'
import Loader from '../../Loader';
import useLoader from '../../useLoader'
import Template3AboutCourse from './Template3AboutCourse'
import Template3Hightlight from './Template3Hightlight'
import Template3Objective from './Template3Objective'
import Template3Benefits from './Template3Benefits'
function Template3() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Navbar />
                        <Template3Header />
                        <div
                            style={{
                                backgroundImage: 'linear-gradient(to right bottom,#1B0234,#1B0234)'
                            }}
                        >
                            <div className="container max-w-7xl mx-auto ">
                                <Template3Course />
                                <Template3AboutCourse />
                            </div>
                            <Template3Hightlight />
                            <Template3Objective />
                            <Template3Benefits />
                            <div className="container max-w-7xl mx-auto ">
                                <Template3Specification />
                                <Template3Testimonials />
                            </div>
                            <hr className='w-full my-20  bg-white' />
                            <Template3Footer />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Template3
