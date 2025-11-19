import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import whatsapp from "../assets/images/whatsapp.webp";
import instagramlogo from "../assets/images/instagramlogo.webp";
import twitterlogo from "../assets/images/twitterlogo.webp";
import youtubelogo from "../assets/images/youtublogo.webp";
import telegram from "../assets/images/telegram.webp";
import facebook from "../assets/images/facebooklogo.webp";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Clients = () => {
  return (
    <div className="w-full bg-[#F8F8F8]  py-20 px-5 max-[640px]:py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="w-full flex flex-col items-center mb-10">
          <h5
            data-aos="fade-up"
            className="font-[Poppins] max-[448px]:text-[17px] max-[640px]:text-[20px] font-semibold text-[22px] text-[#16205F]"
          >
            Clients
          </h5>
          <span
            data-aos="fade-up"
            className="font-[Poppins] max-[448px]:text-[25px] max-[640px]:text-[30px] font-semibold text-[40px]  text-[#16205F] text-center "
          >
            Amazing clients who trust us
          </span>
        </div>
        <div className="relative">
          <IoIosArrowBack className="custom-prev  absolute  text-[70px] top-1/2 left-0 -translate-y-1/2    z-20  h-[30px] w-[30px]" />
          <Swiper
            slidesPerView={4}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={whatsapp}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={youtubelogo}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={twitterlogo}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={telegram}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={instagramlogo}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center">
                <img
                  src={facebook}
                  alt="img"
                  className=" w-auto h-[90px] object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <IoIosArrowForward className="custom-next  absolute  top-1/2  right-0 z-10 -translate-y-1/2 text-[40px] h-[30px] w-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default Clients;
