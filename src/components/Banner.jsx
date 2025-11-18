import React from "react";
import bannerImage from "../assets/images/bannerimage.webp";
import arrowright from "../assets/images/arrowright.webp";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="pt-20 max-sm:pt-[55px]  px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex  flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-center lg:w-1/2 w-full">
            <div className="flex flex-col gap-6 p-5 bg-white rounded-tr-[60px] lg:rounded-tr-[100px] lg:h-[calc(100dvh-200px)] h-auto">
              <h5
                data-aos="fade-up"
                className="font-poppins font-semibold text-[#16205F]
            text-[30px] leading-[35px]
            sm:text-[36px] sm:leading-[45px]
            lg:text-[48px] lg:leading-[56px]
            2xl:text-[64px] 2xl:leading-[78px]"
              >
                Building dev team, Quickly and Affordably
              </h5>

              <p
                data-aos="fade-up"
                className="font-poppins text-[#16205F]
            text-[16px] leading-[26px]
            sm:text-[18px] sm:leading-[28px]
            lg:text-[20px] lg:leading-[30px]
            2xl:text-[24px]"
              >
                We specialize in helping you build a team of expert developers,
                testers, and leaders. We are setup to deliver long term
                solutions, or scale to different needs quickly.
              </p>

              <Link
                className="text-[16px] font-semibold text-white bg-[linear-gradient(to_right,#FF9900,#F2CB00)]
            hover:bg-[linear-gradient(to_right,#F2CB00,#FF9900)] transition-all duration-500
            w-[180px] h-[50px] rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Build a team
                <img src={arrowright} alt="" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full ">
            <img
              src={bannerImage}
              alt="img"
              className="w-full object-cover
          h-[300px] sm:h-[350px] md:h-[400px] lg:h-[calc(100dvh-113px)]
          rounded-tr-[20px] rounded-bl-[60px] lg:rounded-bl-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
