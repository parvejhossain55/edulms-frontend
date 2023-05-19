import React from 'react';
import AboutHeroBg from "../../../assect/img/about-bg-banner-1.jpg";
import Hero from "../../MiniComponet/Hero";



const BlogHero = () => {

    return (
        <div>
            <Hero image={AboutHeroBg} subject='blog'/>
        </div>
    );
};

export default BlogHero;