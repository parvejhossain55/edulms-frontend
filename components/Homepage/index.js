import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./Who-we-are";
import Classes from "./Classes";
import CoreValue from "./CoreValue";

const Homepage = () => {
  return (
    <div>
      <div>
        <HeroSection />
          <WhoWeAre />
          <Classes />
          <CoreValue/>
      </div>
    </div>
  );
};

export default Homepage;
