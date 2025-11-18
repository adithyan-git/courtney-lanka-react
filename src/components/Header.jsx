import React, { useState } from "react";
import headerlogo from "../assets/images/headerlogo.webp";
import arrowdown from "../assets/images/arrowdown.webp";
import navclose from "../assets/images/navclose.webp";
import menu from "../assets/images/menu.webp";

import { GoArrowRight } from "react-icons/go";

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [show, setshow] = useState(false);

  const showNav = () => {
    setshow(true);
  };

  const closeNav = () => {
    setshow(false);
  };

  const [bgColor, setBgColor] = useState(1);

  const changeColor = (id) => {
    setBgColor(id);
  };
  return (
    <div className=" fixed w-full border bg-white border-[#E1E1E1] z-40 px-5 h-fit py-1.5">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center ">
        <div className=" ">
          <Link to={"/"}>
            <img
              src={headerlogo}
              alt="img"
              className="w-auto max-sm:h-10 h-[65px]"
            />
          </Link>
        </div>
        <div className="max-[1147px]:hidden">
          <nav>
            <ul className="flex  w-[500px] justify-between items-center">
              <li className="">
                <Link to={"/howtostart"}>
                  <p className="font-[Poppins] font-normal  text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    How to start
                  </p>
                </Link>
              </li>
              <li className="">
                <Link to={"/services"} className="flex items-center  gap-1.5">
                  <p className="font-[Poppins] font-normal   text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    Services
                  </p>
                  <img src={arrowdown} alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  to={"/technologies"}
                  className="flex items-center  gap-1.5"
                >
                  <p className="font-[Poppins] font-normal   text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    Technologies
                  </p>
                  <img src={arrowdown} alt="img" className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link to={"/carees"}>
                  <p className="font-[Poppins] font-normal   text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                    Careers
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="max-[1147px]:hidden">
          <div className="flex items-center gap-6">
            <Link
              onClick={() => setOpen(true)}
              className=" font-[Poppins] font-semibold   text-[16px] text-[#16205F] hover:text-white flex gap-1.5 w-[189px] h-[41px] items-center border-2 border-[#16205F] rounded-lg justify-center hover:bg-[#16205F] transition-all duration-300"
            >
              BUILD A TEAM
              <GoArrowRight
                className={" w-[17.999984741210938px] h-[15.185184478759766px]"}
              />
            </Link>
            <Link to={"/contactus"}>
              <span className="font-[Poppins] font-normal  text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                Contact us
              </span>
            </Link>
          </div>
        </div>
        {show ? null : (
          <div className="min-[1147px]:hidden max-[1147px]:block ">
            <img
              src={menu}
              alt="img"
              className="w-[27px] h-[18px]"
              onClick={() => showNav()}
            />
          </div>
        )}
        {show ? (
          <div className="absolute right-0 top-0 w-fit h-fit bg-white p-5 min-[1147px]:hidden max-[1147px]:block">
            <div className="flex justify-end">
              <img
                src={navclose}
                alt="img"
                className="w-[17.5px] h-[17.5px]"
                onClick={() => closeNav()}
              />
            </div>
            <div className="pt-[76px]">
              <nav>
                <ul className="flex flex-col gap-9">
                  <li className="">
                    <Link to={"/howtostart"}>
                      <p className="font-[Poppins] font-normal  text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                        How to start
                      </p>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={"/services"}
                      className="flex items-center justify-between  gap-1.5"
                    >
                      <p className="font-[Poppins] font-normal  text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                        Services
                      </p>
                      <img src={arrowdown} alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/technologies"}
                      className="flex items-center  gap-1.5 justify-between"
                    >
                      <p className="font-[Poppins] font-normal  text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                        Technologies
                      </p>
                      <img src={arrowdown} alt="img" className="w-6 h-6" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/carees"}>
                      <p className="font-[Poppins] font-normal   text-[16px] text-[#16205F] hover:bg-[linear-gradient(to_right,#ED7901,#FCB81F)] hover:bg-clip-text hover:text-transparent transition-all duration-500">
                        Careers
                      </p>
                    </Link>
                  </li>
                  <Link
                    onClick={() => setOpen(true)}
                    className=" font-[Poppins] font-semibold   text-[16px] text-white flex gap-1.5 w-[189px] h-[41px] items-center border-2  rounded-lg justify-center bg-[linear-gradient(to_right,#FF9900,#F2CB00)]"
                  >
                    Build a team
                    <GoArrowRight
                      className={
                        " w-[17.999984741210938px] h-[15.185184478759766px]"
                      }
                    />
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-[#0000006e]  flex justify-center items-center z-50 px-5"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-xl w-[800px] h-fit shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className=" max-sm:text-[30px] max-md:text-[35px]  text-[40px] font-poppins text-[#16205F] font-semibold mb-2">
                Build a team
              </h2>
              <p className="max-sm:text-[13px] max-md:text-[14px]  text-[15px] font-poppins text-[#16205F] font-normal mb-2">
                We specialize in helping you build a team.
              </p>
            </div>
            <div className="grid rounded-tl-lg rounded-bl-lg  rounded-tr-lg rounded-br-lg grid-cols-2 mt-9 shadow-[0px_0px_10px_1px] shadow-[#0000001F] mb-[37px] max-w-[455px] w-full">
              <div
                onClick={() => changeColor(1)}
                className={`rounded-tl-lg rounded-bl-lg flex-1 h-[54px] ${
                  bgColor === 1 ? "bg-[#F99600]" : "bg-[FFFFFF]"
                }  flex items-center justify-center max-sm:text-[13px]  text-[14px] font-poppins ${
                  bgColor === 1 ? "text-[#FFFFFF]" : "text-[#8A8A8A]"
                }  font-semibold`}
              >
                Option 1
              </div>
              <div
                onClick={() => changeColor(2)}
                className={`rounded-tr-lg rounded-br-lg flex-1 max-sm:text-[13px]  text-[14px] w-full h-[54px]  ${
                  bgColor === 2 ? "bg-[#F99600]" : "bg-[FFFFFF]"
                } flex items-center justify-center text-[14px]  font-poppins  ${
                  bgColor === 2 ? "text-[#FFFFFF]" : "text-[#8A8A8A]"
                } font-semibold`}
              >
                Option 2
              </div>
            </div>

            <div>
              {bgColor === 1 ? (
                <form action="">
                  <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-poppins font-semibold max-sm:text-[13px] max-md:text-[14px]  text-[15px] text-[#16205F] mb-2.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company"
                        className="outline-0 font-poppins font-semibold  max-sm:text-[13px] text-[14px]  text-[#00000080] w-full  h-[60px] border border-[#C5E0FF] pl-5 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-poppins font-semibold max-sm:text-[13px] max-md:text-[14px]  text-[15px] text-[#16205F] mb-2.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="outline-0 font-poppins font-semibold max-sm:text-[13px] text-[14px]  text-[#00000080] w-full h-[60px] border border-[#C5E0FF] pl-5 rounded-lg"
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <form action="">
                  <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-poppins font-semibold max-sm:text-[13px] max-md:text-[14px]  text-[15px] text-[#16205F] mb-2.5"
                      >
                        label
                      </label>
                      <input
                        type="text"
                        placeholder="placeholder"
                        className="outline-0 font-poppins font-semibold  max-sm:text-[13px] text-[14px]  text-[#00000080] w-full  h-[60px] border border-[#C5E0FF] pl-5 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-poppins font-semibold max-sm:text-[13px] max-md:text-[14px] text-[15px]  text-[#16205F] mb-2.5"
                      >
                        label
                      </label>
                      <input
                        type="text"
                        placeholder="placeholder"
                        className="outline-0 font-poppins font-semibold max-sm:text-[13px] text-[14px]  text-[#00000080] w-full h-[60px] border border-[#C5E0FF] pl-5 rounded-lg"
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
