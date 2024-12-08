import React from "react";
import dotss from "./../utils/dotss.png";

const StageHistory = () => {
  return (
    <div className="w-max">
      <div className="mt-4 ml-3 font-bold">Stage History</div>
      <hr class="border-t border-gray-300 mt-5" />
      <div className="mt-4 ml-3 font-bold">August 2024</div>
      <div className="flex w-full my-3 ">
        <span className="text-gray-300 ml-3 mr-3">28/02</span>
        <img src={dotss} alt="dotssIcon" className="w-[30px] h-[30px] lg:mr-6" />
        <div>
          <h2 className="text-gray-300">Team | 09:00 am</h2>
          <h2 className="font-bold">Created Jiya Gopal</h2>
        </div>
      </div>
      <div className="flex w-full my-3">
        <span className="text-gray-300 ml-3 mr-3">28/02</span>
        <img src={dotss} alt="dotssIcon" className="w-[30px] h-[30px] lg:mr-6" />
        <div>
          <h2 className="text-gray-300">Team | 10:00 am</h2>
          <h2 className="font-bold">Assigned to Anirudhh Naidu</h2>
        </div>
      </div>
      <div className="flex w-full my-3">
        <span className="text-gray-300 ml-3 mr-3">28/02</span>
        <img src={dotss} alt="dotssIcon" className="w-[30px] h-[30px] lg:mr-6" />
        <div>
          <h2 className="text-gray-300">Event | 12:00 pm</h2>
          <h2 className="font-bold">Arrange a Call</h2>
        </div>
      </div>
      <div className="flex w-full my-3">
        <span className="text-gray-300 ml-3 mr-3">28/02</span>
        <img src={dotss} alt="dotssIcon" className="w-[30px] h-[30px] lg:mr-6" />
        <div>
          <h2 className="text-gray-300">Lead Updated | 04:00 pm</h2>
          <h2 className="font-bold">Marked as Completed Jiya Gopal</h2>
        </div>
      </div>
    </div>
  );
};

export default StageHistory;
