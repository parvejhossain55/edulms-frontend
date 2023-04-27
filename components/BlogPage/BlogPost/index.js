import React from 'react';
import Image from 'next/image'
import blogPostImg from '../../../assect/img/BlogPost.jpg'
import blog_1 from '../../../assect/img/blog-1.jpg'
import blog_2 from '../../../assect/img/blog-2.jpg'
import blog_3 from '../../../assect/img/blog-3.jpg'
import client_1 from '../../../assect/img/client-1.jpg'
import client_3 from '../../../assect/img/client-3.jpg'
import class_3 from '../../../assect/img/class-2.jpg'
import {BsCheck, BsFillBookmarkFill, BsTwitter} from "react-icons/bs";
import {FaCircle, FaFacebookF, FaPinterestP} from "react-icons/fa";

import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";

const BlogPost = () => {
    return (
        <div className='bg-kh-white ' id='blogPost'>
            <div className="containte-kh px-4   ">
                <div className="flex flex-col lg:flex-row lg:gap-x-2  gap-y-5 ">
                    <div className="flex flex-col pr-4 basis-full lg:basis-8/12 gap-y-6 mb-5">
                        <div className='w-full'>
                            <Image src={blogPostImg} className='w-full' alt='blog-post' />
                        </div>
                        <div className='flex justify-start items-center gap-x-5'>
                            <h5 className='text-kh-heading font-medium  '>Posted On:
                                <a className='link-text-kh  pl-2 ' href="#">September 31, 2022</a>
                            </h5>
                            <h5 className='text-kh-heading  font-medium '>Posted By:
                                <a className='link-text-kh pl-2 ' href="#">John Anderson</a>
                            </h5>
                        </div>
                        <div className='flex flex-col justify-start  gap-y-5'>

                            <h1 className='heading-kh text-xl md:text-2xl  '>
                                Determining The True Goal of Good Education is Difficult.
                            </h1>

                            <p className="pregrap-kh">
                                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.
                            </p>

                            <p className="pregrap-kh">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>

                            <div className="px-5 py-7 bg-[#fafafa] italic border-x-2 rounded-lg border-yellow-kh ">
                                <h6 className='heading-kh text-[18px] text-center leading-7'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </h6>
                            </div>

                            <p className="pregrap-kh">
                                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.
                            </p>
                            <div className="flex justify-between items-center w-full gap-x-4 my-3">
                                <div className='basis-1/3'>
                                    <Image src={blog_1} className='w-full ' alt="blog-1" />
                                </div>
                                <div className='basis-1/3'>
                                    <Image src={blog_2} className='w-full ' alt="blog-1" />

                                </div>
                                <div className='basis-1/3'>
                                    <Image src={blog_3} className='w-full ' alt="blog-1" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-start gap-y-4">
                                <h1 className='heading-kh  text-xl md:text-2xl mb-2'>Four Major Elements That We Offer:</h1>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '><BsCheck/></span> Your child’s interests, likes, dislikes</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '><BsCheck/></span> Their routines- patterns of eating, sleeping, toileting</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '><BsCheck/></span> Your child’s current wellbeing</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-medium  '><BsCheck/></span> Any major events taking place at home.</p>

                            </div>

                            <h1 className='heading-kh  text-xl md:text-2xl mt-4'>
                                It’s Time To Think Differently About Homeschooling
                            </h1>

                            <p className='pregrap-kh'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>

                            <div className="flex justify-between items-center my-6   ">
                                <div className="flex justify-start items-center ">
                                    <span className='mr-2 '> <BsFillBookmarkFill/></span>
                                    <a className='link-text-kh capitalize' href="#"> preschool, </a>
                                    <a className='link-text-kh capitalize' href="#">children</a>
                                </div>
                                <div className="flex justify-start items-center">
                                    <span className='pregrap-kh mr-3 '>Share:</span>
                                    <div className="icon flex justify-start items-center gap-5 gap-x-2 ">
                                        <a className='icon-kh !bg-[#faf5f5] text-md font-medium hover:!bg-rad-kh text-rad-kh hover:text-white ' href="#"> <FaFacebookF/></a>
                                        <a className='icon-kh !bg-[#faf5f5] text-md font-medium hover:!bg-rad-kh text-rad-kh hover:text-white ' href="#"><BsTwitter/></a>
                                        <a className='icon-kh !bg-[#faf5f5] text-md font-medium hover:!bg-rad-kh text-rad-kh hover:text-white ' href=""><FaPinterestP/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-y-gray-150 border-y-[1px] py-4 ">
                                <a className='font-medium text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">
                                    <AiOutlineLeft/>
                                    Prev Post
                                </a>
                                <a className='font-medium text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">
                                    Next Post
                                    <AiOutlineRight/>
                                </a>
                            </div>
                        </div>
                        {/*    ----->>> Comment  Box ---------<<<<<< */}
                        <div className="flex flex-col justify-start gap-y-5  ">
                            <h3 className='heading-kh text-2xl mb-4 '> 3 Comments:</h3>
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                    <Image src={client_1} className='w-20'  alt='client-avtar'/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    <a href='#' className='link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</a>
                                    <p className="pregrap-kh text-justify">
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    <a className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                            font-medium shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Reply
                                    </a>
                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                            <Image src={client_3} className='w-20'  alt='client-avtar'/>
                                        </div>
                                        <div className="flex flex-col justify-start  gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            <a href='#' className='link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</a>
                                            <p className="pregrap-kh text-justify">
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            <a className='w-20 text-center  py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                                       font-medium shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh' href="#">Reply
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/*------------------------------------ 2nd Commend ------------->>>>>>*/}
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                    <Image src={client_1} className='w-20'  alt='client-avtar'/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    <a href='#' className='link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</a>
                                    <p className="pregrap-kh text-justify ">
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    <a className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                            font-medium shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Reply
                                    </a>

                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                            <Image src={client_3} className='w-20'  alt='client-avtar'/>
                                        </div>
                                        <div className="flex flex-col gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            <a href='#' className='link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</a>
                                            <p className="pregrap-kh text-justify ">
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            <a className='w-20 text-center  py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                                      font-medium shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                               href="#">Reply
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                         <div>
                            <h2 className='heading-kh text-2xl mb-3 '> Leave a Reply</h2>
                            <p className='pregrap-kh'>
                              Your email address will not be published. Required fields are marked *
                            </p>
                         </div>
                        <form className='flex flex-wrap justify-between items-center  gap-y-3 ' action="">
                            <input  className='input-kh bg-[#f4f4f4] border-none
                                        focus:border-transparent px-4 basis-full  sm:basis-[48%]  '
                                    type="text"
                                    placeholder='Your Name*'
                            />
                            <input  className='input-kh bg-[#f4f4f4] border-none
                                        focus:border-transparent px-4 basis-full  sm:basis-[48%] '
                                    type="text"
                                    placeholder='Your Email*'
                            />
                            <input  className='input-kh bg-[#f4f4f4] border-none
                                    focus:border-transparent px-4 basis-full   '
                                    type="text"
                                    placeholder='Website*'
                            />
                            <textarea className='input-kh bg-[#f4f4f4] border-none
                                        focus:border-transparent px-4  basis-full  '
                                      placeholder='Your Comment'
                                      cols="10"
                                      rows="5">
                            </textarea>
                            <div className='flex justify-start items-center gap-x-3 basis-full '>
                                <input  className='w-4 h-4  '
                                        type="checkbox"
                                        id='blog-formCheck'
                                />
                                <label className='pregrap-kh' For="blog-formCheck">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            <input className='btn-kh mt-2'
                                   type="button"
                                   value='Post A Comment'/>

                        </form>
                    </div>
                    <div className="flex flex-col basis-full lg:basis-4/12 gap-y-7 ">
                        {/*--------------->>>>>>>Search DIV <<<<<<<<<<<<<-------------------*/}
                        <div className="flex flex-col justify-start gap-y-5 shadow-kh p-4 px-5 ">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Search</h3>
                            </div>
                            <div className="relative flex justify-start items-center  ">
                                <input type="text "  placeholder='Search..'
                                        className='input-kh  !py-3 '
                                />

                                <button className='w-10 h-10 bg-[#faf5f5] text-rad-kh  flex items-center justify-center hover:text-kh-white hover:bg-rad-kh text-lg font-medium rounded-lg transition-all delay-10 ease-in
                                     absolute top-[9%] right-[3%]  '>
                                    <BiSearchAlt/>
                                </button>
                            </div>
                        </div>

                        {/* -------------------->>>> popular post<<<<<<<<---------           */}
                        <div className="flex flex-col justify-start gap-y-3.5 shadow-kh px-5">
                            <div className='border-b border-y-gray-100 mb-5 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Popular Posts</h3>
                            </div>


                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_1} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_2} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_3} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={class_3} className='w-auto h-20 rounded-lg' alt=""/>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_1} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_2} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={blog_3} className='w-auto h-20 rounded-lg' alt=""/>

                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4  items-center ">
                                <div className='basis-1/4 '>
                                    <a className='w-full  ' href="#">
                                        <Image src={class_3} className='w-auto h-20 rounded-lg' alt=""/>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-md' > June 10, 2022</p>
                                    <a className='text-[17px] text-kh-heading hover:text-rad-kh font-bold transition-all delay-200 ease-in-out' href="#">
                                        The Data Surrounding Higher Education
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/*    ------------->>>>>> category  DIV <<<<<<<-----------------*/}
                        <div className="flex flex-col shadow-kh justify-start justify-center gap-y-5 px-5 ">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Categories </h3>
                            </div>

                            <div className="flex flex-col justify-start items-start gap-y-4 pb-5 ">
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Alphabet Parade</a>
                                </div>

                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Games</a>
                                </div>
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Gross Motor</a>
                                </div>
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Inspare Success</a>
                                </div>
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Auditory Processing</a>
                                </div>
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    <a className='link-text-kh text-md '  href="#">Kindergarten</a>
                                </div>
                            </div>





                            

                        </div>

                        {/*    ------------------>>>>>>Popular TAGS DIV -<<<<<<<<-------------------------*/}

                            <div className="flex flex-col shadow-kh justify-start justify-center gap-y-5 px-5 pb-7">
                                <div className='border-b border-y-gray-100 pt-5'>
                                    <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Popular Tags </h3>
                                </div>

                                <div className="flex justify-start flex-wrap items-center gap-x-4 gap-y-4">
                                    <a className='text-center py-1.5 px-4 rounded-md  w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all delay-200 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Preschool
                                    </a>
                                    <a className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all delay-200 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Children
                                    </a>
                                    <a className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all delay-200 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Activities
                                    </a>
                                    <a className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all delay-200 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Educational
                                    </a>
                                    <a className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all delay-200 ease-in hover:text-white hover:bg-rad-kh'
                                       href="">Teachers
                                    </a>
                                </div>


                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;