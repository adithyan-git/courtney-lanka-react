import React from "react";
import Banner from "../components/Banner";
import LeftIconRightheadwithDescription from "../components/LeftIconRightheadwithDescription";
import Expertise from "../components/Expertise";
import Specialized from "../components/Specialized";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import EasyProcess from "../components/EasyProcess";
import icon1 from "../assets/images/icon1.webp";
import icon2 from "../assets/images/icon2.webp";
import icon3 from "../assets/images/icon3.webp";
import SpecializedTechnologies from "../components/SpecializedTechnologies";

const details = [
  {
    id: 1,
    title: "Architect your Solution",
    description:
      "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business.We design a strategic roadmap to guide your result-oriented goals.",
    img: icon1,
  },
  {
    id: 2,
    title: "Engineer your Solution",
    description:
      "We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.",
    img: icon2,
  },
  {
    id: 3,
    title: "ReEngineer your Business Process",
    description:
      "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.",
    img: icon3,
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <div className="py-20 px-5 max-[640px]:py-10 ">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-3 gap-[45px] max-[748px]:grid-cols-1  max-[957px]:grid-cols-2">
            {details.map((detail) => (
              <LeftIconRightheadwithDescription
                detail={detail}
                key={detail.id}
              />
            ))}
          </div>
        </div>
      </div>

      <EasyProcess />
      <Expertise />
      <Specialized />
      <SpecializedTechnologies />
      <Clients />
      <div className="w-full py-[100px] ">
        <div className="max-w-7xl w-full mx-auto">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Home;
