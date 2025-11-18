import React from "react";
import SmallCommonBanner from "../components/SmallCommonBanner";
import smallbanner1 from "../assets/images/smallbanner1.webp";
import CommonHead from "../components/CommonHead";
import headerlogo from "../assets/images/headerlogo.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import linkedin from "../assets/images/LinkedIn.webp";
import facebook from "../assets/images/Facebook.webp";
import instagram from "../assets/images/Instagram.webp";
import youtube from "../assets/images/YouTube.webp";
import twitter from "../assets/images/Twitter.webp";
const ContactUs = () => {
  const bannerDetails = [
    {
      id: 1,
      title: "Contact",
      img: smallbanner1,
      description:
        "We specialize in helping you build a team of expert developers.",
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

  return (
    <div className="w-full ">
      <div className="w-full">
        <SmallCommonBanner bannerDetails={bannerDetails} />
      </div>
      <div className="w-full py-[100px] max-[640px]:py-10 px-5 ">
        <div className="max-w-7xl w-full mx-auto">
          <div className="w-full">
            <CommonHead commonHeadDetails={commonHeadDetails} />
          </div>
          <div className="w-full">
            <div className="grid grid-cols-12 max-[994px]:grid-cols-2">
              <div className="col-span-7  max-[994px]:col-span-12">
                <div className="h-full">
                  <iframe
                    className="w-full max-[768px]:h-auto rounded-tr-[20px] max-[994px]:rounded-none rounded-br-[100px] rounded-bl-[20px] h-[800px]   object-cover"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4798818912777!2d75.89110417416096!3d11.152061152154491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651004cf3bd47%3A0xa01729754a175e5d!2sKakkanchery%20Kinfra%20Bus%20stop(NHAI)!5e0!3m2!1sen!2sin!4v1763366492955!5m2!1sen!2sin"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div className="col-span-5 flex flex-col justify-center max-[994px]:col-span-12 max-[994px]:px-5">
                <div className=" bg-white z-10 max-[994px]:ml-0 max-[994px]:mt-[-100px] max-[994px]:rounded-none ml-[-100px] pl-[50px] py-[50px] pr-5 max-[448px]:pl-5 h-fit rounded-tl-[100px]">
                  <div className="mb-10">
                    <h5
                      data-aos="fade-up"
                      className="max-[448px]:leading-[35px] font-[Poppins] max-[448px]:text-[25px] max-[640px]:text-[30px] font-semibold 2xl:text-[46px] 2xl:max-w-[526px] text-[40px] max-[640px]:leading-[45px] leading-[50px] max-w-[460px] w-full  text-[#16205F]"
                    >
                      Connect With Your Next Great Hire Today!
                    </h5>
                  </div>
                  <div>
                    <form action="">
                      <div className="flex gap-5 mb-5 max-[640px]:flex-col">
                        <div className="flex flex-col w-full">
                          <label
                            data-aos="fade-up"
                            htmlFor=""
                            className="font-[Poppins] font-semibold max-[640px]:text-[15px] text-[16px] text-[#16205F] mb-2.5"
                          >
                            Company
                          </label>
                          <input
                            data-aos="fade-up"
                            type="text"
                            placeholder="company"
                            className="py-2.5 pl-2 border max-[640px]:text-[13px]  border-[#C5E0FF] rounded-lg focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            data-aos="fade-up"
                            htmlFor=""
                            className="font-[Poppins] font-semibold max-[640px]:text-[15px] text-[16px] text-[#16205F] mb-2.5"
                          >
                            Your Name
                          </label>
                          <input
                            data-aos="fade-up"
                            type="text"
                            placeholder="Your Name"
                            className="py-2.5 pl-2 border  border-[#C5E0FF] max-[640px]:text-[13px] rounded-lg focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                          />
                        </div>
                      </div>
                      <div className="flex gap-5 mb-5 max-[640px]:flex-col">
                        <div className="flex flex-col w-full">
                          <label
                            data-aos="fade-up"
                            htmlFor=""
                            className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                          >
                            Phone Number
                          </label>
                          <input
                            data-aos="fade-up"
                            type="text"
                            placeholder="Phone Number"
                            className="py-2.5 pl-2 border  border-[#C5E0FF] rounded-lg max-[640px]:text-[13px] focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                          />
                        </div>
                        <div className="flex flex-col w-full">
                          <label
                            data-aos="fade-up"
                            htmlFor=""
                            className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                          >
                            Email
                          </label>
                          <input
                            data-aos="fade-up"
                            type="email"
                            placeholder="Email"
                            className="py-2.5 pl-2 border  border-[#C5E0FF] max-[640px]:text-[13px] rounded-lg focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-col w-full">
                          <label
                            data-aos="fade-up"
                            htmlFor=""
                            className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                          >
                            Project Detail
                          </label>
                          <textarea
                            data-aos="fade-up"
                            name=""
                            id=""
                            placeholder="Project Detail"
                            className="py-2.5 pl-2 border  border-[#C5E0FF] rounded-lg focus:outline-0 font-[Poppins] max-[640px]:text-[13px] font-normal text-[14px] text-[#00000080]"
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex  max-w-[500px] w-full mt-[38px] gap-2.5">
                        <input type="checkbox" className="w-[18px] h-[18px]" />
                        <p
                          data-aos="fade-up"
                          className="font-[Poppins] font-normal 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F]"
                        >
                          By sending this form I confirm that I have read and
                          accept the{" "}
                          <span className="font-semibold">Privacy Policy</span>
                        </p>
                      </div>
                      <Link className="max-[448px]:w-full mt-5 gap-5 w-[250px] h-[54px] flex items-center  justify-center bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-[linear-gradient(to_right,#FCB81F,#ED7901)] rounded-lg">
                        <p className="font-[Poppins] max-[448px]:text-[13px] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#FFFFFF]">
                          GET CONSULTATION
                        </p>
                        <FaArrowRight className="text-white" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-[100px] max-[640px]:pt-10">
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1">
              <div>
                <div className="mb-[54px]">
                  <img
                    src={headerlogo}
                    alt="img"
                    data-aos="zoom-in"
                    className="w-auto h-10 md:h-[50px] xl:h-[65px] 2xl:h-[83px]"
                  />
                </div>
                <div>
                  <h5
                    data-aos="fade-up"
                    className="font-poppins font-normal max-sm:text-[18px] text-[20px] 2xl:text-[28px] text-[#16205F] mb-2.5"
                  >
                    Office
                  </h5>
                  <p
                    data-aos="fade-up"
                    className="font-poppins font-normal  max-sm:text-[15px] text-[18px] 2xl:text-[24px] text-[#16205F] mb-1.5"
                  >
                    info@courtney.lk
                  </p>
                  <span
                    data-aos="fade-up"
                    className="font-poppins inline-block max-sm:text-[15px] font-semibold text-[18px] 2xl:text-[24px] text-[#16205F]"
                  >
                    +94 011 283 744
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <div className="mb-4">
                    <h5
                      data-aos="fade-up"
                      className="font-poppins font-normal  max-sm:text-[18px] text-[20px] 2xl:text-[28px] text-[#16205F]"
                    >
                      Vishwa Liyanapathirana
                    </h5>
                    <span
                      data-aos="fade-up"
                      className="inline-block font-poppins font-semibold  max-sm:text-[13px] text-[15px] 2xl:text-[16px] text-[#16205F] mb-5"
                    >
                      Human Resources
                    </span>
                  </div>
                  <p
                    data-aos="fade-up"
                    className="font-poppins font-normal  max-sm:text-[15px] text-[18px] 2xl:text-[24px] text-[#16205F] mb-1.5"
                  >
                    vishwa@courtney.lk
                  </p>
                  <span
                    data-aos="fade-up"
                    className="font-poppins inline-block font-semibold  max-sm:text-[15px] text-[18px] 2xl:text-[24px] text-[#16205F]"
                  >
                    +94 011 283 744
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <div className="mb-4">
                    <h5
                      data-aos="fade-up"
                      className="font-poppins font-normal  max-sm:text-[18px] text-[20px] 2xl:text-[28px] text-[#16205F] mb-[7px]]"
                    >
                      Kasun Perera
                    </h5>
                    <span
                      data-aos="fade-up"
                      className="inline-block font-poppins font-semibold  max-sm:text-[13px] text-[15px] 2xl:text-[16px] text-[#16205F] mb-5"
                    >
                      Funder/CEO
                    </span>
                  </div>
                  <p
                    data-aos="fade-up"
                    className="font-poppins font-normal  max-sm:text-[15px] text-[18px] 2xl:text-[24px] text-[#16205F] mb-1.5"
                  >
                    kasun@courtney.lk
                  </p>
                  <span
                    data-aos="fade-up"
                    className="font-poppins font-semibold  max-sm:text-[15px] text-[18px] 2xl:text-[24px] text-[#16205F] inline-block"
                  >
                    +44 532 82820 9292
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-[50px]">
                <h5
                  data-aos="fade-up"
                  className=" max-sm:text-[15px] text-[18px]  font-poppins font-semibold  text-[#16205F] mb-5"
                >
                  Follow us
                </h5>
                <div className="flex gap-5">
                  <Link>
                    <img
                      src={linkedin}
                      alt="img"
                      data-aos="zoom-in"
                      className="w-[22.5px] h-[22.5px] "
                    />
                  </Link>
                  <Link>
                    <img
                      src={facebook}
                      alt="img"
                      data-aos="zoom-in"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={instagram}
                      alt="img"
                      data-aos="zoom-in"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={twitter}
                      alt="img"
                      data-aos="zoom-in"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={youtube}
                      alt="img"
                      data-aos="zoom-in"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
