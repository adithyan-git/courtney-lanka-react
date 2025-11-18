const SmallCommonBanner = ({ bannerDetails }) => {
  return (
    <div>
      {bannerDetails.map((bannerDetail) => (
        <div
          className="pt-[113px]  w-full h-[60dvh]  bg-no-repeat bg-cover bg-center relative 
             after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
             after:bg-[#131313] after:opacity-20"
          style={{ backgroundImage: `url(${bannerDetail.img})` }}
          key={bannerDetail.id}
        >
          <div className="z-10   w-full flex flex-col items-center px-5 h-fit absolute  top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <h1
              data-aos="fade-up"
              className="font-[Poppins] max-[493px]:text-[35px] max-[800px]:text-[40px] font-semibold text-[64px] text-[#FFFFFF]   text-center"
            >
              {bannerDetail.title}
            </h1>
            <p
              data-aos="fade-up"
              className="font-[Poppins] font-normal max-[493px]:text-[13px] max-[800px]:text-[15px] text-[18px] text-[#FFFFFF] max-w-[455px] w-full text-center"
            >
              {bannerDetail.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCommonBanner;
