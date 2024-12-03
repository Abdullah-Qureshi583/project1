import React from "react";

const ThemeTabs = ({activeTab, setActiveTab}) => {
  const toggleTheme = (color) => {
    console.log("the color is ", color);
    document.documentElement.setAttribute("data-theme", color);
    console.log(document.documentElement.getAttribute("data-theme"));
  };

  const tabs = [
    { id: "red", text: "Red" },
    { id: "green", text: "Green" },
    { id: "blue", text: "Blue" },
  ];
  return (
    <div className=" flex rounded-lg gap-x-1 text-[10px] p-[7.07px]  bg-[#15171D] w-fit">
      {tabs?.map((tab) => (
        <div
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            toggleTheme(tab.id);
          }}
          className={`cursor-pointer rounded-[4.86px] w-[90px] py-[6.19px] px-[36.25px] ${
            activeTab === tab.id ? "bg-lightgreen" : ""
          } `}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
};

export default ThemeTabs;
