import React, { useState } from "react";
import SmallCommonBanner from "../components/SmallCommonBanner";
import smallbanner1 from "../assets/images/smallbanner1.webp";
import CommonHead from "../components/CommonHead";
import ContactForm from "../components/ContactForm";
import symfony from "../assets/images/symfony.webp";
import reactlogo from "../assets/images/reactlogo.webp";
import python from "../assets/images/python.webp";
import js from "../assets/images/js.webp";
import elogo from "../assets/images/elogo.webp";
import css from "../assets/images/css.webp";
import nodejs from "../assets/images/node.js.webp";
import php from "../assets/images/PHP.webp";
import java from "../assets/images/java.webp";
import csharp from "../assets/images/csharp.webp";
import django from "../assets/images/django.webp";
import cplusplus from "../assets/images/c++.webp";
import laravel from "../assets/images/laravel.webp";
import express from "../assets/images/express.webp";
import spring from "../assets/images/spring.webp";
import ios from "../assets/images/ios.webp";
import reactnative from "../assets/images/reactnative.webp";
import flutter from "../assets/images/flutter.webp";
import ionic from "../assets/images/ionic.webp";
import mongodb from "../assets/images/mongodb.webp";

const Technologies = () => {
  const [showColor, setShowColor] = useState(null);

  const changeColor = (id) => {
    setShowColor(id);
  };

  const bannerDetails = [
    {
      id: 1,
      title: "Technologies",
      img: smallbanner1,
      description:
        "We specialize in helping you build a team of expert developers.",
    },
  ];

  const commonHeadDetails = [
    {
      id: 1,
      heading: "Technologies",
      description:
        "Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity",
    },
  ];

  const categories = [
    {
      id: 1,
      categoryname: "Frontend",
    },
    {
      id: 2,
      categoryname: "Backend",
    },
    {
      id: 3,
      categoryname: "Mobile App",
    },
    {
      id: 4,
      categoryname: "DataBase",
    },
    {
      id: 5,
      categoryname: "Google",
    },
    {
      id: 6,
      categoryname: "Data Science",
    },

    {
      id: 7,
      categoryname: "DevOps",
    },
    {
      id: 8,
      categoryname: "CMS",
    },
    {
      id: 9,
      categoryname: "ECommerce",
    },
    {
      id: 10,
      categoryname: "Security",
    },
    {
      id: 11,
      categoryname: "Frameworks",
    },
  ];

  const logos = [
    {
      id: 1,
      part: "frontend",
      img: symfony,
    },
    {
      id: 2,
      part: "frontend",
      img: reactlogo,
    },
    {
      id: 3,
      part: "frontend",
      img: elogo,
    },
    {
      id: 4,
      part: "frontend",
      img: css,
    },
    {
      id: 5,
      part: "frontend",
      img: python,
    },
    {
      id: 6,
      part: "frontend",
      img: js,
    },
    {
      id: 7,
      part: "frontend",
      img: php,
    },
    {
      id: 8,
      part: "frontend",
      img: nodejs,
    },
    {
      id: 9,
      part: "frontend",
      img: java,
    },
    {
      id: 10,
      part: "frontend",
      img: csharp,
    },
    {
      id: 11,
      part: "frontend",
      img: django,
    },
    {
      id: 12,
      part: "frontend",
      img: mongodb,
    },
    {
      id: 13,
      part: "frontend",
      img: flutter,
    },
    {
      id: 14,
      part: "frontend",
      img: express,
    },
    {
      id: 15,
      part: "frontend",
      img: spring,
    },
    {
      id: 16,
      part: "fronend",
      img: cplusplus,
    },
    {
      id: 17,
      part: "fronend",
      img: laravel,
    },
    {
      id: 18,
      part: "fronend",
      img: ios,
    },
    {
      id: 19,
      part: "fronend",
      img: reactnative,
    },
    {
      id: 20,
      part: "fronend",
      img: ionic,
    },
  ];

  return (
    <div className="">
      <div className="w-full">
        <SmallCommonBanner bannerDetails={bannerDetails} />
      </div>
      <div className="w-full pt-[100px] max-[640px]:pt-10 px-5">
        <div className="max-w-7xl mx-auto w-full ">
          <CommonHead commonHeadDetails={commonHeadDetails} />
        </div>
      </div>
      <div className="w-full pb-[100px] max-[640px]:pb-10 px-5 ">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex justify-between items-center w-full flex-wrap  ">
            <div>
              <span className="cursor-pointer font-[Poppins] font-semibold text-[15px] text-[#9F9F9F] p-2.5 rounded-xl">
                All
              </span>
            </div>
            {categories.map((category) => (
              <div
                className={`cursor-pointer font-[Poppins] font-semibold max-[426px]:text-[13px] text-[15px] text-[#9F9F9F] p-2.5 rounded-xl  ${
                  showColor === category.id ? "bg-[#FFF856]" : "bg-transparent"
                } ${
                  showColor === category.id
                    ? "text-[#16205F]"
                    : "text-[#9F9F9F]"
                }`}
                onClick={() => changeColor(category.id)}
              >
                {category.categoryname}
              </div>
            ))}
          </div>
          <div className="w-full mt-[60px]">
            <div className="grid grid-cols-6 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-5">
              {logos.map((logo) => (
                <div
                  data-aos="zoom-in"
                  className="w-full p-5 flex justify-center items-center h-40 bg-[#FFFFFF]  rounded-xl shadow-[0px_0px_3px_1px] shadow-[#0000001F] cursor-pointer"
                  key={logo.id}
                >
                  <img
                    src={logo.img}
                    alt=""
                    className="w-auto h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full pb-[100px] max-[640px]:pb-10 px-5">
        <div className="max-w-7xl mx-auto w-full ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
