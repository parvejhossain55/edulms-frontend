import React from 'react';

import Image from "next/image"
const AboutHero = () => {

    return (
        <div className=' bg-sky-300 py-16 'id='Aboutu'>
            <div className="containte-kh py-20  ">
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