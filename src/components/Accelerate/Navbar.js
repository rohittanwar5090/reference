import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar({ bgWhite }) {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const handleTransition = () => {
        if (window.scrollY > 10) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleTransition)
        return () => {
            window.removeEventListener("scroll", handleTransition);
        }
    }, [])

    return (
        <div>
            <nav className={`bg-white lg:bg-transparent p-2 fixed top-0 z-10 w-full ${show && 'nav__black'}`}>
                <div className=" mx-auto px-4 sm:px-6 lg:px-8  relative">
                    <div className="h-16">
                        <div className="md:mt-3 flex items-center justify-between">
                            <div className={` -mt-3  lg:mt-0 flex-shrink-0 cursor-pointer ${bgWhite && 'bg-white px-2 rounded '}`}>
                                <Link to='/'>
                                    <img src='/images/logo/logo.png' className='mt-5 md:mt-0 w-40 pb-3 lg:py-3' alt="Ezcolab-logo" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <span
                                        className="navbar__big font-semibold text-[#2a3158]"
                                    >
                                        Sign In
                                    </span>

                                    <span
                                        className="navbar__big font-semibold text-[#2a3158]"
                                    >
                                        Sign Up
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-100 ring-2 ring-black mr-2  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none absolute top-2 right-0 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <span
                                    className=" navbar__small font-semibold text-[#2a3158]"
                                >
                                    Sign In
                                </span>

                                <span
                                    className="navbar__small font-semibold text-[#2a3158]"
                                >
                                    Sign Up
                                </span>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar;
