"use client";
import React, { useState } from "react";
import ThemeTabs from "../ThemeTabs";

const LeftSection = ({activeTab, setActiveTab}) => {
 
  return (
    <div className="     ">
      {/* Theme tabs */}
      <ThemeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
     

      {/* text */}
      
      <div className="mt-[41.48px]  md:w-[310px] xl:w-[459px] ">
        <h1 className=" text-white font-[600] leading-[69.92px] text-[41px] md:text-[51px] xl:text-[61.18px]">
          Chechout animation,{" "}
          <span className="text-darkgreen ">{activeTab == "green" ? "GreenColor" : activeTab ==="blue"? "BlueColor" : "RedColor"}</span>{" "}
        </h1>
        <p className="mt-[33.23px]  text-justify tracking-tighter text-darkgray text-[16px] md:text-[18px] xl:text-[20px] leading-[30px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ea
          aliquam sit officia perferendis ex ad provident unde illum sapiente
          quaerat, eaque doloremque et odio sunt, nisi dolorum.
        </p>
      </div>

      {/* button */}
      <button className=" text-white mt-[59px] w-[211px] h-[60px]  rounded-[10px]   bg-zinc-900 hover:bg-zinc-800">
        Purchase
      </button>
    </div>
  );
};

export default LeftSection;
