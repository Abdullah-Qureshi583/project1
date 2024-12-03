import React from "react";
import FeatureDollarBags from "./FeatureDollarBags";


const SupportedRetailers = () => {

  return (
    <div className="flex pt-[211px] max-w-[1101px] pl-[44px] flex-col md:flex-row md:justify-between items-center   gap-8">
      {/* text */}
      <div className="flex  flex-col gap-y-2">
        <p className="text-darkgray text-end font-semibold leading-[23.21px] tracking-tighter text-[20.89px]">
          AMAZING FEATURES
        </p>
        <h2 className="text-[58.08px] text-darkgreen leading-[64.53px] font-semibold">
          Supported <span className="text-white"> Retailers</span>
        </h2>
        <p className="text-lightgray text-end text-[19.25px] leading-[30.81px]">
          We Support all SNKRS regions{" "}
          <span className="text-darkgreen">around the globe!</span>
        </p>
      </div>
      {/* icons */}
      <div className="flex  gap-x-10">
        {/* first col */}
        <div className="flex flex-col gap-10 justify-center">
          {/* card */}
          {/* {console.log("in the supported retailors", ) } */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
        <div className="flex flex-col gap-10 justify-center">
          {/* card */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
        <div className="flex flex-col gap-10 justify-center">
          {/* card */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
      </div>
    </div>
  );
};

export default SupportedRetailers;
