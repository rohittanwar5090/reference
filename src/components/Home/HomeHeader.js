import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Typewriter from "typewriter-effect";

function Header() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [random] = useState(Math.floor(Math.random() * (10 - 3 + 1) + 3));

  const firstShow = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(false);
  };
  const secondShow = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(false);
  };
  const thirdShow = () => {
    setShowFirst(false);
    setShowSecond(false);
    setShowThird(true);
  };


  // --------------this is the main header presented on the website ----------
  return (
    <>
      <div className="header p-5 lg:px-8">
        <div className="grid place-items-center mt-20 lg:mt-32 lg:px-5 ">
          <div className="px-1 lg:px-0  text-center pb-5">
            <h1 className="text-[#186FC5] filter drop-shadow-xl text-[23px]  lg:text-5xl font-bold flex items-center justify-center capitalize">
              Launch your
              <span
                className="px-2 text-[23px] lg:text-5xl font-semibold 
                        text-[#df7324]">
                <Typewriter
                  options={{
                    strings: [
                      "online course",
                      "community",
                      "coaching business",
                      "template business",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h1 className="text-[#186FC5] filter drop-shadow-xl  text-[23px]   lg:text-[40px] font-bold mt-2 lg:mt-5 capitalize">
              10x faster with 2x more leads & 3x more sales.
            </h1>
            <br />

            <p className="text-[#2A3158] text-lg my-5">
              A Business-in-a-box solution for Course Creators & Coaches to turn
              their knowledge into income.
            </p>

            <div>
              <Link
                to="/demo"
                target="_blank"
                className="text-white rounded-md px-4 py-2 bg-[#df7324]">
                Book a Demo Now
              </Link>
            </div>

            <p className="text-[#2A3158] text-lg my-5">
              {`${random} people booked a demo today. Book yours today! `}
            </p>

            <div className="mt-5">
              <Link
                to="/ltd"
                target="_blank"
                className="underline font-bold text-[#186FC5]">
                Grab Your Life Time Deal Now!
              </Link>
            </div>
          </div>

          <div
            className=" lg:mb-5 trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="6192a046fd9c5e5d047aebb5"
            data-style-height="24px"
            data-style-width="100%"
            data-theme="light"
            data-stars="1,2,3,4,5"
            data-no-reviews="hide"
            data-scroll-to-list="true"
            data-allow-robots="true"
            data-min-review-count="10">
            <a
              href="https://www.trustpilot.com/review/ezcolab.com"
              target="_blank"
              rel="noopener">
              Trustpilot
            </a>
          </div>

          <div className="mt-14 lg:mt-0  ">
            <div className="grid place-items-center">
              <div className="grid place-items-center mb-2 lg:mb-4 ">
                <div className="text-xs lg:text-lg text-center flex">
                  <h1
                    onClick={firstShow}
                    className={`${
                      showFirst
                        ? "  bg-[#186FC5] text-white"
                        : "bg-transparent text-blue-600"
                    }  cursor-pointer  ring-1 ring-blue px-5 py-1 rounded-tl-lg }`}>
                    {" "}
                    Admin View
                  </h1>

                  <h1
                    onClick={secondShow}
                    className={`${
                      showSecond ? " bg-[#DF7324] text-white" : " text-blue-600"
                    }  cursor-pointer   ring-1 ring-blue px-5 py-1`}>
                    Instructor View
                  </h1>

                  <h1
                    onClick={thirdShow}
                    className={`${
                      showThird ? " text-white bg-[#2A3158]" : "text-blue-600"
                    }  cursor-pointer ring-1 ring-blue px-5 py-1 rounded-tr-lg`}>
                    Student View
                  </h1>
                </div>
              </div>

              <div className="px-2 lg:px-0 grid place-items-center">
                {showFirst && (
                  <img
                    src="/images/home/home-admin-view-w.webp"
                    className=" w-full transform-gpu scale-110  object-contain shadow-2xl"
                    alt="admin-view"
                  />
                )}
                {showSecond && (
                  <img
                    src="/images/home/home-instructor-view-w.webp"
                    className=" w-full transform-gpu scale-110  object-contain shadow-2xl"
                    alt="instructor-view"
                  />
                )}
                {showThird && (
                  <img
                    src="/images/home/home-student-view-w.webp"
                    className=" w-full transform-gpu scale-110  object-contain shadow-2xl"
                    alt="student-view "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
