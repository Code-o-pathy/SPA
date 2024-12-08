import React from "react";
import profile from "./../utils/profile.png";
import dots from "./../utils/dotmenu.png";
import line from "./../utils/line.png";
import calendar from "./../utils/calenders.png";
import settings from "./../utils/setting.png";
import noti from "./../utils/noti.png";
import searchIcon from "./../utils/loupe.png";

const Header = () => {
  return (
    <div className="lg:px-2  lg:h-[50px]  lg:w-full bg-[#11334E] flex justify-between pt-2">
      <div className="flex ">
        <img
          src={dots}
          alt="dots"
          className="w-[30px] h-[30px] ml-1 mt-1 lg:ml-2 "
        />
        <h1 className="text-white  text-4xl mb-1 ml-2 lg:ml-5">Test</h1>
      </div>
      <div className="flex lg:pl-2  lg:mt-0 mt-1">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="w-[25px] h-[25px]  lg:mr-2 mt-1"
        />
        <img
          src={line}
          alt="lineIcon"
          className="w-[30px] h-[40px] lg:mr-2 -mt-1"
        />
        <img
          src={settings}
          alt="settingsIcon"
          className="w-[25px] h-[25px] mr-1 lg:mr-3 mt-1"
        />
        <img
          src={noti}
          alt="notiIcon"
          className="w-[25px] h-[25px]  mr-1  lg:mr-3 mt-1"
        />
        <img
          src={calendar}
          alt="calenderIcon"
          className="w-[25px] h-[25px]  mr-1  lg:mr-2 mt-1"
        />
        <img
          src={line}
          alt="lineIcon"
          className="w-[30px] h-[40px]   lg:mr-2 -mt-1 "
        />
        <img
          src={profile}
          alt="profileIcon"
          className="w-[30px] h-[30px] mr-2 lg:mr-4"
        />
      </div>
    </div>
  );
};

export default Header;
