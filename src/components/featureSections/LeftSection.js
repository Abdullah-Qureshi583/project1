"use client";
import React, { useState } from "react";

const LeftSection = () => {
  const [activeTab, setActiveTab] = useState("secondOne");

  const tabs = [
    { id: "firstOne", text: "One" },
    { id: "secondOne", text: "One" },
    { id: "thirdOne", text: "One" },
  ];
  return (
    <div className="     ">
      {/* there one tabs */}
      <div className=" flex rounded-lg gap-x-1 text-[10px] p-[7.07px]  bg-[#15171D] w-fit">
        {tabs?.map((tab) => (
          <div
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`cursor-pointer rounded-[4.86px] w-[90px] py-[6.19px] px-[36.25px] ${
              activeTab === tab.id ? "bg-[#58C182]" : ""
            } `}
          >
            {tab.text}
          </div>
        ))}
      </div>

      {/* text */}
      <div className="mt-10 w-[459px] ">
        <h1 className="font-[600] leading-[69.92px] text-[61.18px]">
          Chechout animation,{" "}
          <span className="text-[#5bbe82]">simplified.</span>{" "}
        </h1>
        <p className="mt-6 text-justify tracking-tighter text-[#fff]/30 text-[20px] leading-[30px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ea
          aliquam sit officia perferendis ex ad provident unde illum sapiente
          quaerat, eaque doloremque et odio sunt, nisi dolorum.
        </p>
      </div>

      {/* button */}
      <button className=" w-[211px] h-[60px] text-[#fff/4] rounded-[10px] mt-12  bg-zinc-900 hover:bg-zinc-800">
        Purchase
      </button>
    </div>
  );
};

export default LeftSection;
