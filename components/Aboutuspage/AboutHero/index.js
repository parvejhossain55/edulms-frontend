import React from 'react'
import AboutHeroBg from '../../../assect/img/about-bg-banner-1.jpg'
import Hero from "../../MiniComponet/Hero";
const AboutHero = () => {

    return (
        <div>
            <Hero  image={AboutHeroBg} subject={'about'}/>
        </div>
    );
};

export default AboutHero;