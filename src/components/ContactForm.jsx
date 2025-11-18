import React from "react";
import contactimg from "../assets/images/contactimg.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 max-[994px]:grid-cols-2">
        <div className="col-span-7  max-[994px]:col-span-12">
          <div className="h-full">
            <img
              src={contactimg}
              alt="img"
              className="w-full max-[994px]:h-auto rounded-tr-[20px] max-[994px]:rounded-none rounded-br-[100px] rounded-bl-[20px] h-[800px]   object-cover"
            />
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
                      type="text"
                      placeholder="Your Name"
                      className="py-2.5 pl-2 border  border-[#C5E0FF] max-[640px]:text-[13px] rounded-lg focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mb-5 max-[640px]:flex-col">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="py-2.5 pl-2 border  border-[#C5E0FF] rounded-lg max-[640px]:text-[13px] focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="py-2.5 pl-2 border  border-[#C5E0FF] max-[640px]:text-[13px] rounded-lg focus:outline-0 font-[Poppins] font-normal text-[14px] text-[#00000080]"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      data-aos="fade-up"
                      className="font-[Poppins] font-semibold 2xl:text-[16px] max-[640px]:text-[14px] text-[15px] text-[#16205F] mb-2.5"
                    >
                      Project Detail
                    </label>
                    <textarea
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
                    By sending this form I confirm that I have read and accept
                    the <span className="font-semibold">Privacy Policy</span>
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
  );
};

export default ContactForm;
