import React from "react";
import { Link } from "react-router-dom";
function HomeVideo() {
  return (
    <div className="lg:px-5">
      <div className="grid lg:grid-cols-2 lg:items-center lg:justify-around p-5 mt-10 lg:mt-20">
        <div className="order-last lg:order-first">
          <h2 className="lg:w-4/5 text-3xl font-bold text-[#2275c7]">
            How is it 10x Faster?
          </h2>

          <h2 className="lg:w-4/5 text-xl  text-[#2A3158] my-4">
            EZ Colab provides a mini team consisting of a{" "}
            <span className=" text-[#2275c7] font-bold">
              {" "}
              designer, a developer and a manager{" "}
            </span>{" "}
            working to help you build your course funnel.
          </h2>

          <h2 className="lg:w-4/5 text-xl text-[#2A3158]">
            In just 5 days*, we design and build an attractive & converting
            course funnel so you can focus on your course content.
          </h2>
        </div>

        <div className=" mb-5 lg:mb-0 mt-10 lg:mt-0 grid place-items-center">
          <div
            style={{
              left: 0,
              width: "100%",
              height: 0,
              position: "relative",
              paddingBottom: "56.25%",
            }}>
            <figure
              style={{
                left: 0,
                width: "100%",
                height: 0,
                position: "relative",
                paddingBottom: "56.25%",
                marginBlockEnd: 0,
                marginBlockStart: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
              }}>
              <iframe
                title="home-video"
                src="https://api.vadoo.tv/iframe_test?id=BhxSTDFz16BCXnNA4BxCRvYhcykoeCMQ"
                scrolling="no"
                style={{
                  border: 0,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  overflow: "hidden",
                  borderRadius: "5px",
                }}
                allowFullScreen={1}
                allow="autoplay"></iframe>
            </figure>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 mx-auto text-[#2A3158] text-center py-2">
        <h3 className="text-2xl font-medium py-5">
          Launch your online course 10x Faster today!
        </h3>
      </div>
      <div className="mt-2 text-center mb-10">
        <Link
          to="/pricing"
          target="_blank"
          className="text-white rounded-full px-4 py-2 bg-[#DF7324]">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default HomeVideo;
