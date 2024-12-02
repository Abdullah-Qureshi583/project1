import Image from "next/image";
import { LuLaptop2 } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";

import { CiGlobe } from "react-icons/ci";

import React from "react";

const Features = () => {
  const cards = [
    {
      icon: <CiGlobe color="" className="size-[36px] text-[#58C182]" />,
      title: "Worldwide Support",
      desc: "Receive access to our Discord server where you will receive around the clock support on how to fully utilize Xenon AIO. In addition, you will have access to all inclusive release info at your fingertips!",
    },
    {
      icon: <LuLaptop2 color="" className="size-[36px] text-[#58C182]" />,
      title: "Lightning fast",
      desc: "Set up, and sit back, through our full checkout automation you won’t need to lift a finger, as Xenon utilizes efficient algorithms to help you successfully checkout with ease.",
    },
    {
      icon: <MdOutlineTimer color="" className="size-[36px] text-[#58C182]" />,
      title: "Timer",
      desc: "With our helpful timer feature, you can setup the bot to run while you sleep. Now you no longer have to wake up or be at home during drops!",
    },
  ];

  const FeatureBagCard = () => {
    return (
      <div className="rounded-md flex justify-center items-center size-[81px] bg-[#15171D]">
        <svg
          width="33"
          height="37.52"
          viewBox="0 0 34 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9677 38.4152L33.248 35.9709C33.248 35.9709 29.179 8.42962 29.1455 8.24724C29.1119 8.06696 28.9652 7.94537 28.8143 7.94537C28.6633 7.94537 25.7977 7.73365 25.7977 7.73365C25.7977 7.73365 23.8083 5.74425 23.5672 5.53252C23.5106 5.47173 23.4477 5.44238 23.3869 5.41094L21.9677 38.4152ZM22.9027 5.35224C22.8691 5.35224 22.8125 5.38159 22.7832 5.38159C22.7496 5.38159 22.3283 5.50527 21.6658 5.71281C20.9992 3.7863 19.8232 2.00653 17.7437 2.00653H17.5634C16.9575 1.24977 16.2364 0.918549 15.6012 0.918549C10.7462 0.918549 8.41928 6.98107 7.69814 10.0564C5.82824 10.6328 4.47402 11.0542 4.3168 11.115C3.26026 11.4462 3.23301 11.4756 3.11352 12.4734C2.99403 13.1945 0.247864 34.4616 0.247864 34.4616L21.4562 38.4425L22.9027 5.35224ZM17.3789 6.82804V7.04187C16.2071 7.40453 14.9094 7.79654 13.6412 8.18855C14.3665 5.41513 15.7207 4.05463 16.8967 3.54103C17.2028 4.32715 17.3789 5.38159 17.3789 6.82804ZM15.4503 2.21616C15.6599 2.21616 15.8717 2.27486 16.0855 2.42999C14.551 3.15112 12.8593 4.99168 12.1633 8.67279C11.1811 8.98696 10.1951 9.28885 9.20539 9.5784C10.0209 6.77144 11.983 2.21616 15.4503 2.21616ZM16.293 18.5925C16.293 18.5925 15.0268 17.9322 13.5217 17.9322C11.2577 17.9322 11.1675 19.3493 11.1675 19.712C11.1675 21.6427 16.2364 22.3952 16.2364 26.9505C16.2364 30.5394 13.9724 32.8327 10.8971 32.8327C7.21599 32.8327 5.34609 30.5394 5.34609 30.5394L6.34183 27.2817C6.34183 27.2817 8.27463 28.942 9.89927 28.942C10.0944 28.9499 10.2891 28.9184 10.4718 28.8493C10.6545 28.7802 10.8213 28.675 10.9624 28.54C11.1035 28.405 11.2159 28.2429 11.2929 28.0634C11.37 27.884 11.41 27.6908 11.4107 27.4955C11.4107 24.9611 7.24744 24.8374 7.24744 20.6784C7.24744 17.1796 9.75253 13.771 14.8507 13.771C16.8129 13.771 17.7751 14.3412 17.7751 14.3412L16.293 18.5925ZM18.2258 3.3293C19.3117 3.45508 20.0077 4.68771 20.4563 6.07756C19.9154 6.25994 19.3096 6.44023 18.6472 6.64986V6.25785C18.6472 5.08182 18.4962 4.11542 18.2258 3.3293Z"
            fill="#58C182"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="  pt-32">
      {/* grid */}
      <div className=" grid grid-cols-2 pr-12">
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
              <div className="bg-[#58C182] w-[89.12px] h-[42.78px] rounded-[7.13px] flex justify-center items-center">
                <span className="w-[42.78px] h-[10.69px] bg-white rounded-full "></span>
              </div>
            </div>
            {/* globe icon */}
            <div className="bg-[#58C182]  aspect-square size-[57.04px] rounded-full flex justify-center items-center">
              <CiGlobe className="size-[28.61px] " />
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
          <p className="text-[#2E3038] font-semibold leading-[23.21px] tracking-tighter text-[20.89px]">
            AMAZING FEATURES
          </p>
          <h3 className="text-[52.76px] tracking-tighter leading-[58.62px] font-semibold text-[#5bbe82]">
            Worldwide <span className="text-white">Support</span>
          </h3>
          <p className="text-[#61646e] text-[19.25px] leading-[30.81px]">
            We Support all SNKRS regions{" "}
            <span className="text-[#5bbe82]">around the globe!</span>
          </p>
        </div>
      </div>

      {/* features card */}
      <div className="flex pt-48 flex-col md:flex-row justify-between  gap-8">
        {/* card */}
        {cards?.map((card) => (
          <div
            key={card.title}
            className=" bg-[#111216] p-[30px] pb-[44px] w-[374px]  rounded-xl flex flex-col gap-y-5"
          >
            {card.icon}
            <h4 className="text-[22.44px] font-[700]  leading-[29.92px] ">
              {card.title}
            </h4>
            <p className="text-[#fff]/40 text-[14px]">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Supported Retailers */}
      <div className="flex pt-32 flex-col md:flex-row md:justify-between items-center px-6  gap-8">
        {/* text */}
        <div className="flex  flex-col gap-y-2">
          <p className="text-[#2E3038] text-end font-semibold leading-[23.21px] tracking-tighter text-[20.89px]">
            AMAZING FEATURES
          </p>
          <h2 className="text-[58.08px] text-[#5bbe82] leading-[64.53px] font-semibold">
            Supported <span className="text-white"> Retailers</span>
          </h2>
          <p className="text-[#61646e] text-end text-[19.25px] leading-[30.81px]">
            We Support all SNKRS regions{" "}
            <span className="text-[#5bbe82]">around the globe!</span>
          </p>
        </div>
        {/* icons */}
        <div className="flex  gap-x-10">
          {/* first col */}
          <div className="flex flex-col gap-10 justify-center">
            {/* card */}
            {<FeatureBagCard />}
            {<FeatureBagCard />}
          </div>
          <div className="flex flex-col gap-10 justify-center">
            {/* card */}
            {<FeatureBagCard />}
            {<FeatureBagCard />}
            {<FeatureBagCard />}
          </div>
          <div className="flex flex-col gap-10 justify-center">
            {/* card */}
            {<FeatureBagCard />}
            {<FeatureBagCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
