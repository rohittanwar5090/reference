import React from 'react'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import NavbarHeader from '../components/NavbarHeader';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

function Refund() {
    const loading = useLoader()
    return (
        <div>
            <Helmet>
                <title>
                    Refund | Adjustment Policy
                </title>
            </Helmet>

            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                            <h1 className=' text-[#2a3158] text-2xl lg:text-5xl font font-semibold pt-40 text-center'>Refund / Adjustment Policy</h1>

                            <div className=' my-10 lg:my-20 bg-white p-5'>
                                <h1 className='lg:ml-20 text-gray-600'>
                                    <Link to="/">Home</Link><i className="fa fa-angle-double-right mx-2"></i><span>Refund / Adjustment Policy</span>
                                </h1>
                            </div>

                            <div className='text-gray-700  px-4 lg:px-0 max-w-5xl mx-auto space-y-4 mb-10'>
                                <p>
                                    The Users who have made payment of subscription fee (life time / one time) and intend to discontinue with our services should inform EZColab within a period of 14 (fourteen) days from the date of making payment via e-mail, to avail the benefit of getting their amount refunded / adjusted towards other products of EZColab otherwise no subscription fee shall be refunded / adjusted.
                                </p>

                                <p>
                                    In case, Users wish to get the subscription fee adjusted against other product of EZColab, the balance payment will be either refunded or the credit voucher will be issued which will be valid for a maximum period of one year from the date of issue.
                                </p>

                                <p>
                                    The refund of any amount, be it after adjusting against other product or full refund of subscription fee (applicable where Users do not get the subscription fee adjusted against other product), will be subject to deduction of charges being levied by the payment gateway partner or bank and applicable taxes thereon.
                                </p>

                                <p>
                                    No subscription fee will be refunded / adjusted in any event and in any manner whatsoever, if request is made by the Users after expiry of 14 (fourteen) days from the date of making payment.
                                </p>
                            </div>
                        </div>
                        <Footer />

                    </>
                )
            }
        </div>
    )
}

export default Refund
