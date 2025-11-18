import React from "react";

const LeftIconRightNumberTitlewithDescription = ({ details }) => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-14 h-14  max-sm:h-fit  bg-[#FFF856] rounded-xl p-[5px]">
          <img src={details.img} alt="img" className="w-auto h-auto" />
        </div>
        <div>
          <h6 className="font-[Poppins] font-semibold max-[448px]:text-[17px] max-[640px]:text-[20px]   text-[23px] text-[#16205F] leading-8 max-w-[324px] w-full mb-3">
            <span>{details.number}.</span> {details.title}
          </h6>
          <p
            className="font-[Poppins] font-normal max-[640px]:text-[14px] max-[448px]:text-[13px] 
               text-[15px] max-w-[324px] w-full line-clamp-2"
          >
            {details.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftIconRightNumberTitlewithDescription;
