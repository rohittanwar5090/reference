import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Copyright from './Copyright'

function Footer() {
    return (
        <>
            <div className={`${styles.footer} px-8 lg:px-16 py-10 grid lg:grid-cols-4`}>
                <div className='lg:col-span-1'>
                    <span className="fa-stack">
                        <a href="https://www.facebook.com/ezcolab/">
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>

                    <span className="fa-stack">
                        <a href="#your-link">
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>

                    <ul className='lg:ml-5'>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-phone"></i>
                            <div>
                                <a className="ml-4 " href="#yourlink"> +91 9035287336</a>
                            </div>
                        </li>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-envelope-open"></i>
                            <div >
                                <a className="ml-4 " href="#yourlink">vineeth@vclearning.co</a>
                            </div>
                        </li>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-address-book"></i>
                            <div >
                                <a className="ml-4 " href="#yourlink"> 4th Block Jayanagar, Bengaluru </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-1 mt-3 lg:mt-0'>
                    <div >
                        <h4>About EZ Colab</h4>
                        <p>
                            EZ Colab helps course creators and coaches to launch and scale their course.
                        </p>
                    </div>
                </div>

                <div className='ml-0 lg:col-span-1 lg:ml-20 mt-3 lg:mt-0'>
                    <div >
                        <h4>Important Links</h4>
                        <ul >

                            <li >
                                <div>
                                    <Link to='/terms-conditions'
                                    >Terms & Conditions</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/privacy-policy"
                                    >Privacy Policy</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <Link to='/refund-policy'
                                    >Refund / Adjustment Policy</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/eula"
                                    >EULA</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/groups/267888208407084"
                                    >Join our facebook community</a>
                                </div>
                            </li>

                            <li >
                                <div>
                                    <Link to="/blogs">Blogs</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <a target='_blank' rel="noreferrer"
                                        href="https://help.ezcolab.com/">Help Center</a>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <a target='_blank' rel="noreferrer"
                                        href="https://roadmap.ezcolab.com/ez-colab-roadmap">
                                        Roadmap
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='lg:col-span-1   mt-5 lg:mt-0'>
                    <Link to='/' >
                        <img
                            src='/images/logo/EZ-Logo.png'
                            alt="Ezcolab-logo"
                            className='bg-white px-2 py-1 w-4/5 max-w-[300px] rounded-md'
                        />
                    </Link>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default Footer
