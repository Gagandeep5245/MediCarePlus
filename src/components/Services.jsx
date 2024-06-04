import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={30} className="text-backgroundColor" />;
  const icon2 = (
    <MdHealthAndSafety size={30} className="text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={30} className="text-backgroundColor" />;
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
          <p className="mt-2 text-center lg:text-start">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab test" />
        <ServicesCard icon={icon2} title="Health check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;
