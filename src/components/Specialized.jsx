import icon9 from "../assets/images/icon9.webp";
import angularicon from "../assets/images/angularicon.webp";

import chip from "../assets/images/chip.webp";
import security from "../assets/images/security.webp";
import softwareapplication from "../assets/images/software-application.webp";
import technicalsupport from "../assets/images/technicalsupport.webp";
import datascience from "../assets/images/datascience.webp";
import phone from "../assets/images/phone.webp";
import uiux from "../assets/images/uiux.webp";
import PHP from "../assets/images/PHP.webp";
import scrum from "../assets/images/scrum.webp";
import networking from "../assets/images/networking.webp";
import quality from "../assets/images/quality.webp";
import wordpress from "../assets/images/wordpresslogo.webp";
import analysis from "../assets/images/analysis.webp";
import teamleader from "../assets/images/teamleader.webp";
import idea from "../assets/images/idea.webp";
import padlock from "../assets/images/padlock.webp";
import gologo from "../assets/images/GoLogo.webp";
import database from "../assets/images/database.webp";

const Specialized = () => {
  var staffs = [
    {
      id: 1,
      title: "Frontend Engineers",
      img: icon9,
    },
    {
      id: 2,
      title: "Angular Developers",
      img: angularicon,
    },
    {
      id: 3,
      title: "AI and ML Engineers Deep Lerning/Machine Vision/NLP",
      img: chip,
    },
    {
      id: 4,
      title: "Application Security Engineers",
      img: security,
    },
    {
      id: 5,
      title: "Fullstack Engineers",
      img: softwareapplication,
    },
    {
      id: 6,
      title: "DevOps + DevSecOps Engineers",
      img: technicalsupport,
    },
    {
      id: 7,
      title: "Data Scientist / Data Engineers",
      img: datascience,
    },
    {
      id: 8,
      title: "IOS and Android Developers",
      img: phone,
    },
    {
      id: 9,
      title: "UI/UX Engineers",
      img: uiux,
    },
    {
      id: 10,
      title: "PHP Developers",
      img: PHP,
    },
    {
      id: 11,
      title: "Project Managers",
      img: scrum,
    },
    {
      id: 12,
      title: "Solution Architects",
      img: networking,
    },
    {
      id: 13,
      title: "QA Engineers",
      img: quality,
    },
    {
      id: 14,
      title: "Wordpress CMS Developers",
      img: wordpress,
    },
    {
      id: 15,
      title: "Business Analyst",
      img: analysis,
    },
    {
      id: 16,
      title: "Tech Leads / Team Leads",
      img: teamleader,
    },
    {
      id: 17,
      title: "Product Designer",
      img: idea,
    },
    {
      id: 18,
      title: "FMobile App Developers",
      img: phone,
    },
    {
      id: 19,
      title: "Information Scurity Engineers",
      img: padlock,
    },
    {
      id: 20,
      title: "Golang Dev",
      img: gologo,
    },
    {
      id: 21,
      title: "Database admin",
      img: database,
    },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] py-20 px-5 max-[640px]:py-10">
      <div className="max-w-7xl w-full mx-auto">
        <div>
          <span
            data-aos="fade-up"
            className="font-[Poppins] max-[640px]:text-[20px]  max-[448px]:text-[17px] font-semibold text-[22px] text-[#16205F]"
          >
            Specialized
          </span>
          <h5
            data-aos="fade-up"
            className="font-[Poppins] max-[640px]:text-[30px] max-[448px]:text-[25px] max-[448px]:leading-[35px] font-semibold 2xl:text-[46px] text-[40px] text-[#16205F] max-w-[485px] w-full leading-[50px] mb-[21px] mt-[15px] max-[640px]:mt-1.5"
          >
            Specialized Staff We Provide
          </h5>
        </div>
        <div className="grid grid-cols-4  max-[529px]:grid-cols-1 gap-[26px] max-[748px]:grid-cols-2 max-[957px]:grid-cols-3">
          {staffs.map((staff) => (
            <div
              data-aos="zoom-in"
              className=" w-full h-[93px]  flex justify-between gap-2.5  rounded-xl shadow-[0px_0px_16px_0px] shadow-[#0000000F]  hover:shadow-[0px_0px_6px_2px] hover:shadow-[#e2e0e0] cursor-pointer bg-[#FFFFFF]"
              key={staff.id}
            >
              <div className="w-[13px] h-full bg-[#FFF856] rounded-tl-xl rounded-bl-xl"></div>
              <div className="flex items-center gap-5 w-full pr-2.5 py-2">
                <img src={staff.img} alt="img" className="w-10 h-10 " />
                <p className="font-[Poppins] max-[448px]:text-[13px] font-semibold max-[640px]:text-[14px]  text-[15px]  2xl:text-[18px] text-[#16205F] line-clamp-2">
                  {staff.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialized;
