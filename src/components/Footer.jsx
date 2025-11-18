import React from "react";
import headerlogo from "../assets/images/headerlogo.webp";
import email from "../assets/images/Email.webp";
import location from "../assets/images/Location.webp";
import linkedin from "../assets/images/LinkedIn.webp";
import facebook from "../assets/images/Facebook.webp";
import instagram from "../assets/images/Instagram.webp";
import youtube from "../assets/images/YouTube.webp";
import twitter from "../assets/images/Twitter.webp";

import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" w-full   border-t border-[#C4C4C4]">
      <div className=" w-full  pt-[30px]  px-5">
        <div className="max-w-7xl w-full mx-auto pb-[30px]  ">
          <div
            className="flex w-full 
          justify-between flex-wrap gap-5 max-[519px]:flex-col "
          >
            <div>
              <div>
                <img
                  src={headerlogo}
                  alt="img"
                  className="w-auto h-10 md:h-[50px] xl:h-[65px]"
                />
              </div>
              <p className=" max-[448px]:text-[13px] max-[640px]:text-[14px]  max-w-[329px] w-full font-[Poppins] font-normal text-[15px]   text-[#16205F] mt-[30px] ">
                Expertly trained, battle-tested, elite software developers on
                demand
              </p>
              <div>
                <div className="flex  items-center gap-5 mt-[25px]">
                  <IoMdCall className="w-6 h-6" />
                  <Link className="font-[Poppins] max-[448px]:text-[13px] max-[640px]:text-[14px] font-normal text-[15px]  text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    +94 713249222
                  </Link>
                </div>
                <div className="flex  items-center gap-5 mt-[25px]">
                  <img src={email} alt="img" className="w-6 h-6" />
                  <Link className="font-[Poppins] max-[448px]:text-[13px]  max-[640px]:text-[14px] font-normal text-[15px]  text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    hello@courtney.lk
                  </Link>
                </div>
                <div className="flex  items-start gap-5 mt-[25px]">
                  <img src={location} alt="img" className="w-6 h-6" />
                  <Link className="font-[Poppins] max-[448px]:text-[13px]  max-[640px]:text-[14px] font-normal text-[15px]   text-[#16205F] max-w-[353px] w-full hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    Courtney Lanka (Private) Limited Level 35 World Trade Center
                    Colombo 01
                  </Link>
                </div>
              </div>
              <div className="">
                <h6 className="font-[Poppins]  max-[640px]:text-[14px] font-semibold text-[18px] text-[#16205F] my-5">
                  Follow us
                </h6>
                <div className="flex gap-5">
                  <Link>
                    <img
                      src={linkedin}
                      alt="img"
                      className="w-[22.5px] h-[22.5px] "
                    />
                  </Link>
                  <Link>
                    <img
                      src={facebook}
                      alt="img"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={instagram}
                      alt="img"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={twitter}
                      alt="img"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                  <Link>
                    <img
                      src={youtube}
                      alt="img"
                      className="w-[22.5px] h-[22.5px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2.5">
                <h6 className="font-[Poppins] max-[448px]:text-[20px] font-semibold   max-[640px]:text-[18px] text-[20px] text-[#16205F]">
                  Company
                </h6>
              </div>
              <div>
                <ul>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal  max-[640px]:text-[14px] text-[15px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      About Us
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]  text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Success Stories
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px] max-[640px]:text-[14px]  text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]  text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-2.5">
                <h6 className="font-[Poppins] font-semibold text-[20px]  max-[640px]:text-[18px]   text-[#16205F]">
                  Services
                </h6>
              </div>
              <div>
                <ul>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Hire Permanent Staff
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Staff Augmentation
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Software Outsourcing
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Build Remote Office
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-2.5">
                <h6 className="font-[Poppins] max-[448px]:text-[20px] font-semibold   max-[640px]:text-[18px] text-[20px] text-[#16205F]">
                  How to Start
                </h6>
              </div>
              <div>
                <ul>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      You Asked
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px] max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      We Proceed
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px] max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      Negotiate
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link className="font-[Poppins] max-[448px]:text-[13px] font-normal text-[15px]  max-[640px]:text-[14px]   text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                      You Get
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  border-t border-[#C4C4C4] px-5">
        <div className="max-w-7xl w-full mx-auto py-[30px]">
          <div className="  max-[448px]:text-[13px] font-[Poppins] font-normal  max-[640px]:text-[14px] text-[15px]   text-[#16205F]">
            <p>© 2022 courtney</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
