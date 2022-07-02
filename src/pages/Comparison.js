import React from 'react'
import useLoader from '../components/useLoader'
import Loader from '../components/Loader';
import ComparisonHeader from '../components/Comparisons/ComparisonHeader';
import ComparisonFeature from '../components/Comparisons/ComparisonFeature';
import NavbarHeader from '../components/NavbarHeader';
import ComparisonVisibility from '../components/Comparisons/ComparisonVisibility';
import Footer from '../components/Footer/Footer';

function Comparison() {
    const loading = useLoader()

    return (
        <div>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div style={{
                            background: "url('/images/pricing-bg.png')", backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}>
                            <NavbarHeader />
                            <ComparisonHeader />
                        </div>
                        <main className="max-w-5xl mx-auto">
                            <ComparisonFeature />
                            <ComparisonVisibility />
                        </main>
                        <Footer />

                    </>
                )
            }
        </div>
    )
}

export default Comparison
