"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LeftSection from "./featureSections/LeftSection";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("green");
  return (
    <div className=" relative w-full pt-[226px] ">
      {/* 2 sections grid */}
      <div className="grid w-full   md:grid-cols-2">
        {/* left section */}
        <LeftSection activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* right section */}
        <div className="flex items-center">
          <div className=" h-[373px] w-full  flex justify-center items-center">
            {/* image or video here */}
            {activeTab == "blue" ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s"
                className="w-full h-full"
                alt="hero section image"
              />
            ) : activeTab == "red" ? (
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full"
                alt="hero section image"
              />
            ) : (
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full"
                alt="hero section image"
              />
            )}

            {/* <Image
              src="/heroImage.png"
              width={80}
              height={56}
              alt="Picture of the author"
            /> */}
          </div>
        </div>
      </div>

      {/* checkout features */}
      <Link
        href="#"
        className="pt-[147px] flex flex-col gap-y-3   items-center"
      >
        <p className="text-[19.33px] text-darkgray font-semibold">
          Check our <span className="text-lightgray">features</span>{" "}
        </p>
        <Image
          src="/heroFeatures.png"
          width={23.68}
          height={18.61}
          alt="features"
        />
      </Link>
    </div>
  );
};

export default Hero;
