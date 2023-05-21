import React from 'react';
import Image from "next/image"
import valueImage from "../../../assect/img/value-1.png"
import valueShape1 from '../../../assect/img/value-shape-1.png'
import valueShape2 from '../../../assect/img/value-shape-2.png'
import valueShape3 from '../../../assect/img/value-shape-3.png'
import { Button } from '../../Design';


const CoreValue = () => {
    return (
        <div className=" bg-kh-white py-5 md:py-8 relative z-10 ">
            <div className="containte-kh px-4 py-10">
                <div className="flex flex-col lg:justify-between items-center lg:items-start lg:flex-row gap-5">
                    <div className=" lg:w-1/2 ">
                        <Image src={valueImage} className='w-full' alt="valueimage"/>
                    </div>
                    <div className="flex lg:w-1/2 flex-col ">
                        <span className='title-kh text-left mb-5 '>Our Core Values</span>
                        <h3 className="heading-kh text-2xl lg:text-4xl xl:text-[44px] xl:leading-[1.2]">We are Refunding Early Childcare Education</h3>
                        <div className="flex justify-center items-center mt-5 gap-5">
                            <div>
                                <span className={`${Button.btn_activity} bg-sky-300 before:border-sky-200`}>01</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-5 text-xl ">Active Learning</h4>
                                <p className='pregrap-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div>
                                <span className={`${Button.btn_activity}  bg-orange-300 before:border-orange-200`}>02</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-6 text-xl"> Fully Equipment</h4>
                                <p className='pregrap-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                     </div>
                        <div className="flex justify-center items-center gap-5">
                            <div>
                                <span className={`${Button.btn_activity}  bg-red-300 before:border-red-200`}>03</span>
                            </div>
                            <div className="flex flex-col gap-2.5 ">
                                <h4 className="heading-kh mt-6 text-xl"> Fully Equipment</h4>
                                <p className='pregrap-kh '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={valueShape1} className='hidden lg:block w-[100px]  left-6 top-6 absolute -z-10 ' alt="value-shape-3"/>
                <Image src={valueShape2} className='hidden lg:block w-[100px]  left-0 bottom-5 absolute -z-10 ' alt="value-shape-3"/>
                <Image src={valueShape3} className='hidden lg:block w-[250px]  right-0 bottom-16 absolute -z-10 ' alt="value-shape-3"/>

            </div>
        </div>
    );
};

export default CoreValue;