import React from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'
import Template5Baker from './Template5Baker'
import Template5Chefs from './Template5Chefs'
import Template5Header from './Template5Header'
import Template5Search from './Template5Search'
import Template5Testimonial from './Template5Testimonial'
import Template5Video from './Template5Video'
import Loader from '../../Loader';
import useLoader from '../../useLoader'
import Template5Reviews from './Template5Reviews'
function Template5() {
    const loading = useLoader()
    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Navbar />
                        <Template5Header />
                        <Template5Search />
                        <Template5Testimonial />
                        <Template5Baker />
                        <Template5Chefs />
                        <Template5Video />
                        <Template5Reviews />
                        <Footer bg />
                    </>
                )
            }
        </div>
    )
}

export default Template5
