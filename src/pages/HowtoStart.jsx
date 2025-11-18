import React from "react";
import SmallCommonBanner from "../components/SmallCommonBanner";
import smallbanner1 from "../assets/images/smallbanner1.webp";
import img from "../assets/images/img.webp";

import CommonHead from "../components/CommonHead";
import LeftIconRightNumberTitlewithDescription from "../components/LeftIconRightNumberTitlewithDescription";
import person from "../assets/images/person.webp";
import hands from "../assets/images/hands.webp";

import mail from "../assets/images/mail.webp";

import { RiArrowRightSLine } from "react-icons/ri";
import ContactForm from "../components/ContactForm";

const HowtoStart = () => {
  const bannerDetails = [
    {
      id: 1,
      title: "How to Start",
      img: smallbanner1,
      description:
        "We specialize in helping you build a team of expert developers.",
    },
  ];

  const commonHeadDetails = [
    {
      id: 1,
      heading: "How to Get Started with Courtney",
      description:
        "From full-time remote engineering teams to hourly contractors, work with remote devs as needed",
    },
  ];

  const details = [
    {
      id: 1,
      number: "01",
      title: "Request",
      img: mail,
      description: "Tell us more about your requirements and technical needs",
    },
    {
      id: 2,
      number: "02",
      title: "Interview",
      img: person,
      description: "You interview candidates. Average 2 interviews to hire.",
    },
    {
      id: 3,
      number: "03",
      title: "Hire",
      img: hands,
      description: "You choose who to hire, and we handle all the paperwork.",
    },
  ];

  const needs = [
    {
      id: 1,
      title: "Talent shortage",
    },
    {
      id: 2,
      title: "Lack of Expertise",
    },
    {
      id: 3,
      title: "Quick Kick-Off",
    },
    {
      id: 4,
      title: "Cost Optimization",
    },
    {
      id: 5,
      title: "Talent Accessibility",
    },
    {
      id: 6,
      title: "Administrative Hassle",
    },
  ];
  return (
    <div>
      <SmallCommonBanner bannerDetails={bannerDetails} />
      <div className="w-full px-5 py-[100px] max-[640px]:py-10">
        <div className="max-w-7xl mx-auto ">
          <CommonHead commonHeadDetails={commonHeadDetails} />

          <div className="grid grid-cols-3 gap-[45px] max-[748px]:grid-cols-1  max-[957px]:grid-cols-2">
            {details.map((detail) => (
              <LeftIconRightNumberTitlewithDescription
                details={detail}
                key={detail.id}
              />
            ))}
          </div>

          <div className="w-full py-[100px] max-[640px]:py-10">
            <div className="mb-[87px] max-[640px]:mb-7">
              <h5
                data-aos="fade-up"
                className="font-[Poppins] font-semibold max-[640px]:text-[30px] max-[448px]:text-[25px] max-[640px]:leading-8 text-[40px] leading-[45px] text-[#16205F] max-w-[609px] w-full  "
              >
                Why You Need To Hire Remote Developers
              </h5>
            </div>
            <div className="grid grid-cols-3 gap-2.5  max-[748px]:grid-cols-1  max-[957px]:grid-cols-2">
              {needs.map((need) => (
                <div className="flex items-center gap-2.5 mb-5" key={need.id}>
                  <RiArrowRightSLine data-aos="fade-up" className="w-5 h-5" />
                  <p
                    data-aos="fade-up"
                    className="font-[Poppins]  max-[448px]:text-[17px] max-[640px]:text-[20px] font-semibold text-[23px]   text-[#16205F]"
                  >
                    {need.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full mt-[90px] max-[640px]:mt-9 relative">
              <img
                src={img}
                alt="img"
                className="w-full h-[350px] object-cover rounded-2xl max-[768px]:h-[300px]"
              />
              <div className="w-fit h-fit absolute top-5 left-5">
                <h6
                  data-aos="zoom-in"
                  className="font-[Poppins] font-[275px] text-[50px]   text-[#FFFFFF] "
                >
                  1000+
                </h6>
                <p
                  data-aos="zoom-in"
                  className="font-[Poppins] font-semibold text-[23px]  text-[#FFFFFF]"
                >
                  Developers
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HowtoStart;
