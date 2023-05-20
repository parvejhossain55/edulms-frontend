import React from 'react';
import Image from 'next/image'
import blogPostImg from '../../../assect/img/BlogPost.jpg'

import {BsCheck} from "react-icons/bs";
import { Button } from '../../Design';



const ProgramDetails = () => {

    return (
        <div className='bg-kh-white pt-10 ' id='blogPost'>
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col lg:flex-row lg:gap-x-2  gap-y-5 ">
                    <div className="flex flex-col pr-4 basis-full lg:basis-8/12 gap-y-6 ">
                        <div className='w-full'>
                            <Image src={blogPostImg} className='w-full' alt='blog-post'/>
                        </div>
                        <div className='flex justify-start items-center gap-x-3'>

                            <a className='text-base  bg-[#fcefea] hover:bg-rad-kh text-kh-heading hover:text-white px-5 py-4
                                    transition-all delay-150 font-bold active:bg-rad-kh ease-in- capitalize !rounded-none'
                               href="#">
                                dscription
                            </a>
                            <a className='text-base bg-[#fcefea] hover:bg-rad-kh text-kh-heading hover:text-white px-5 py-4
                                    transition-all delay-150 font-bold active:bg-rad-kh ease-in- capitalize !rounded-none'
                               href="#">
                                Teacher
                            </a>
                            <a className='text-base bg-[#fcefea] hover:bg-rad-kh text-kh-heading hover:text-white px-5 py-4
                                    transition-all delay-150 font-bold active:bg-rad-kh ease-in- capitalize !rounded-none'
                               href="#">
                                Lesson
                               </a>
                            <a className='text-base bg-[#fcefea] hover:bg-rad-kh text-kh-heading hover:text-white px-5 py-4
                                    transition-all delay-150 font-bold active:bg-rad-kh ease-in- capitalize !rounded-none'
                               href="#">
                                Cost
                            </a>
                        </div>


                        <div className='flex flex-col justify-start gap-y-5'>

                            <div >
                                <h1 className='heading-kh text-xl md:text-2xl mb-4'>Education Lessons</h1>
                                <p className="pregrap-kh text-justify leading-7 ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                                </p>
                                <p className="pregrap-kh text-justify leading-7 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                                </p>
                            </div>
                            <div>
                                <h1 className='heading-kh text-xl md:text-2xl md-4 '>English Lesson Class</h1>
                                <p className="pregrap-kh text-justify ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                </p>


                            </div>
                            <div>
                                <h1 className='heading-kh text-xl md:text-2xl mb-4 '>Requirements</h1>
                                <p className="pregrap-kh text-justify ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                                </p>
                            </div>

                            <div className="flex flex-col justify-start gap-y-3">

                                <p className="pregrap-kh flex justify-start  gap-x-3 check  ">
                                    <span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '>
                                    <BsCheck/></span>
                                    Aliquam sit amet mi vitae turpis gravida vulputate.
                                </p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  ">
                                    <span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '>
                                    <BsCheck/></span>
                                    Proin a orci nec sapien condimentum imperdiet.
                                </p>

                                <p className="pregrap-kh flex justify-start  gap-x-3 check  ">
                                    <span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '>
                                    <BsCheck/></span>
                                    Suspendisse viverra lectus eu augue efficitur pulvinar.
                                </p>

                                <p className="pregrap-kh flex justify-start  gap-x-3 check  ">
                                    <span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '>
                                    <BsCheck/></span>
                                    Mauris a purus ut mauris sodales ultrices.
                                </p>
                            </div>

                        </div>

                    </div>



                    <div className="flex flex-col basis-full lg:basis-4/12 gap-y-7 ">
                        {/*--------------->>>>>>>Search DIV <<<<<<<<<<<<<-------------------*/}
                        <div className="flex flex-col justify-start gap-y-5 shadow-kh p-4 px-5  border-rad-kh border-t-[3px] rounded-t-lg ">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-[25px] border-b w-fit pb-3  border-rad-kh '>information</h3>
                            </div>
                            <div className="flex justify-start flex-col  gap-y-4 gap-x-2 mt-3 ">
                                <div className=' flex justify-start items-center gap-x-2'>
                                    <h4 className='heading-kh capitalize mr-1' >student:</h4>
                                    <p className='pregrap-kh'>25</p>
                                </div>

                                <div className=' flex justify-start items-center gap-x-2'>
                                    <h4 className='heading-kh capitalize mr-1' >Lectures:</h4>
                                    <p className='pregrap-kh'>25</p>
                                </div>
                                <div className=' flex justify-start items-center gap-x-2'>
                                    <h4 className='heading-kh capitalize mr-1' >time:</h4>
                                    <p className='pregrap-kh'>9AM - 11:30AM</p>
                                </div>
                                <div className=' flex justify-start items-center gap-x-2'>
                                    <h4 className='heading-kh capitalize mr-1' >learn day::</h4>
                                    <p className='pregrap-kh'>Monday, Wednesday</p>
                                </div>
                                <div className=' flex justify-start items-center gap-x-2'>
                                    <h4 className='heading-kh capitalize mr-1'>Language:</h4>
                                    <p className='pregrap-kh'>English</p>
                                </div>
                            </div>

                        </div>

                        {/* -------------------->>>> popular post<<<<<<<<---------           */}
                        <div className="flex flex-col justify-start items-center gap-y-4 shadow-kh p-5 bg-[#fcefea] ">
                            <h1 className='text-2xl capitalize pt-4 font-semibold'>Subscribe to Our Newsletter</h1>

                            <form className="flex flex-col gap-y-3 w-full" action=''>
                                <input type="text"
                                       placeholder='Enter Your Email'
                                       className='w-full px-4 py-4 -mb-7'
                                />
                                <button className={`${Button.btn_primary} mt-8`}>subscribe</button>
                            </form>

                        </div>







                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;