import React from 'react';
import Image from "next/image";
import Blog1 from "../../../assect/img/blog-3.jpg";
import Blog2 from "../../../assect/img/blog-2.jpg";
import Blog3 from "../../../assect/img/blog-1.jpg";
import Pagination from "../../Program/Pagination";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";


const BlogCard = () => {
    return (
        <div className="classes bg-kh-white ">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col gap-y-12 justify-center items-center">
                    <div className="flex justify-center items-center flex-col md:justify-between md:flex-row  flex-wrap gap-y-5">

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%]  flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog1} className="w-full transform  hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">
                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base font-normal'><span className="text-rad-kh ">By Admin:</span> Jack John</p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 25 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">Red Green Color Blindness</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog2} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">


                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base font-normal'><span className="text-rad-kh ">By Admin:</span> Glims Bond</p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 26 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">8 Ways to Learning Lesson</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog3} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">


                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base  font-normal'><span className="text-rad-kh ">By Admin:</span> Smith Broke </p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 27 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">Full-Day Session With Activities</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog1} className="w-full transform  hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">
                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base font-normal'><span className="text-rad-kh ">By Admin:</span> Jack John</p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 25 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">Red Green Color Blindness</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog2} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">


                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base font-normal'><span className="text-rad-kh ">By Admin:</span> Glims Bond</p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 26 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">8 Ways to Learning Lesson</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>

                    <div className=" flex rounded-2xl basis-full md:basis-[48%] lg:basis-[32%] flex-col bg-kh-white drop-shadow-lg">
                        <div className="w-full overflow-hidden rounded-t-xl ">
                            <Image src={Blog3} className="w-full transform hover:scale-125 hover:rotate-6 transition duration-500 ease-in-out " alt="classImage"/>
                        </div>
                        <div className="flex flex-col p-6 ">


                            <div className="flex justify-between items-center   mb-5">
                                <p className='tex-base  font-normal'><span className="text-rad-kh ">By Admin:</span> Smith Broke </p>
                                <p className='tex-base font-normal' ><span className="text-rad-kh ">Date:</span> 27 Dec 2022</p>
                            </div>

                            <h3 className="heading-kh text-xl mb-5">Full-Day Session With Activities</h3>
                            <p className="pregrap-kh mb-5"> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className="btn-kh pb-5 max-w-fit">Join Class</button>
                        </div>
                    </div>
                </div>
                {

                    /*        pagenation component col your choice */}
                                {/*<Pagination/>*/}

                    <div className="flex justify-between items-center gap-x-4 ">
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            <GrFormPrevious/>
                        </a>
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            1
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            2
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            3
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            4
                        </a>

                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            5
                        </a>
                        <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 !font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                           href="#">
                            <GrFormNext/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;