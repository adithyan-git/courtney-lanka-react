import React from "react";
import SmallCommonBanner from "../components/SmallCommonBanner";
import smallbanner1 from "../assets/images/smallbanner1.webp";
import arrowright from "../assets/images/arrowright.webp";

import CommonHead from "../components/CommonHead";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Careers = () => {
  const bannerDetails = [
    {
      id: 1,
      title: "Careers",
      img: smallbanner1,
      description:
        "Do you want to learn more about Courtney? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others.",
    },
  ];

  const commonHeadDetails = [
    {
      id: 1,
      heading: "Please join us",
      description:
        "Take a look at the open positions below If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@courtney.lk",
    },
  ];

  const skills = [
    {
      id: 1,
      skill: "React js",
    },
    {
      id: 2,
      skill: "Vue js",
    },
    {
      id: 3,
      skill: "Typescript",
    },
    {
      id: 4,
      skill: "Javascript",
    },
    {
      id: 5,
      skill: "Next JS",
    },
    {
      id: 6,
      skill: "Amplify",
    },
    {
      id: 7,
      skill: "AWS",
    },
    {
      id: 8,
      skill: "Terraform",
    },
    {
      id: 9,
      skill: "Node.js",
    },
    {
      id: 10,
      skill: "Serverless Framework",
    },
    {
      id: 11,
      skill: " C# and .NET",
    },
    {
      id: 11,
      skill: "GraphQL ",
    },
  ];

  return (
    <div className="w-full pt">
      <div className="w-full">
        <SmallCommonBanner bannerDetails={bannerDetails} />
      </div>
      <div className="w-full py-[100px] max-[640px]:py-10 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="w-full">
            <CommonHead commonHeadDetails={commonHeadDetails} />
          </div>
          <div className="w-full bg-[#FBFBFB] p-5 sm:p-[34px] ">
            <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2 grid-cols-1">
              <div>
                <div className="mb-5 border-b  border-[#BBBBBB] pb-2.5">
                  <h6
                    data-aos="fade-up"
                    className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                  >
                    ROLE
                  </h6>
                </div>
                <div>
                  <h6
                    data-aos="fade-up"
                    className="font-[Poppins] font-semibold max-text-[18px]  text-[23px]  text-[#16205F] mb-2.5"
                  >
                    Senior Web Full Stack Developer
                  </h6>
                  <p
                    data-aos="fade-up"
                    className="font-[Poppins] font-normal max-sm:text-[13px] text-[15px]  text-[#16205F] mb-5"
                  >
                    Seniority in development is not just about how much time you
                    have already spent behind the computer screen. It's the way
                    you think, how you approach problems and their solutions,
                    the responsibility you take on and feel.
                  </p>
                  <div className="sm:flex gap-5 ">
                    <Link className=" max-w-[150px] w-full h-[45px] max-sm:mb-2.5 bg-[linear-gradient(to_right,#FF9900,#F2CB00)] rounded-lg flex justify-center items-center gap-1.5 shadow-[0px_0px_12px_1px] shadow-[#0000001F]">
                      <p className="font-[Poppins] font-semibold text-[13px] sm:text-[14px] text-[#FFFFFF]">
                        APPLY NOW
                      </p>
                      <img src={arrowright} alt="" />
                    </Link>
                    <Link className="max-w-[150px] w-full h-[45px] bg-[#F3F3F3] rounded-lg flex justify-center items-center shadow-[0px_0px_22px_1px] shadow-[#0000001F]">
                      <p className="font-[Poppins] font-semibold text-[13px] sm:text-[14px] text-[#16205F]">
                        LEARN MORE
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-5 border-b  border-[#BBBBBB] pb-2.5">
                  <h6
                    data-aos="fade-up"
                    className="font-[Poppins] font-semibold text-[14px] sm:text-[15px] text-[#16205F]"
                  >
                    SKILLS
                  </h6>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <div
                      data-aos="zoom-in"
                      className="w-fit h-fit  p-2.5 rounded-lg bg-[#FFF856]"
                    >
                      <p className="font-[Poppins] font-semibold  text-[13px] text-[#16205F]">
                        {skill.skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-5 border-b  border-[#BBBBBB] pb-2.5">
                  <h6
                    data-aos="fade-up"
                    className="font-[Poppins] font-semibold text-[14px] sm:text-[15px]   text-[#16205F]"
                  >
                    LOCATION
                  </h6>
                </div>
                <div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[13px] sm:text-[15px] text-[#16205F]"
                    >
                      Remote ,
                    </h6>
                  </div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                    >
                      Ostrava
                      <span
                        data-aos="fade-up"
                        className="pl-1 font-[Poppins] font-normal  text-[13px] sm:text-[15px] text-[#16205F]"
                      >
                        - Czech Republic,
                      </span>
                    </h6>
                  </div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                    >
                      Brno
                      <span className="pl-1 font-[Poppins] font-normal  text-[15px] text-[#16205F]">
                        - Czech Republic,
                      </span>
                    </h6>
                  </div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                    >
                      Barcelona
                      <span
                        data-aos="fade-up"
                        className="pl-1 font-[Poppins] font-normal text-[15px] text-[#16205F]"
                      >
                        - Spain,
                      </span>
                    </h6>
                  </div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                    >
                      Prague
                      <span
                        data-aos="fade-up"
                        className="pl-1  font-[Poppins] font-normal  text-[15px] text-[#16205F]"
                      >
                        - Czech Republic,
                      </span>
                    </h6>
                  </div>
                  <div className="mb-2.5">
                    <h6
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold  text-[15px] text-[#16205F]"
                    >
                      Zlín
                      <span
                        data-aos="fade-up"
                        className="pl-1 font-[Poppins] font-normal  text-[15px] text-[#16205F]"
                      >
                        - Czech Republic,
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  pt-[100px] max-[640px]:pt-10 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
