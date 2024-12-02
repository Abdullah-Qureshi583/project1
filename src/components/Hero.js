import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftSection from "./featureSections/LeftSection";

const Hero = () => {
  return (
    <div className=" relative w-full pt-32 ">
      {/* 2 sections grid */}
      <div className="grid w-full  grid-cols-2">
        {/* left section */}
        <LeftSection />

        {/* right section */}
        <div className="flex items-center">
          <div className=" h-[373px] w-full  flex justify-center items-center">
            {/* image or video here */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
              className="w-full h-full"
              alt="hero section image"
            />
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
      <Link href="#" className="flex flex-col gap-y-3 items-center">
        <p className="text-[19.33px] text-[#fff]/30 font-semibold">
          Check our <span className="text-[#fff]/70">features</span>{" "}
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
