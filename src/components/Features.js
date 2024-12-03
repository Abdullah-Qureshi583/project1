import Image from "next/image";
import { LuLaptop2 } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";

import { CiGlobe } from "react-icons/ci";

import React from "react";
import FeatureCards from "./featureSections/FeatureCards";
import SupportedRetailers from "./featureSections/SupportedRetailers";
import AmazingFeaures from "./featureSections/AmazingFeaures";

const Features = () => {
  return (
    <div className="  pt-[106.26px]">
      {/* grid */}
      <div className=" grid grid-cols-1 space-y-10  md:grid-cols-2 max-w-[1132px] pl-[18px]">
        {/* 1st section */}
        <div className="hidden   md:flex  relative flex-col justify-center gap-y-4 p-1 pb-6 pr-3 ">
          {/* 1st row */}
          <div className="flex md:gap-x-4 xl:gap-x-12  z-10 items-center">
            {/* card */}
            <div className="bg-[#2C2E36]  rounded-[10.69px] w-[356px] h flex justify-between items-center  p-3">
              <Image
                src="/featureCardImage.png"
                width={57.04}
                height={57.04}
                alt="chat image"
                className="rounded-full"
              />
              {/* middle lines*/}
              <div className="flex flex-col gap-y-2">
                <span className="md:w-[94.77px] xl:w-[124.77px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
                <span className="md:w-[62.69px] xl:w-[92.69px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
              </div>
              {/* end */}
              <div className="bg-lightgreen md:w-[52px] xl:w-[89.12px] md:h-[36.78px] xl:h-[42.78px] rounded-[7.13px] flex justify-center items-center">
                <span className="md:w-[28.78px] xl:w-[42.78px] h-[10.69px] bg-white rounded-full "></span>
              </div>
            </div>
            {/* globe icon */}
            <div className="bg-lightgreen  aspect-square md:size-[47.04px] xl:size-[57.04px] rounded-full flex justify-center items-center">
              <CiGlobe color="white" className="size-[28.61px] " />
            </div>
          </div>

          {/* shadow */}
          <div className="absolute h-[70%] bottom-0 w-[70%] md:ml-10 xl:ml-20 rounded-lg bg-gradient-to-tr from-[#2d303ac4] to-black "></div>

          {/* 2nd row */}
          {/* card */}
          <div className="bg-[#2C2E36] z-10 md:ml-12  xl:ml-24 rounded-[10.69px] max-w-[356px] h-[85px] flex justify-between items-center  p-3">
            <Image
              src="/featureCardImage.png"
              width={57.04}
              height={57.04}
              alt="chat image"
              className="rounded-full"
            />
            {/* middle lines*/}
            <div className="flex flex-col gap-y-2">
              <span className="md:w-[94.77px] xl:w-[124.77px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
              <span className="md:w-[62.69px] xl:w-[92.69px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
            </div>

            {/* end */}

            <div className="bg-[#4E5A85]/50 md:w-[52px] xl:w-[89.12px] md:h-[36.78px] xl:h-[42.78px] rounded-[7.13px] flex justify-center items-center">
              <span className="md:w-[28.78px] xl:w-[42.78px] h-[10.69px] bg-white rounded-full "></span>
            </div>
          </div>
        </div>

        {/* 2nd section */}
        <AmazingFeaures
          whiteTitle="Worldwide"
          greenTitle="Support"
          grayDescription="We support all SNKRS regions"
          greenDescription="around the globe!"
        />
      </div>

      {/* features card */}
      <FeatureCards />

      {/* Supported Retailers */}
      <SupportedRetailers />
    </div>
  );
};

export default Features;
