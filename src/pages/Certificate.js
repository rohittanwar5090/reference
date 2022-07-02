import React from 'react'
import CertificateAdvanced from '../components/Certificate/CertificateAdvanced'
import CertificateCiriculum from '../components/Certificate/CertificateCiriculum'
import CertificateCourse from '../components/Certificate/CertificateCourse'
import CertificateHeader from '../components/Certificate/CertificateHeader'
import CertificateInstructor from '../components/Certificate/CertificateInstructor'
import CertificatePreview from '../components/Certificate/CertificatePreview'
import CertificateReq from '../components/Certificate/CertificateReq'
import CertificateTestimonial from '../components/Certificate/CertificateTestimonial'
import Navbar from '../components/Certificate/Navbar'
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
function Certificate() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <Navbar />
                        <CertificateHeader />
                        <CertificatePreview />
                        <CertificateReq />
                        <CertificateAdvanced />
                        <CertificateCourse />
                        <CertificateCiriculum />
                        <CertificateInstructor />
                        <CertificateTestimonial />
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Certificate
