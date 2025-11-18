import React from "react";
import bannerImage from "../assets/images/bannerimage.webp";
import arrowright from "../assets/images/arrowright.webp";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className=" pt-20 max-sm:pt-[55px] h-dvh max-[1117px]:h-auto  px-5">
      <div className="max-w-7xl w-full mx-auto  box-border  ">
        <div className="flex  max-[1117px]:flex-col-reverse    max-[1117px]:h-auto ">
          <div className="flex flex-col justify-center   w-[40%] max-[1117px]:w-full ">
            <div className="flex flex-col gap-8 max-[640px]:gap-5 justify-center  w-[730px] h-[calc(100dvh_-_200px)] py-5 max-[1117px]:justify-between  max-[1117px]:h-fit   bg-white rounded-tr-[100px]  pl-2.5 mr-[-100px]  max-[1117px]:m-0  z-10 max-[1117px]:w-full">
              <h5
                data-aos="fade-right"
                className="  max-[448px]:text-[25px] max-[448px]:leading-[35px]  max-[640px]:text-[30px]   max-w-[450px] w-full font-poppins font-semibold text-[40px] text-[#16205F] leading-[45px]"
              >
                Building dev team, Quickly and Affordably
              </h5>

              <p
                data-aos="fade-left"
                className="max-[448px]:text-[14px] max-[448px]:leading-[23px] max-[640px]:text-[16px]   max-w-[550px] w-full font-[Poppins] font-normal text-[19px] text-[#16205F] leading-[30px]"
              >
                We specialize in helping you build a team of expert developers,
                testers, and leaders. We are setup to deliver long term
                solutions, or scale to different needs quickly.
              </p>

              <Link className="max-[448px]:text-[14px] hover:bg-[linear-gradient(to_right,#F2CB00,#FF9900)] hover:transition-all duration-500 shadow-[0px_0px_10px_2px] shadow-[#0000001F] gap-1.5 rounded-lg font-[Poppins] font-semibold text-[16px] text-[#FFFFFF] w-[201px] h-[54px] bg-[linear-gradient(to_right,#FF9900,#F2CB00)] flex justify-center items-center">
                Build a team
                <img src={arrowright} alt="img" className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="   w-[60%] max-[1117px]:w-full   ">
            <img
              src={bannerImage}
              alt="img"
              className="w-full max-[448px]:h-auto h-[calc(100dvh_-_113px)] max-[1117px]:rounded-tr-none max-[1117px]:h-[400px]  object-cover rounded-tr-[20px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
