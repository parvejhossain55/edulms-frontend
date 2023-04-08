import React from 'react';
import Image from "next/image"
import valueImage from "../../../assect/img/value-1.png"


const CoreValue = () => {
    return (
        <div className=" bg-kh-white py-5 md:py-8 ">
            <div className="containte-kh px-4 py-10">
                <div className="flex flex-col lg:justify-between items-center lg:items-start lg:flex-row gap-5">
                    <div className=" lg:w-1/2 ">
                        <Image src={valueImage} className='w-full' alt="valueimage"/>
                    </div>
                    <div className="flex lg:w-1/2 flex-col ">
                        <span className='title-kh text-left mb-5 '>Our Core Values</span>
                        <h3 className="heading-kh text-2xl lg:text-4xl xl:text-[44px] xl:leading-[1.2]">We are Refunding Early Childcare Education</h3>
                        <div className="flex justify-center items-center mt-5 gap-5">
                            <div className="flex justify-center items-center p-4 w-14 h-14 bg-[#d3f5fe] border-2 border-rad-kh rounded-full">
                                <span className=" text-2xl text-center p-5 font-semibold outline-white">01</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-5 text-xl ">Active Learning</h4>
                                <p className='pregrap-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="flex justify-center items-center p-4 w-14 h-14 bg-[#fce0ad] border-2 border-rad-kh rounded-full">
                                <span className=" text-2xl text-center p-5  font-semibold outline-white">02</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-6 text-xl"> Fully Equipment</h4>
                                <p className='pregrap-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                     </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="flex justify-center items-center p-4 w-14 h-14 bg-[#fbc9d5] border-2 border-rad-kh rounded-full">
                                <span className=" text-2xl text-center p-5 font-semibold outline-white">03</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-6 text-xl"> Fully Equipment</h4>
                                <p className='pregrap-kh '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValue;