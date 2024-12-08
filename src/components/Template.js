import React from "react";
import calender from "./../utils/grayCal.png"
import clock from "./../utils/grayClock.png"

const Template = ({ header, photo }) => {
  return (
    <div className=" w-full lg:w-52 border border-gray-400 rounded-lg p-2  lg:my-0 my-4">
      <div className="flex justify-around">
        <img src={photo} alt="iCon" className="w-[30px]" />
        <div className="font-bold">{header}</div>
      </div>
      <div className="flex justify-between border-t-2 border-gray-200">
        <div  >
            <h2 className="font-bold  mx-3">Start</h2>
            <div className="flex mt-2">
                <img src={calender} alt="icon" className="w-[15px] h-[15px]" />
                <h3 className="text-xs text-gray-400 ml-2">27/08/2024</h3>
                
            </div>
            <div className="flex mt-2">
                <img src={clock} alt="icon" className="w-[15px] h-[15px]"/>
                <h3 className="text-xs text-gray-400 ml-2">12:00 pm</h3>
                
            </div>
        </div>
        <div >
            <h2 className="font-bold mx-3">End</h2>
            <div className="flex mt-2">
                <img src={calender} alt="icon" className="w-[15px] h-[15px]" />
                <h3 className="text-xs text-gray-400 ml-2">27/08/2024</h3>
                
            </div>
            <div className="flex mt-2" >
                <img src={clock} alt="icon" className="w-[15px] h-[15px]"/>
                <h3 className="text-xs text-gray-400 ml-2">12:00 pm</h3>
                
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Template;
