import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import class2 from "../../../assect/img/class-2.jpg";
import class3 from "../../../assect/img/class-3.jpg";
import classShape1 from "../../../assect/img/class-shape-1.png";
import classShape2 from "../../../assect/img/class-shape-2.png";
import Pagination from "../Pagination";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import { Button } from '../../Design';

const ProgramCard = () => {

    return (
        <div className="classes bg-seandary-bg relative z-10 pb-20 ">
            <div className="containte-kh px-4 py-10">
                <h1 className='heading-kh  text-2xl md:text-3xl my-6  '>Popular Class</h1>
                <div className="flex flex-col gap-y-10 justify-center items-center">

                    <div className="flex justify-center items-center flex-col lg:justify-between md:flex-row flex-wrap gap-6 ">
                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class1} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$120</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Color Matching</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>

                            </div>

                        </div>

                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class2} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$150</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Learning Disciplines</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>

                            </div>

                        </div>

                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class3} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$180</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Drawing</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>
                            </div>
                        </div>

                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class1} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$120</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Color Matching</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>

                            </div>

                        </div>

                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class2} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$150</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Learning Disciplines</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>

                            </div>

                        </div>

                        <div className="flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col bg-kh-white drop-shadow-lg">
                            <div className="w-full overflow-hidden">
                                <Image src={class3} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                            </div>
                            <div className="text-right">
                                <button className="btn-kh !py-2 !rounded-t-none  pb-5 max-w-fit">$180</button>
                            </div>
                            <div className="flex flex-col p-4 ">
                                <h3 className="heading-kh mb-5">Drawing</h3>
                                <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr className='bg-rad-kh h-[2px] mb-5 '/>
                                <div className="flex justify-between items-center mb-5">
                                    <h5 className='font-medium'><span className="text-rad-kh ">Age</span> 3-5 Year</h5>
                                    <h5 className='font-medium' ><span className="text-rad-kh ">Time</span> 8-10 AM</h5>
                                    <h5 className='font-medium'><span className="text-rad-kh ">Seat</span> 25</h5>
                                </div>
                                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>
                            </div>
                        </div>


                    </div>

                    {/*------------------>>>>>>*pagination component call your choice<<<<<-------------*/}
                    {/*<Pagination/>*/}
                    <div className="flex justify-between items-center gap-x-4 ">
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            <GrFormPrevious/>
                        </a>
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            1
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            2
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            3
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            4
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            5
                        </a>
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-24!font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                           href="#">
                            <GrFormNext/>
                        </a>
                    </div>
                </div>

            </div>
            <Image src={classShape1} className='hidden lg:block w-[320px] left-0 bottom-0 absolute -z-10' alt="class-shape-1"/>
            <Image src={classShape2} className='hidden lg:block w-[300px] right-0 bottom-0 absolute -z-10' alt="class-shape-2"/>
        </div>
    );
};

export default ProgramCard;