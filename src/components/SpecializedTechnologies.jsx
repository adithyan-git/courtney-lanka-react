import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import react from "../assets/images/react.webp";
import node from "../assets/images/node.webp";
import angular from "../assets/images/angular.webp";
import next from "../assets/images/next.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SpecializedTechnologies = () => {
  const sliderImages = [
    {
      id: 1,
      img: react,
    },
    {
      id: 2,
      img: node,
    },
    {
      id: 3,
      img: angular,
    },
    {
      id: 4,
      img: next,
    },
    {
      id: 5,
      img: react,
    },
    {
      id: 6,
      img: node,
    },
    {
      id: 7,
      img: angular,
    },
    {
      id: 8,
      img: next,
    },
  ];
  return (
    <div className="py-20 px-5 max-[640px]:py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <h5
            data-aos="fade-up"
            className="text-center max-[448px]:text-[17px]  font-[Poppins] max-[640px]:text-[20px] font-semibold text-[22px] text-[#16205F]"
          >
            Specialized
          </h5>
          <span
            data-aos="fade-up"
            className="text-center max-[640px]:text-[30px] max-[448px]:text-[25px] font-[Poppins] font-semibold text-[40px]  2xl:text-[46px] text-[#16205F]"
          >
            Technologies
          </span>
        </div>
        <div className="relative">
          <IoIosArrowBack className="custombtn-prev  absolute  text-[70px] top-1/2 left-0 -translate-y-1/2    z-20  h-[30px] w-[30px]" />
          <Swiper
            slidesPerView={4}
            navigation={{
              nextEl: ".custombtn-next",
              prevEl: ".custombtn-prev",
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
            {sliderImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="flex flex-col h-fit justify-center items-center py-5">
                  <img src={image.img} alt="img" className="w-auto h-[50px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <IoIosArrowForward className="custombtn-next  absolute  top-1/2  right-0 z-10 -translate-y-1/2 text-[40px] h-[30px] w-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default SpecializedTechnologies;
