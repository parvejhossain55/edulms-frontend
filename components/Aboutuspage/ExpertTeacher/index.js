import React from 'react';
import Image from 'next/image'
import teacher_8 from '../../../assect/img/teacher-8.jpg'
import teacher_9 from '../../../assect/img/teacher-9.jpg'
import teacher_10 from '../../../assect/img/teacher-10.jpg'
import {FaFacebookF, FaGooglePlusG} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";



const ExpertTeacher = () => {
    return (
        <div className="bg-kh-white">
            <div className="containte-kh py-6 md:py-8 lg:py-10 ">
                <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-y-6 md:gap-y-7 " >
                    <div className="flex flex-col justify-start  gap-y-6 basis-12 md:basis-[48%] lg:basis-[32%]      ">
                        <p className='text-rad-kh text-base  '>Expert Teacher</p>

                        <h2 className='heading-kh text-2xl md:text-4xl lg:text-2xl xl:text-4xl '>Our Online Instructor</h2>

                        <p className='pregrap-kh'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                        </p>
                        <button className='text-center border-2 font-medium text-lg w-fit rounded-[10px] py-3 px-10 bg-rad-kh text-white shadow-2xl'> Instructor Profile</button>
                    </div>
                    <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative transition-all delay-500 ease-in-out ">

                            <Image src={teacher_8} className='w-full ' alt='Expart-taacher'/>

                        <div className="inner-hover-box flex flex-col gap-y-5 justify-center items-center
                                bg-black w-full hidden h-full transition-all ease-in-out 0 absolute top-0 bg-opacity-60 left-0 right-0">
                            <h2 className='font-bold text-kh-white text-2xl  '>Glims Bond</h2>
                            <span className='text-white font-semibold '>Music Teacher</span>
                            <div className="icon flex justify-start items-center  gap-5 opacity-100 ">
                                <a className='icon-kh' href="#"> <FaFacebookF/></a>
                                <a className='icon-kh' href="#"><BsTwitter/></a>
                                <a className='icon-kh' href="#"><FaGooglePlusG/></a>
                            </div>
                        </div>
                    </div>
                    <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative transition-all delay-500 ease-in-out">
                        <Image src={teacher_9}  className='w-full' alt='Expart-taacher'/>
                        <div className="inner-hover-box flex flex-col gap-y-5 justify-center items-center
                                bg-black w-full hidden h-full transition-all ease-in-out 0 absolute top-0 bg-opacity-60 left-0 right-0">
                            <h2 className='font-bold text-kh-white text-2xl  '>Glims Bond</h2>
                            <span className='text-white font-semibold '>Literacy Teacher</span>
                            <div className="icon flex justify-start items-center  gap-5 opacity-100 ">
                                <a className='icon-kh' href="#"> <FaFacebookF/></a>
                                <a className='icon-kh' href="#"><BsTwitter/></a>
                                <a className='icon-kh' href="#"><FaGooglePlusG/></a>
                            </div>
                        </div>
                    </div>
                    <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative transition-all delay-500 ease-in-out">
                        <Image src={teacher_10} className='w-full'  alt='Expart-taacher'/>
                        <div className="inner-hover-box flex flex-col gap-y-5 justify-center items-center
                                bg-black w-full hidden h-full transition-all ease-in-out 0 absolute top-0 bg-opacity-60 left-0 right-0">
                            <h2 className='font-bold text-kh-white text-2xl  '>Glims Bond</h2>
                            <span className='text-white font-semibold '>Music Teacher</span>
                            <div className="icon flex justify-start items-center  gap-5 opacity-100 ">
                                <a className='icon-kh' href="#"> <FaFacebookF/></a>
                                <a className='icon-kh' href="#"><BsTwitter/></a>
                                <a className='icon-kh' href="#"><FaGooglePlusG/></a>
                            </div>
                        </div>
                    </div>
                    <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative transition-all delay-500 ease-in-out">
                        <Image src={teacher_8}  className='w-full' alt='Expart-taacher'/>
                        <div className="inner-hover-box flex flex-col gap-y-5 justify-center items-center
                                bg-black w-full hidden h-full transition-all ease-in-out 0 absolute top-0 bg-opacity-60 left-0 right-0">
                            <h2 className='font-bold text-kh-white text-2xl  '>Glims Bond</h2>
                            <span className='text-white font-semibold '>Art Teacher</span>
                            <div className="icon flex justify-start items-center  gap-5 opacity-100 ">
                                <a className='icon-kh' href="#"> <FaFacebookF/></a>
                                <a className='icon-kh' href="#"><BsTwitter/></a>
                                <a className='icon-kh' href="#"><FaGooglePlusG/></a>
                            </div>
                        </div>
                    </div>
                    <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative">
                        <Image src={teacher_9}  className='w-full' alt='Expart-taacher'/>
                        <div className="inner-hover-box flex flex-col gap-y-5 justify-center items-center
                                bg-black w-full hidden h-full transition-all ease-in-out 0 absolute top-0 bg-opacity-60 left-0 right-0">
                            <h2 className='font-bold text-kh-white text-2xl  '>Glims Bond</h2>
                            <span className='text-white font-semibold '>Math Teacher</span>
                            <div className="icon flex justify-start items-center  gap-5 opacity-100 ">
                                <a className='icon-kh' href="#"> <FaFacebookF/></a>
                                <a className='icon-kh' href="#"><BsTwitter/></a>
                                <a className='icon-kh' href="#"><FaGooglePlusG/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertTeacher;