import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeTestimonials1() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="home-slider lg:px-5 my-20 lg:my-0">
      <h1 className="text-3xl font-bold text-center text-[#186FC5]">
        Words of our Creators
      </h1>
      <div className="">
        <div className={`text-gray-600  rounded-lg w-3/4 lg:w-full mx-auto`}>
          <Slider {...settings}>
            <div>
              <div className="col-span-1 px-5 py-8rounded-lg">
                <div>
                  <img
                    src="/images/home/testimonials-1.png"
                    className="mt-5 md:mt-0 w-40"
                    alt="testimonial-img"
                  />
                </div>
                <div>
                  <h5>
                    EZ Colab is a comprehensive LMS (Learning Management System)
                    that comes with immense features like Course builder, live
                    content and webinars, gamified learning, lead generation and
                    marketing, knowledge base, and a lot more.
                  </h5>
                  <h5>
                    EZ Colab is an awesome platform for instructors, mentors,
                    trainers, and educators to create, manage, and sell their
                    courses online.
                  </h5>
                  <h5>
                    I am amazed to see the great features and awesome support by
                    the team.
                  </h5>
                  <h5>
                    This is a no-brainer LMS tool, definitely one should give it
                    a try.
                  </h5>
                </div>
                <h1 className="text-xl font-bold my-2">Amandeep Soni</h1>
                <h1 className="text-gray-600">Dietitian & Founder</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <div>
                  <img
                    src="/images/home/testimonials-2.png"
                    className="mt-5 md:mt-0 w-40"
                    alt="testimonial-img"
                  />
                </div>
                <h5>
                  EZ Colab became our all in 1 solution to help our team of
                  trainers to be able not only to market and run their own
                  programs but to be able to collaborate and market each other.
                  It also helped us to connect and add more value to our
                  students individually as well as collectively and we are now
                  exploring opening up our usage to our community of trainers
                  across the region in a 1 stop platform
                </h5>
                <h1 className="text-xl font-bold my-2">Soo Hoo Yoon Hun</h1>
                <h1 className="text-gray-600">Chief Impact Maker</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <div>
                  <img
                    src="/images/home/testimonials-3.jpg"
                    className="mt-5 md:mt-0 w-40"
                    alt="testimonial-img"
                  />
                </div>

                <h5>
                  EZ Colab has been come to my support when I was in need of an
                  LMS platform that can fulfill my requirements. There have many
                  pleasant features on their platform. Their support is also up
                  to mark. They never fall back on support. Also, EZ colab is
                  First ever community based platform. I am very much happy with
                  them.
                </h5>
                <h1 className="text-xl font-bold my-2">Anand Patel</h1>
                <h1 className="text-gray-600">Design Engineer</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials1;
