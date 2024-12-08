import React from "react";
import dashboard from "./../utils/dashboards.png";
import pin from "./../utils/pin.png";
import bag from "./../utils/bag.png";
import building from "./../utils/building.png";
import userIcon from "./../utils/userIcon.png";
import cubes from "./../utils/pyramid.png";
import graph from "./../utils/barGraph.png";

const Sidebar = () => {
  return (
    <div className="flex w-full h-[40px]  justify-between lg:block lg:w-[70px] lg:h-screen px-2 lg:p-4">
      <img
        src={dashboard}
        alt="dashBoardIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={pin}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={bag}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={building}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={userIcon}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={cubes}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] lg:mt-8 mt-3"
      />
      <img
        src={graph}
        alt="pinIcon"
        className="w-[20px] h-[20px] lg:w-[30px]  lg:h-[30px] lg:mt-8 mt-3"
      />
    </div>
  );
};

export default Sidebar;
