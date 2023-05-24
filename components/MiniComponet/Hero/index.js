import React from 'react';
// import Image from "next/image";
import Link from "next/link";
import { HeroImg } from '../../Design';

const Hero = ({
           // image,
           subject,
   }) =>  {

    return (
        <div className={`bg-[url("https://templates.envytheme.com/ketan/default/assets/img/page-banner/page-banner-5.jpg")] ${HeroImg.primary_img}`} id="ProgramUs">
            <div className="containte-kh py-44 z-10 static top-0 left-0  ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-kh-white capitalize font-extrabold font-Catamaran text-4xl mb-6">{subject}</h1>
                    <div className="flex justify-start items-center gap-x-4">
                        <Link className=' text-kh-white text-lg font-medium' href="/">Home</Link>
                        <span className='text-rad-kh text-lg font-medium '>|</span>
                        <Link className=' text-rad-kh text-lg font-medium capitalize ' href="#">{subject}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;