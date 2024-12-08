import React, { useState } from "react";
import call from "./../utils/call.png";
import email from "./../utils/email.png";
import plus from "./../utils/plus.png";
import bulb from "./../utils/bulb.png";

const ActivitySection = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="w-max border-r-2">
      <div className=" flex  mt-3 lg:ml-3   ">
        <button
          key={0}
          onClick={() => setActiveButton(0)}
          className={`lg:text-s mx-2 pb-2 font-bold lg:mx-8 lg:pb-3 mt-3  ${
            activeButton === 0
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Activity
        </button>
        <button
          key={1}
          onClick={() => setActiveButton(1)}
          className={`lg:text-s mx-2 pb-2 font-bold lg:mx-8 lg:pb-3 mt-3  ${
            activeButton === 1
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Actionables
        </button>
        <button
          key={2}
          onClick={() => setActiveButton(2)}
          className={`lg:text-s mx-2 pb-2 font-bold lg:mx-8 lg:pb-3 mt-3 ${
            activeButton === 2
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Tasks
        </button>
        <button
          key={3}
          onClick={() => setActiveButton(3)}
          className={`lg:text-s mx-2 pb-2 font-bold lg:mx-8 lg:pb-3 mt-3 ${
            activeButton === 3
              ? "text-[#11334E] border-b-2 border-[#11334E]"
              : "text-gray-400 border-b-2 border-transparent"
          }`}
        >
          Note & File
        </button>
      </div>
      <hr class="border-t border-gray-300" />
      <div className="flex p-2 lg:justify-around mt-3">
        <div className="flex lg:ml-0">
          <div className="bg-gray-200 rounded-l p-1  ">
            <img src={call} alt="callIcon" className="w-[30px]"  />
          </div>
          <div className="border-2 lg:p-2 p-1 rounded-r border-gray-200 font-bold">
            Log a Call
          </div>
        </div>
        <div className="flex ml-4 lg:ml-0">
          <div className="bg-gray-200 rounded-l p-1 ">
            <img src={email} alt="callIcon"  className="w-[30px]" />
          </div>
          <div className="border-2 lg:p-2 p-1 rounded-r border-gray-200 font-bold">
            Email
          </div>
        </div>
        <div className="flex ml-4 lg:ml-0">
          <div className="bg-gray-200 rounded-l p-1 ">
            <img src={bulb} alt="callIcon"  className="w-[30px] " />
          </div>
          <div className="border-2 lg:p-2 p-1 rounded-r border-gray-200 font-bold">
            Event
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between p-2 mt-2">
        <div>
          <h2 className="font-bold lg:my-0 my-2">Subject</h2>
          <input
            placeholder="Input text"
            className="border border-gray-200 rounded-md pl-3 w-full
          "
          />
        </div>
        <div>
          <h2 className="font-bold lg:my-0 my-2">Add People</h2>
          <input
            placeholder="Input text"
            className="border border-gray-200 rounded-md pl-3 w-full"
          />
        </div>
      </div>
      <div className="lg:flex justify-between p-2 lg:mt-2">
        <div>
          <h2 className="font-bold lg:my-0 my-2">Due Date</h2>
          <input
            placeholder="Input Date"
            className="border border-gray-200 rounded-md pl-3 w-full
          "
          />
        </div>
        <div>
          <h2 className="font-bold lg:my-0 my-2">Time</h2>
          <input
            placeholder="Input time"
            className="border border-gray-200 rounded-md pl-3 w-full"
          />
        </div>
      </div>

      <div className="p-2 mt-2">
        <h2 className="font-bold">Description</h2>
        <input
          placeholder="  Input Text "
          className="border border-gray-200 rounded-md w-full
          h-24"
        />
      </div>
      <div className="flex justify-between  mt-4">
        <div className="flex mt-2 ">
          <img
            src={plus}
            alt="plusIcon"
            className="w-[20px] h-[20px] ml-4 mr-2"
          />
          <h2 className="text-gray-400 ">Add Team Member</h2>
        </div>
        <button className="bg-[#11334E] px-5 py-2 rounded p-1g text-white mr-3 mb-3">
          Submit
        </button>
      </div>
      <hr class="border-t border-gray-300 mt-3 lg:hidden" />
    </div>
  );
};

export default ActivitySection;
