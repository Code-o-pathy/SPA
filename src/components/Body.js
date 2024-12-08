import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footers from "./Footers";

const Body = () => {
  return (
    <>
      <div className="lg:flex lg:w-full">
        <Sidebar />
        <Main />
      </div>
      <div>
        <Footers />
      </div>
    </>
  );
};

export default Body;
