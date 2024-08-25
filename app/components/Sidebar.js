import React from "react";

const sidebar = () => {
  return (
    <>
      <div className="flex flex-col h-full w-12 px-3 gray2-bg absolute">
        <div className="w-7 h-7 rounded-full green1-bg"></div>
        <div className="w-7 h-7 rounded-full green2-bg"></div>
        <div className="w-7 h-7 rounded-full green3-bg"></div>
        <div className="w-7 h-7 rounded-full green4-bg"></div>
      </div>
    </>
  );
};

export default sidebar;
