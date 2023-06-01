import React from 'react';
import ProgramHero from "./ProgramHero";
import BecomeTeacher from "./BecomeTeacher";
import ProgramCourse from "./ProgramCourse";
import ProgramGallery from "./ProgramGallery";
import ProgramSubcribe from "./ProgramSubcribe";

const Program = () => {

    return (
        <div>
            <ProgramHero/>
            <ProgramCourse/>
            <BecomeTeacher/>
            <ProgramGallery/>
            <ProgramSubcribe/>

        </div>
    );
};

export default Program;