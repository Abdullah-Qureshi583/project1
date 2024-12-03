import React from "react";

const AmazingFeaures = ({
  whiteTitle,
  greenTitle,
  grayDescription,
  greenDescription,
  textEnd,
}) => {
  return (
    <div className="flex  pl-3 flex-col ">
      <p
        className={`${
          textEnd ? "xl:text-end" : ""
        } font-poppins text-darkgray font-semibold leading-[23.21px] text-[15.89px] md:text-[17.89px] xl:text-[20.89px]`}
      >
        AMAZING FEATURES
      </p>
      <h3 className="mt-[9px] text-[44.76px] md:text-[48.76px] xl:text-[52.76px] font-poppins tracking-tight leading-[58.62px] font-semibold text-darkgreen">
        {whiteTitle} <span className="text-white">{greenTitle}</span>
      </h3>
      <p
        className={` ${
          textEnd ? "xl:text-end" : ""
        }mt-[18px] text-lightgray  text-[14.25px] md:text-[16.25px] xl:text-[19.25px] leading-[30.81px]`}
      >
        {grayDescription}{" "}
        <span className="text-darkgreen">{greenDescription}</span>
      </p>
    </div>
  );
};

export default AmazingFeaures;
