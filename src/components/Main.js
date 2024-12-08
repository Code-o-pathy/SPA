import React from "react";
import add from "./../utils/add.png";
import addUser from "./../utils/addUser.png";
import list from "./../utils/list.png";
import refresh from "./../utils/reload.png";
import tick from "./../utils/tick.png";
import AccountDetails from "./AccountDetails";
import Section2 from "./Section2";

const Main = () => {
  return (
    <div className="w-full">
      <div className="pl-4 pt-2 ">
        <span className="text-gray-500 text-sm"> Dashboard /</span>
        <span className="text-gray-500 text-sm"> Lead /</span>
        <span className="font-bold "> LE-010071</span>
      </div>
      <div className="flex justify-between w-full lg:mt-0 mt-3">
        <div className=" pl-4 lg:mt-2 font-bold text-2xl"> LE-010071</div>
        <div className="flex lg:mt-0 mt-2">
          <img src={add} alt="addIcon" className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] mr-4" />
          <img
            src={addUser}
            alt="addUserIcon"
            className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] mr-4"
          />
          <img src={list} alt="listIcon" className="lg:w-[30px] lg:h-[30px] -[20px] h-[20px] mr-4" />
          <img
            src={refresh}
            alt="refreshIcon"
            className="lg:w-[30px] lg:h-[30px] -[20px] h-[20px] mr-4"
          />
        </div>
      </div>
      <hr class="mt-3" />
      <div className="lg:flex justify-between">
        <div className="mt-3 lg:ml-5 flex justify-around">
          <button className="text-orange-400 rounded lg:text-lg text-xs px-2 py-1 lg:px-5 lg:py-2 bg-orange-100">
            New
          </button>
          <button className="text-gray-500 rounded lg:px-5 lg:text-lg lg:py-2 bg-gray-300 lg:ml-3 text-xs px-2 py-1">
            Contacted
          </button>
          <button className="text-gray-500 rounded lg:px-5 lg:text-lg lg:py-2 bg-gray-300 lg:ml-3 text-xs px-2 py-1">
            Nurturing
          </button>
          <button className="text-gray-500 rounded lg:px-5 lg:text-lg lg:py-2 bg-gray-300 lg:ml-3 text-xs px-2 py-1">
            Qualified
          </button>
          <button className="text-gray-500 rounded lg:px-5 lg:text-lg lg:py-2 bg-gray-300 lg:ml-3 text-xs px-2 py-1">
            Unqualified
          </button>
        </div>
        <div className="mt-3 lg:ml-5 w-full lg:w-max">
          <div className="bg-[#11334E] lg:mr-4 rounded-lg flex justify-around mx-14">
            <img
              src={tick}
              alt="tickIcon"
              className="w-[20px] h-[20px] mt-2 ml-2"
            />
            <button className="text-white rounded pl-2 py-2 bg-[#11334E]  mr-4">
              Mark as Completed
            </button>
          </div>
        </div>
      </div>

      <hr class="border-t border-gray-300 mt-3" />
      <div className="lg:flex w-full">
        <AccountDetails/>
        <Section2/>

      </div>
    </div>
  );
};

export default Main;
