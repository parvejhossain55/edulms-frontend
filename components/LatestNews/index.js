import React from 'react';
import Image from "next/image";
import Blog1 from "../../assect/img/blog-3.jpg";
import Blog2 from "../../assect/img/blog-2.jpg";
import Blog3 from "../../assect/img/blog-1.jpg";

const LatestNews = () => {

    return (
        <div className="classes bg-kh-white ">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col items-center justify-center">
                    <span className="title-kh py-5 ">News & Blog </span>
                    <h3 className="heading-kh mb-8 text-3xl">Latest News</h3>
                </div>

                <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row flex-wrap ">
                    <div className="bg-seandary-bg flex rounded-2xl lg:max-w-[400px] md:mx-auto flex-col bg-kh-white drop-shadow-lg my-4">
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

                    <div className="bg-seandary-bg flex rounded-2xl lg:max-w-[400px] md:mx-auto flex-col bg-kh-white drop-shadow-lg my-4">
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

                    <div className="bg-seandary-bg flex rounded-2xl lg:max-w-[400px] md:mx-auto flex-col bg-kh-white drop-shadow-lg my-4">
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
            </div>
        </div>
    );
};

export default LatestNews;