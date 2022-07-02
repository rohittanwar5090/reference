import React from 'react'
import useLoader from '../components/useLoader';
import Loader from '../components/Loader';
import Footer from '../components/Footer/Footer';

function WorkSubmission() {
    const loading = useLoader()
    return (
        <>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <iframe
                            title='work-submission'
                            src="https://my.nativeforms.com/AWWJ3aj1jZmcjealzZL1Db"
                            width="100%"
                            height="600"
                            frameborder="0"
                        >
                        </iframe>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default WorkSubmission
