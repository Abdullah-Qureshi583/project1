import React from "react";
import FeatureDollarBags from "./FeatureDollarBags";
import AmazingFeaures from "./AmazingFeaures";

const SupportedRetailers = () => {
  return (
    <div className="flex pt-[211px] max-w-[1101px] xl:pl-[44px] flex-col md:flex-row md:justify-between items-center   gap-8">
      {/* text */}
      <AmazingFeaures
        textEnd={true}
        whiteTitle="Supported"
        greenTitle="Retailers"
        grayDescription="We support all SNKRS regions"
        greenDescription="around the globe!"
      />
      {/* icons */}
      <div className="flex gap-x-5  md:gap-x-7 xl:gap-x-10">
        {/* first col */}
        <div className="flex flex-col gap-5 md:gap-7 xl:gap-10 justify-center">
          {/* card */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
        <div className="flex flex-col gap-5 md:gap-7 xl:gap-10  justify-center">
          {/* card */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
        <div className="flex flex-col gap-5 md:gap-7 xl:gap-10  justify-center">
          {/* card */}
          {<FeatureDollarBags />}
          {<FeatureDollarBags />}
        </div>
      </div>
    </div>
  );
};

export default SupportedRetailers;
