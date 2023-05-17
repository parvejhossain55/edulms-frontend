import React from 'react';
import Image from "next/image"
import class1 from '../../../assect/img/class-1.jpg'
import class2 from '../../../assect/img/class-2.jpg'
import class3 from '../../../assect/img/class-3.jpg'
import classShape1 from '../../../assect/img/class-shape-1.png'
import classShape2 from '../../../assect/img/class-shape-2.png'

const Classes = () => {
    return (
        <div className="classes bg-kh-white relative z-10 pb-8 ">
            <div className="containte-kh px-4 py-10   ">
                <div className="flex flex-col items-center justify-center">
                    <span className="title-kh py-5 ">clesses </span>
                    <h3 className="heading-kh mb-8 text-3xl">Popular Classes</h3>
                </div>
                <div className="flex justify-center md:justify-start items-center flex-col  lg:justify-between md:flex-row flex-wrap gap-6 ">
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
                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>

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
                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>

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
                            <button className="btn-kh pb-6 max-w-fit">Join Class</button>
                        </div>
                    </div>
                </div>
            </div>
                <Image src={classShape1} className='hidden lg:block w-[320px]  left-0 bottom-0 absolute -z-10 ' alt="class-shape-1"/>
                <Image src={classShape2} className='hidden lg:block w-[300px]  right-0 bottom-0 absolute -z-10 ' alt="class-shape-2"/>
        </div>
    );
};

export default Classes;