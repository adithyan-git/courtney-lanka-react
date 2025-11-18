import React from "react";

const LeftIconRightheadwithDescription = ({ detail }) => {
  return (
    <div className=" gap-5" key={detail.id} data-aos="zoom-in">
      <div className="mb-5">
        <div className="w-14 h-14 2xl:w-20 2xl:h-20 max-sm:h-fit  bg-[#FFF856] rounded-xl p-[5px]">
          <img src={detail.img} alt="img" className="w-auto h-auto" />
        </div>
      </div>
      <div className="">
        <h6 className="max-[448px]:text-[17px] max-w-[261px] max-[640px]:leading-6 max-[640px]:text-[20px] mb-2.5   w-full font-[Poppins] font-semibold   text-[23px] text-[#16205F] leading-8">
          {detail.title}
        </h6>
        <p
          data-aos="fade-up"
          className="line-clamp-4 max-[640px]:text-[14px] max-[448px]:text-[13px]  w-full font-[Poppins] font-normal 
               text-[15px]  text-[#16205F] leading-[22px]"
        >
          {detail.description}
        </p>
      </div>
    </div>
  );
};

export default LeftIconRightheadwithDescription;
