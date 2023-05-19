import React from 'react';
import AboutHeroBg from "../../../assect/img/about-bg-banner-1.jpg";
import Hero from "../../MiniComponet/Hero";


const ProgramHero = () => {

    return (
        <div>
            <Hero image={AboutHeroBg} subject={'program'}/>
        </div>
    );
};

export default ProgramHero;