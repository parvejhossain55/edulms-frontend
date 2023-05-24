import React from 'react';
import ProgramHero from "./ProgramHero";
import AboutSubscribe from "../Aboutuspage/AboutSubscribe";
import BecomeTeacher from "./BecomeTeacher";
import ProgramCourse from "./ProgramCourse";
import ProgramGallery from "./ProgramGallery";

const Program = () => {

    return (
        <div>
            <ProgramHero/>
            <ProgramCourse/>
            <BecomeTeacher/>
            <ProgramGallery/>
            <AboutSubscribe/>
        </div>
    );
};

export default Program;