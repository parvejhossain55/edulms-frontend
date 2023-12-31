import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./Who-we-are";
import Classes from "./Courses";
import CoreValue from "./CoreValue";
import Teacher from "./Teacher";
import Event from "./Event";
import LatestBlog from "./LatestBlog";
import Activities from "./Activitie";

const Homepage = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <WhoWeAre />
        <LatestBlog />
        <Activities />
        <Classes />
        <Event />
        <CoreValue />
        <Teacher />

      </div>
    </div>
  );
};

export default Homepage;
