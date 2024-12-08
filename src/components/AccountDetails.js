import React, { useState } from "react";
import dot from "./../utils/dot.png";
import info from "./../utils/info.png";
import userIcon from "./../utils/profile.png";

const AccountDetails = () => {
  const [activeButton, setActiveButton] = useState(4);

  return (
    <div className="lg:w-[35%] lg:h-screen border-r-2">
      <div className="flex ">
        <div className="p-2">
          <div className="flex">
            <img
              src={dot}
              alt="dotIcon"
              className="w-[10px] h-[10px] mt-[2px] "
            />
            <h2 className="text-orange-400 text-xs">Contacted</h2>
          </div>
          <h1 className="text-3xl font-bold mt-2"> Mamta Naik</h1>
          <div className="flex mt-2">
            <img src={userIcon} alt="userIcon" className="w-[20px]" />
            <h2 className="text-xs text-gray-400 font-bold mt-1 ml-2">
              Aniruddh Naidu
            </h2>
          </div>
        </div>
        <div className=" p-2">
          <div className="flex">
            <img src={info} alt="infoIcon" className="w-[15px] h-[15px]" />
            <h2 className=" text-gray-400 text-xs">Pending Actions</h2>
          </div>
          <div className="flex p-2 justify-between">
            <button className=" text-sm px-3 py-1 text-green-500 bg-green-100 rounded ">
              Create Account
            </button>
            <button className="text-sm px-3 py-1 text-yellow-500 bg-yellow-100 rounded ml-4 mr-0">
              Create Contact
            </button>
          </div>
        </div>
      </div>
      <hr class="border-t border-gray-300 mt-3" />
      <div className="flex mt-2 ml-3 pb-3">
        <button
          key={0}
          onClick={() => setActiveButton(0)}
          className={`text-xs font-bold mr-3  ${
            activeButton === 0
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Basic Details
        </button>
        <button
          key={1}
          onClick={() => setActiveButton(1)}
          className={`text-xs font-bold mr-3 ${
            activeButton === 1
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Account Details
        </button>
        <button
          key={2}
          onClick={() => setActiveButton(2)}
          className={`text-xs font-bold mr-3 ${
            activeButton === 2
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Lead Details
        </button>
        <button
          key={3}
          onClick={() => setActiveButton(3)}
          className={`text-xs font-bold mr-3 ${
            activeButton === 3
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Team Details
        </button>
        <button
          key={4}
          onClick={() => setActiveButton(4)}
          className={`text-xs font-bold pb-3 mt-3 ${
            activeButton === 4
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Other Contacts
        </button>
      </div>

      <hr class="border-t border-gray-300 -mt-3" />

      <div className="lg:flex mr-2">
        <div>
          <h2 className="ml-3 font-bold my-3">Account</h2>
          <select
            id="dropdown"
            className=" text-gray-400 border border-gray-200 rounded p-2 w-full lg:ml-3 ml-1 px-6"
          >
            <option value="option1">Select Option</option>
            <option value="option2">Savings </option>
            <option value="option3">0-balance</option>
            <option value="option3">Trading</option>
          </select>
        </div>
        <div className="lg:ml-28">
          <h2 className="ml-3 font-bold my-3">Contact</h2>
          <select
            id="dropdown"
            className=" text-gray-400 border border-gray-200 rounded p-2 w-full ml-1 lg:ml-3 px-6"
          >
            <option value="option1">Select Option</option>
            <option value="option2">Home </option>
            <option value="option3">Office</option>
            <option value="option3">Secondary</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-5 px-2">
        <div>
          <h2 className="text-blue-300">Pranab Biryani</h2>
          <h3 className="text-gray-400 text-sm">Associate Vp</h3>
        </div>
        <div className="font-bold mr-2">Sales Head</div>
      </div>
      <div className="flex justify-between mt-5 px-2">
        <div>
          <h2 className="text-blue-300">Nayan Joshi</h2>
          <h3 className="text-gray-400 text-sm">Associate Vp</h3>
        </div>
        <div className="font-bold mr-2">Sales Head</div>
      </div>
      <hr class="border-t border-gray-300 mt-3  lg:hidden" />
    </div>
  );
};

export default AccountDetails;
