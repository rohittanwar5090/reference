import React, { Fragment } from "react";
import {
  listItems1,
  listItems2,
  listItems3,
  addOns,
  tier1,
  tier2,
  tier3,
  agency,
} from "./LandingPagePricingData";

function LandingPagePricing() {
  function renderList(listName) {
    return (
      <Fragment>
        {listName.map((list, index) => {
          return (
            <li key={index}>
              <i className={`fas fa-check mr-2 text-blue-600`}></i>
              {list}
            </li>
          );
        })}
      </Fragment>
    );
  }

  return (
    <>
      <section id="pricing" className="lg:max-w-6xl mx-auto ">
        <h5 className="text-center font-semibold text-3xl text-[#186FC5]">
          Features included in all plans
        </h5>
        <div className="lg:grid grid-cols-3">
          <div className="col-span-1 -mt-8 max-w-6xl mx-auto">
            <div className="p-9 grid place-items-center">
              <ul className="mt-11 space-y-3 text-left">
                {renderList(listItems1)}
              </ul>
            </div>
          </div>

          <div className="col-span-1 -mt-8 max-w-6xl mx-auto">
            <div className="p-9 grid place-items-center">
              <ul className="mt-11 space-y-3 text-left">
                {renderList(listItems2)}
              </ul>
            </div>
          </div>

          <div className="col-span-1 -mt-8 max-w-6xl mx-auto">
            <div className="p-9 grid place-items-center">
              <ul className="mt-11 space-y-3 text-left">
                {renderList(listItems3)}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="p-9 grid place-items-center">
            <h5 className="font-semibold text-3xl text-[#186FC5]">
              Optional Add-ons
            </h5>
            <ul className="mt-11 space-y-3 text-left">{renderList(addOns)}</ul>
          </div>
        </div>
      </section>

      <div className="p-9 place-items-center lg:grid grid-cols-4 space-y-10 lg:space-y-0 lg:gap-x-10 flex items-start ">
        <div className="col-span-1 shadow-2xl rounded-md p-3 ">
          <h1 className="font-semibold text-4xl text-center text-[#186FC5]">
            Tier 1
          </h1>

          <p className="text-[#2A3158] text-xl my-5 text-center">
            One time purchase of{" "}
          </p>

          <h1 className="text-3xl text-[#186FC5] font-semibold text-center  ">
            $149 | <span className="line-through ">$6000</span>
          </h1>

          <a
            href="https://checkout.ezcolab.com/subscribe/61a4af6bbf763558fe50d42e/tier-1"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-white cursor-pointer">
            <div className="cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-16 mx-auto px-2 text-center">
              Buy Now
            </div>
          </a>

          <ul className="mt-11 space-y-3 text-left">{renderList(tier1)}</ul>
        </div>

        <div className="  col-span-1  shadow-2xl rounded-md p-3">
          <h1 className="font-semibold text-4xl text-center text-[#186FC5]">
            Tier 2
          </h1>

          <p className="text-[#2A3158] text-center text-xl my-5">
            One time purchase of{" "}
          </p>

          <h1 className="text-[#186FC5] text-3xl font-semibold text-center ">
            $299 | <span className="line-through ">$7500</span>
          </h1>

          <a
            href="https://checkout.ezcolab.com/subscribe/61a5d420c3bc395292a733c3/tier-2"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-white cursor-pointer">
            <div
              className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-16 mx-auto px-2 text-center`}>
              Buy Now
            </div>
          </a>
          <ul className="mt-11 space-y-3 text-left">{renderList(tier2)}</ul>
        </div>

        <div className=" col-span-1 shadow-2xl rounded-md p-3 ">
          <h1 className="font-semibold text-4xl text-center text-[#186FC5]">
            Tier 3
          </h1>

          <p className="text-[#2A3158] text-xl my-5 text-center">
            One time purchase of{" "}
          </p>

          <h1 className="text-[#186FC5] text-3xl font-semibold  text-center ">
            $499 | <span className="line-through ">$9000</span>
          </h1>
          <a
            href="https://checkout.ezcolab.com/subscribe/61a5d6b2c3bc395292a7340f/tier-3"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-white cursor-pointer">
            <div
              className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-16 mx-auto px-2 text-center`}>
              Buy Now
            </div>
          </a>

          <ul className="mt-12 space-y-3 text-left">{renderList(tier3)}</ul>
        </div>

        <div className=" col-span-1 shadow-2xl rounded-md p-3">
          <h1 className="font-semibold text-4xl text-center text-[#186FC5]">
            Agency{" "}
          </h1>
          <p className="text-[#2A3158] text-center text-xl my-5">
            One time purchase of{" "}
          </p>
          <h1 className="text-[#186FC5] text-3xl font-semibold text-center  ">
            $999 | 45% OFF{" "}
          </h1>

          <a
            href="https://buy.stripe.com/cN2cO4dEg2xLgHm28j"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-white cursor-pointer">
            <div
              className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-16 mx-auto px-2 text-center`}>
              Buy Now
            </div>
          </a>
          <ul className="mt-11 space-y-3 text-left">
            <li className="text-[#df7324] font-bold">
              <i className={`fas fa-check mr-2 text-blue-600`}></i>6 Tier-2
              Institutes
            </li>

            {renderList(agency)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default LandingPagePricing;
