import React from "react";
import ActivitySection from "./ActivitySection";
import StageHistory from "./StageHistory";
import Overdues from "./Overdues";

const Section2 = () => {
  return (
    <div className="w-max">
      <div className="lg:flex">
        <ActivitySection />
        <StageHistory />
      </div>
     <Overdues/>
    </div>
  );
};

export default Section2;
