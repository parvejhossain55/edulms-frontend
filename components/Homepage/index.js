import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./Who-we-are";
import Classes from "./Classes";
import CoreValue from "./CoreValue";
import Teacher from "./Teacher";
import Event from "./Event";
import LatestNews from "./LatestNews";
// import BuyNowBtn from "./BuyNowBtn";

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
          <LatestNews/>
          {/*<BuyNowBtn/>*/}
      </div>
    </div>
  );
};

export default Homepage;
