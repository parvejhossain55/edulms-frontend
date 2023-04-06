import Link from "next/link";
import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./Who-we-are";

const Homepage = () => {
  return (
    <div>
      <div>
        <HeroSection />
          <WhoWeAre />
      </div>
    </div>
  );
};

export default Homepage;
