import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import logo from "../assets/images/Logo.webp";
import smallretangle from "../assets/images/smallretangle.webp";
import largeretangle from "../assets/images/largeretangle.webp";

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
            className="font-[Poppins] max-[448px]:text-[25px] max-[640px]:text-[30px] font-semibold text-[40px] 2xl:text-[46px] text-[#16205F] text-center "
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
              <div className=" flex flex-col h-fit justify-center    items-center">
                <div className="w-[77px] h-[66px]  flex flex-col justify-center p-1.5 items-center relative">
                  <img src={logo} alt="img" className="w-[77px] h-7  z-10" />
                  <img
                    src={largeretangle}
                    alt="img"
                    className="absolute left-0 h-full w-[35px]"
                  />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 bottom-0 h-[30px] w-[35px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col h-fit justify-center    items-center">
                <div className="w-[77px] h-[66px]  flex flex-col justify-center p-1.5 items-center relative">
                  <img src={logo} alt="img" className="w-[77px] h-7  z-10" />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 top-0 h-[30px] w-[35px]"
                  />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 bottom-0 h-[30px] w-[35px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col h-fit justify-center   items-center ">
                <div className="w-[77px] h-[66px]  flex flex-col justify-center p-1.5 items-center relative">
                  <img src={logo} alt="img" className="w-[77px] h-7  z-10" />
                  <img
                    src={largeretangle}
                    alt="img"
                    className="absolute left-0 h-full w-[35px]"
                  />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 top-0 h-[30px] w-[35px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col h-fit justify-center   items-center ">
                <div className="w-[77px] h-[66px]  flex flex-col justify-center p-1.5 items-center relative">
                  <img src={logo} alt="img" className="w-[77px] h-7  z-10" />
                  <img
                    src={largeretangle}
                    alt="img"
                    className="absolute left-0 h-full w-[35px]"
                  />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 bottom-0 h-[30px] w-[35px]"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col h-fit justify-center   items-center">
                <div className="w-[77px] h-[66px]  flex flex-col justify-center p-1.5 items-center relative">
                  <img src={logo} alt="img" className="w-[77px] h-7  z-10" />
                  <img
                    src={largeretangle}
                    alt="img"
                    className="absolute left-0 h-full w-[35px]"
                  />
                  <img
                    src={smallretangle}
                    alt="img"
                    className="absolute right-0 top-0 h-[30px] w-[35px]"
                  />
                </div>
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
