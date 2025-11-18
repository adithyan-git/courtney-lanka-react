import React from "react";
import message from "../assets/images/message.webp";
import icon4 from "../assets/images/icon4.webp";
import handshake from "../assets/images/handshake.webp";
import medal from "../assets/images/medal.webp";

const EasyProcess = () => {
  const easyProcess = [
    {
      id: 1,
      title: " YOU ASK",
      img: message,
    },
    {
      id: 2,
      title: "WE PROCEED",
      img: icon4,
    },
    {
      id: 3,
      title: " Negotiate",
      img: handshake,
    },
    {
      id: 4,
      title: "YOU GET",
      img: medal,
    },
  ];
  return (
    <div className="w-full  bg-[linear-gradient(to_right,#FF9900,#F2CB00)] py-20 px-5 max-[640px]:py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col items-center">
          <h6
            data-aos="fade-up"
            className="font-[Poppins] font-semibold max-[448px]:text-[20px] text-[22px] text-[#FFFFFF] text-center"
          >
            How to Start
          </h6>
          <h5
            data-aos="fade-up"
            className="max-[640px]:text-[30px] max-[448px]:text-[25px] max-[640px]:mt-0.5 font-[Poppins] font-semibold text-[40px] 2xl:text-[46px] text-[#16205F] text-center mt-1.5"
          >
            Easy Process
          </h5>
          <p
            data-aos="fade-up"
            className="max-[640px]:text-[14px] max-[448px]:text-[13px] 2xl:max-w-[456px] max-w-[453px] font-[Poppins] font-normal text-[15px] 2xl:text-[18px]  text-[#16205F] text-center mt-1.5"
          >
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-12  max-[529px]:grid-cols-1 max-[957px]:grid-cols-2 gap-10">
          {easyProcess.map((process) => (
            <div
              className="flex flex-col items-center justify-between gap-2"
              key={process.id}
            >
              <div className="overflow-hidden">
                <img
                  src={process.img}
                  alt="img"
                  className="w-[90px] h-[90px] 2xl:w-[138.00003051757812px] 2xl:h-[138.02777099609375px] hover:rotate-y-360 hover:duration-3000"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <h6
                  data-aos="zoom-in"
                  className="font-[Poppins] max-[448px]:text-[25px] 2xl:text-[46px] max-[640px]:text-[30px]  font-semibold text-[35px] text-[#16205F]"
                >
                  0{process.id}
                </h6>
                <p
                  data-aos="zoom-in"
                  className="font-[Poppins] font-semibold max-[448px]:text-[17px] 2xl:text-[28px] max-[640px]:text-[20px] text-[23px] text-[#16205F]"
                >
                  {process.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EasyProcess;
