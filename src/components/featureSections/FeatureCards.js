import React from "react";
import { CiGlobe } from "react-icons/ci";
import { LuLaptop2 } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";

const FeatureCards = () => {

  const cards = [
    {
      icon: <CiGlobe color="" className="size-[36px] text-darkgreen" />,
      title: "Worldwide Support",
      desc: "Receive access to our Discord server where you will receive around the clock support on how to fully utilize Xenon AIO. In addition, you will have access to all inclusive release info at your fingertips!",
    },
    {
      icon: <LuLaptop2 color="" className="size-[36px] text-darkgreen" />,
      title: "Lightning fast",
      desc: "Set up, and sit back, through our full checkout automation you won’t need to lift a finger, as Xenon utilizes efficient algorithms to help you successfully checkout with ease.",
    },
    {
      icon: <MdOutlineTimer color="" className="size-[36px] text-darkgreen " />,
      title: "Timer",
      desc: "With our helpful timer feature, you can setup the bot to run while you sleep. Now you no longer have to wake up or be at home during drops!",
    },
  ];


  return (
    <div className=" pt-[211px] flex  flex-col md:flex-row justify-between  gap-8">
      {/* card */}
      {cards?.map((card) => (
        <div
          key={card.title}
          className=" bg-[#111216] p-[30px] md:p-[16px] xl:p-[30px] pb-[44px] w-[374px]  rounded-xl flex flex-col gap-y-5"
        >
          {card.icon}
          <h4 className="text-[22.44px] md:text-[17px] xl:text-[22.44px] font-[700] text-white  leading-[29.92px] ">
            {card.title}
          </h4>
          <p className="text-darkgray text-[14px] md:text-[11px] xl:text-[14px]">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
