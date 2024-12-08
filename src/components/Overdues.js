import React from "react";
import Template from "./Template";
import callIcon from "./../utils/call.png";
import EmailIcon from "./../utils/email.png";

const Overdues = () => {
  return (
    <div className=" border-t-2 border-gray-300 lg:w-full">
      <div className="flex justify-between px-2 mt-2">
        <div className="font-bold text-[#11334E]">Upcoming & Overdue</div>
        <button className=" border-b-2 border-[#11334E]  pb-3">View All</button>
      </div>
      <hr class="border-t border-gray-300 " />
      <div className="lg:flex justify-around mt-6 lg:px-0 px-16 ">
        <Template header="Arrange a Call" photo={callIcon} />
        <Template header="Follow Up Email" photo={EmailIcon} />
        <Template header="Arrange a Call" photo={callIcon} />
      </div>
    </div>
  );
};

export default Overdues;
