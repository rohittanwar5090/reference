import React from 'react'
// import './Convinced.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        fontFamily: "Helvetica"
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function LandingPageFaqs() {
    const classes = useStyles();

    return (
        <section className=' p-10'>
            <div className='text-center'>
                <h1 className='text-[#0762bb] font-bold text-3xl'>Go to Home Page</h1>
                <div className="w-48 mx-auto mt-10  cursor-pointer">
                    <Link to='/'
                        target='_blank' rel="noreferrer"
                        className="text-xl w-11/12 bg-[#0762bb] text-white p-2 rounded-md"> Go to Home Page</Link>
                </div>
            </div>

            <>
                <h1 className='text-center px-2 lg:px-0 text-[#186FC5] mb-10 text-4xl  font-bold mt-4'>Frequently asked questions</h1>

                <div className={`${classes.root} lg:w-1/2 px-2 mb-10 lg:space-x-4 `}
                >
                    <div className='space-y-4'>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    className={`${classes.heading} !text-[#424348]`}>
                                    Is there a money back guarantee on my purchase?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className='text-[#424348]'
                                >
                                    Yes, we offer a 14 day money back guarantee on lifetime deals. Drop in an email to hello@vclearning.co & we will be happy to help you.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography
                                    className={`${classes.heading} !text-[#424348]`}> How are payments processed?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className='text-[#424348]'
                                >
                                    All payments are processed on Stripe using an SSL certificate and your payments are secured. Your card details are not stored on our server or on our platform
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={`${classes.heading} !text-[#424348]`}>
                                    What is the difference between a LTD plan & monthly/annual plan?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className='text-[#424348]'
                                >
                                    With an LTD you get all features for a lifetime at a fixed price. The features included in the LTD have been mentioned above with our pricing plans.If you are looking for a complete solution for your online course or coaching business, you can opt for the monthly/annual plan, where we provide a range of custom features & services. You can view the entire list of offerings on our main website - www.ezcolab.com/pricing
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography
                                    className={`${classes.heading} !text-[#424348]`}>
                                    Why are the payments being processed in INR?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    className='text-[#424348]'
                                >
                                    The payments are being converted from USD to INR as we are only collecting payments in our domestic currency- Indian Nation Rupee (INR). The price plan, however, remains in the USD. Don’t worry, you will only be paying the amount mentioned under the plan. For example, if you have selected a Tier 3 plan worth $299, you will be charged only $299, no more no less. Sorry for the inconvenience.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </>
        </section>
    )
}

export default LandingPageFaqs
