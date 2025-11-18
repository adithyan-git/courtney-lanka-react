import React from "react";

const CommonHead = ({ commonHeadDetails }) => {
  return (
    <div className="w-full mb-10 sm:mb-20">
      {commonHeadDetails.map((commonHeadDetail) => (
        <div key={commonHeadDetail.id}>
          <h5
            data-aos="fade-up"
            className="font-[Poppins] font-semibold max-[640px]:text-[30px] max-[448px]:text-[25px] max-[640px]:leading-8  text-[40px] 2xl:text-[46px]   2xl:leading-[58px] leading-[45px] text-[#16205F] max-w-[609px] w-full mb-[21px]"
          >
            {commonHeadDetail.heading}
          </h5>
          <p
            data-aos="fade-up"
            className="max-[640px]:text-[14px] max-[448px]:text-[13px] font-[Poppins] font-normal 2xl:text-[18px] text-[15px]   text-[#16205F] max-w-[486px] w-full"
          >
            {commonHeadDetail.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommonHead;
