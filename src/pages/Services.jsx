import React from "react";
import SmallCommonBanner from "../components/SmallCommonBanner";
import smallbanner1 from "../assets/images/smallbanner1.webp";
import CommonHead from "../components/CommonHead";
import LeftIconRightheadwithDescription from "../components/LeftIconRightheadwithDescription";
import link from "../assets/images/link.webp";
import management from "../assets/images/management.webp";
import outsourcing from "../assets/images/outsourcing.webp";
import internet from "../assets/images/internet.webp";
import ContactForm from "../components/ContactForm";

const Services = () => {
  const bannerDetails = [
    {
      id: 1,
      title: "Our Services",
      img: smallbanner1,
      description:
        "We specialize in helping you build a team of expert developers.",
    },
  ];

  const commonHeadDetails = [
    {
      id: 1,
      heading: "Hire Permanent and Remote Developers",
      description:
        "From full-time remote engineering teams to hourly contractors, work with remote devs as needed",
    },
  ];

  const details = [
    {
      id: 1,
      title: "Dedicated Teams",
      description:
        "Building an extended team with Courtney is just like opening your own remote development center, but without the hassle.",
      img: link,
    },
    {
      id: 2,
      title: "Staff Augmentation",
      description:
        "IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.",
      img: management,
    },
    {
      id: 3,
      title: "Software Outsourcing",
      description:
        "Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.",
      img: outsourcing,
    },
    {
      id: 4,
      title: "Remote Office",
      description:
        "Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.",
      img: internet,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full ">
        <SmallCommonBanner bannerDetails={bannerDetails} />
      </div>
      <div className=" w-full py-[100px] max-[640px]:py-10 px-5">
        <div className="max-w-7xl mx-auto w-full">
          <CommonHead commonHeadDetails={commonHeadDetails} />
          <div className="grid grid-cols-2 gap-[45px] max-[748px]:grid-cols-1  ">
            {details.map((detail) => (
              <LeftIconRightheadwithDescription
                detail={detail}
                key={detail.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full pb-[100px] max-[640px]:pb-10 px-5">
        <div className="max-w-7xl mx-auto w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Services;
