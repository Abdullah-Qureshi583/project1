import Image from "next/image";
import { LuLaptop2 } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";

import { CiGlobe } from "react-icons/ci";

import React from "react";
import FeatureCards from "./featureSections/FeatureCards";
import SupportedRetailers from "./featureSections/SupportedRetailers";


const Features = () => {


  

  return (
    <div className="  pt-[106.26px]">
      {/* grid */}
      <div className=" grid grid-cols-2 max-w-[1132px] pl-[18px]">
        {/* 1st section */}
        <div className="flex relative flex-col justify-center gap-y-4 p-1 pb-6 pr-3 ">
          {/* 1st row */}
          <div className="flex gap-x-12  z-10 items-center">
            {/* card */}
            <div className="bg-[#2C2E36] rounded-[10.69px] w-[356px] h-[85px] flex justify-between items-center  p-3">
              <Image
                src="/featureCardImage.png"
                width={57.04}
                height={57.04}
                alt="chat image"
                className="rounded-full"
              />
              {/* middle lines*/}
              <div className="flex flex-col gap-y-2">
                <span className="w-[124.77px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
                <span className="w-[92.69px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
              </div>
              {/* end */}
              <div className="bg-lightgreen w-[89.12px] h-[42.78px] rounded-[7.13px] flex justify-center items-center">
                <span className="w-[42.78px] h-[10.69px] bg-white rounded-full "></span>
              </div>
            </div>
            {/* globe icon */}
            <div className="bg-lightgreen  aspect-square size-[57.04px] rounded-full flex justify-center items-center">
              <CiGlobe color="white" className="size-[28.61px] " />
            </div>
          </div>

          {/* shadow */}
          <div className="absolute h-[70%] bottom-0 w-[50%] ml-20 rounded-lg bg-gradient-to-tr from-[#2d303ac4] to-black "></div>

          {/* 2nd row */}
          {/* card */}
          <div className="bg-[#2C2E36] z-10  ml-24 rounded-[10.69px] w-[356px] h-[85px] flex justify-between items-center  p-3">
            <Image
              src="/featureCardImage.png"
              width={57.04}
              height={57.04}
              alt="chat image"
              className="rounded-full"
            />
            {/* middle lines*/}
            <div className="flex flex-col gap-y-2">
              <span className="w-[124.77px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
              <span className="w-[92.69px] h-[10.69px] bg-[#4E5A85]/20 rounded-[44.56px]"></span>
            </div>
            {/* end */}
            <div className="bg-[#4E5A85]/50 w-[89.12px] h-[42.78px] rounded-[7.13px] flex justify-center items-center">
              <span className="w-[42.78px] h-[10.69px] bg-white rounded-full "></span>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="flex pl-3 flex-col ">
          <p className="text-darkgray font-semibold leading-[23.21px] tracking-tighter text-[20.89px]">
            AMAZING FEATURES
          </p>
          <h3 className="text-[52.76px] tracking-tighter leading-[58.62px] font-semibold text-darkgreen">
            Worldwide <span className="text-white">Support</span>
          </h3>
          <p className="text-lightgray text-[19.25px] leading-[30.81px]">
            We Support all SNKRS regions{" "}
            <span className="text-darkgreen">around the globe!</span>
          </p>
        </div>
      </div>

      {/* features card */}
      <FeatureCards />

      {/* Supported Retailers */}
      <SupportedRetailers />
    </div>
  );
};

export default Features;
