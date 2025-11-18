import React from "react";
import icon5 from "../assets/images/icon5.webp";
import icon6 from "../assets/images/icon6.webp";
import icon7 from "../assets/images/icon7.webp";
import icon8 from "../assets/images/icon8.webp";

const Expertise = () => {
  const expertise = [
    {
      id: 1,
      title: "Dedicated Teams",
      description: "Find your next team member",
      img: icon5,
    },
    {
      id: 2,
      title: "Staff Augmentation",
      description: "Build a distributed development team",
      img: icon6,
    },
    {
      id: 3,
      title: "Software Outsourcing",
      description: "End-to-End Software Development Outsourcing Solutions",
      img: icon7,
    },
    {
      id: 4,
      title: "Remote Office",
      description:
        "Open your own remote development center and grow your business",
      img: icon8,
    },
  ];

  return (
    <div className="w-full bg-white  py-20 px-5 max-[640px]:py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div>
          <span
            data-aos="fade-up"
            className="font-[Poppins] font-semibold max-[448px]:text-[17px] max-[640px]:text-[20px] text-[22px] text-[#16205F]"
          >
            Expertise
          </span>
          <h5
            data-aos="fade-up"
            className="max-[640px]:text-[30px] max-[448px]:text-[25px] max-[640px]:leading-10 font-[Poppins] font-semibold  text-[40px] text-[#16205F] max-w-[741px] w-full leading-[45px] mb-2.5 mt-2.5"
          >
            Hire Permanent and Remote Developers
          </h5>
          <p
            data-aos="fade-up"
            className="max-[640px]:text-[14px] max-[448px]:text-[13px] font-[Poppins] font-normal  text-[15px]  text-[#16205F] max-w-[486px] w-full "
          >
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 max-[640px]:mt-10 mt-[82px] max-[748px]:grid-cols-1 max-[1166px]:grid-cols-2">
          {expertise.map((detail) => (
            <div data-aos="zoom-in" className="" key={detail.id}>
              <div className="w-14 h-14   bg-[#FFF856] rounded-xl p-[5px] mb-4">
                <img src={detail.img} alt="img" className="w-full h-full" />
              </div>
              <div>
                <h5
                  data-aos="fade-up"
                  className=" font-[Poppins]  max-[448px]:text-[17px] max-[640px]:text-[20px] font-semibold  text-[23px] text-[#16205F]  w-full"
                >
                  {detail.title}
                </h5>
                <p
                  data-aos="fade-up"
                  className="font-[Poppins] max-[640px]:text-[14px] max-[448px]:text-[13px] font-normal  text-[15px]  text-[#16205F]    w-full line-clamp-2"
                >
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
