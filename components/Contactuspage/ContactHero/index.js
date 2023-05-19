import React from 'react';
import contactHerobg from '../../../assect/img/about-bg-banner-1.jpg'
import Hero from "../../MiniComponet/Hero";



const ContactHero = () => {
    return (
        <div>
            <Hero image={contactHerobg} subject='contact'/>
        </div>
    );
};

export default ContactHero;