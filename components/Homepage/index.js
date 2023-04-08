import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./Who-we-are";
import Classes from "./Classes";
import CoreValue from "./CoreValue";
import Teacher from "./Teacher";
import Event from "./Event";

const Homepage = () => {
  return (
    <div>
      <div>
        <HeroSection />
          <WhoWeAre />
          <Classes />
          <CoreValue/>
          <Teacher/>
          <Event/>
      </div>
    </div>
  );
};

export default Homepage;
