import React from 'react'
import Image from 'next/image';
import AboutHeroBg from '../../../assect/img/about-bg-banner-1.jpg'
const AboutHero = () => {

    return (
        <div className='relative py-16 'id='Aboutu'>

            <Image src={AboutHeroBg} className=' bg-fixed -z-20 fixed top-0 left-0 top-0 w-full overflow-hidden'  alt='Abou-Hero-bg-banner' />

            <div className="containte-kh py-20 z-10 static top-0 left-0  ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-kh-white font-extrabold font-Catamaran text-3xl mb-6"> About</h1>
                    <div className="flex justify-start items-center gap-x-4">
                        <a className=' text-kh-white text-lg font-medium' href="/home">Home</a>
                        <span className='text-rad-kh text-lg font-medium '>|</span>
                        <a className=' text-rad-kh text-lg font-medium ' href="?# ">About</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;