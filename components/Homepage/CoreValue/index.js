import React from 'react';
import Image from "next/image"
import facilities from "../../../assect/img/facilities-1.png"
import valueShape1 from '../../../assect/img/value-shape-1.png'
import valueShape2 from '../../../assect/img/value-shape-2.png'
import valueShape3 from '../../../assect/img/value-shape-3.png'

import Link from "next/link";


const CoreValue = () => {
    return (
        <div className=" bg-kh-white py-5 md:py-8 relative z-10 ">
            <div className="containte-kh px-4 py-18">
                <div className="flex flex-col justify-center item-center gap-y-4 mt-16">
                    <span className='title-kh'>Our Core Values</span>
                    <h3 className="heading-kh text-2xl lg:text-4xl xl:text-[44px] text-center">Best Facilities For Kids</h3>
                </div>

                <div className="flex flex-col justify-start items-start  lg:justify-between lg:flex-row gap-5 mt-10">
                    <div className="flex flex-col item-center justify-center gap-y-6 basis-full lg:basis-[32%]">
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-orange-400 text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    01
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>Active Learning</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-[#fdbea8] text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    02
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>Safe Environment</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-[#b6fdd6] text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    03
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>Fully Equipment</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col item-center basis-full lg:basis-[33%] px-2.5">
                        <Image src={facilities} style={{width:"auto", height:"auto"}} className='w-full' alt="facilities"/>
                    </div>

                    <div className="flex flex-col item-center justify-center gap-y-6 basis-full lg:basis-[32%]">
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-[#fd91a8] text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    04
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>art class</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-[#fce0ad] text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    05
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>expart teacher</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-start activity-box transition-all">
                            <div className='border-2 border-orange-300 rounded-full mr-5  '>
                                <strong className='flex justify-center items-center text-xl bg-[#cca0fe] text-[#1b0238] w-12 h-12 p-6 rounded-full border-spacing-6 border-[3px] border-white transition-all ease-in duration-200  '>
                                    06
                                </strong>
                            </div>
                            <div className='flex flex-col justify-start gap-y-2.5  '>
                                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200 '>Sport Section</Link>
                                <p className='font-normal text-base text-p-kh '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={valueShape1} style={{width:"auto",height:"auto"}} className='hidden lg:block w-[100px] left-6 top-6 absolute -z-10' alt="value-shape-3"/>
                <Image src={valueShape2} style={{width:"auto",height:"auto"}} className='hidden lg:block w-[100px] left-0 bottom-5 absolute -z-10' alt="value-shape-3"/>
                <Image src={valueShape3} style={{width:"auto",height:"auto"}} className='hidden lg:block w-[250px] right-0 bottom-16 absolute -z-10' alt="value-shape-3"/>

            </div>
        </div>
    );
};

export default CoreValue;