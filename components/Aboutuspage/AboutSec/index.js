import React from 'react';
import Image from 'next/image'
import WhoWeAre_3 from "../../../assect/img/who-we-are-3.png"
import { Button,Element } from '../../Design';

const AboutSec = () => {

    return (
           <div className='bg-kh-white' id="aboutSec">
               <div className="containte-kh py-6 md:py-8 lg:py-10">
                   <div className="flex flex-col lg:justify-between lg:flex-row gap-y-5 ">
                       <div className="flex flex-col justify-start lg:basis-1/2 gap-y-5 ">
                           <span className="title-kh">About</span>
                           <h1 className="heading-kh text-2xl lg:text-[45px] lg:leading-[55px] ">Learn About Our Work and Cultural Activities</h1>
                           <p className={`${Element.paragraphs} px-3`}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                            </p>
                           <p className={`${Element.paragraphs} px-3`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>

                           <div className="flex justify-between items-center flex-wrap pt-5 ">
                               <div className="flex justify-self-start items-center w-1/2 mb-5 ">
                                   <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>1</span>
                                   <h3 className="text-kh-heading text-base font-semibold ml-4">Homelike Environment</h3>
                               </div>
                               <div className="flex justify-self-start items-center w-1/2 mb-5">
                                    <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>2</span
                                    ><h3 className="text-kh-heading text-base font-semibold ml-4">Quality Educatorst</h3>
                               </div>
                               <div className="flex justify-self-start items-center w-1/2 mb-5">
                                   <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>3</span>
                                   <h3 className="text-kh-heading text-base font-semibold ml-4">Safety and Security</h3>
                               </div>
                               <div className="flex justify-self-start items-center w-1/2 mb-5">
                                   <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>4</span>
                                   <h3 className="text-kh-heading text-base font-semibold ml-4">Play to Learn</h3>
                               </div>
                               <button className={`pt-3 ${Button.btn_primary}`}>Read More</button>
                           </div>

                       </div>
                       <div className="flex justify-center items-center lg:basis-1/2 ">
                           <Image src={WhoWeAre_3} className='w-full' alt={"who-we-are-3"}/>
                       </div>
                   </div>
               </div>
           </div>
    );
};

export default AboutSec;