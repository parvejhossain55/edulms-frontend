import React from 'react';
import Image from 'next/image'
import contactHerobg from '../../../assect/img/about-bg-banner-1.jpg'

const ContactHero = () => {
    return (
        <div className='relative' id='contactUs'>
            <Image src={contactHerobg}
                   className='fixed top-0 -z-30 left-0 bg-fixed '
                   alt='contact-bg-banner' />

            <div className="containte-kh py-20 sticky  z-0  top-0 left-0  ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-kh-white font-extrabold font-Catamaran text-3xl mb-6"> Contact</h1>
                    <div className="flex justify-start items-center gap-x-4">
                        <a className=' text-kh-white text-lg font-medium' href="/home">Home</a>
                        <span className='text-rad-kh text-lg font-medium '>|</span>
                        <a className=' text-rad-kh text-lg font-medium ' href="?# ">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;