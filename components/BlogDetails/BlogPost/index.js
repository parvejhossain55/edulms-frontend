import React from 'react';
import Image from 'next/image'
import blogPostImg from '../../../assect/img/BlogPost.jpg'
import blog_1 from '../../../assect/img/blog-1.jpg'
import blog_2 from '../../../assect/img/blog-2.jpg'
import blog_3 from '../../../assect/img/blog-3.jpg'
import client_1 from '../../../assect/img/client-1.jpg'
import client_3 from '../../../assect/img/client-3.jpg'

import {BsCheck, BsFillBookmarkFill, BsTwitter} from "react-icons/bs";
import {FaCircle, FaFacebookF, FaPinterestP} from "react-icons/fa";

// import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import { Button } from '../../Design';


const BlogPost = () => {
    return (
        <div className='bg-kh-white pb-20' id='blogPost'>
            <div className="containte-kh px-4   ">
                <div className="flex flex-col lg:flex-row lg:gap-x-2  gap-y-5   mt-16">
                    <div className="flex flex-col pr-4 basis-full lg:basis-8/12 gap-y-6 mb-5">
                        <div className='w-full'>
                             <Image src={blogPostImg} style={{width:"auto",height:"auto"}} className='w-full ' alt='blog-post' />
                        </div>
                        <div className='flex justify-start items-center gap-x-5'>
                            <h5 className='text-kh-heading font-[600]  '>Posted On:
                                {/*<Link className='Link-text-kh  pl-2 ' href="#">September 31, 2022</Link>*/}
                            </h5>
                            <h5 className='text-kh-heading  font-[600] '>Posted By:
                                {/*<Link className='Link-text-kh pl-2 ' href="#">John Anderson</Link>*/}
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
                                     <Image src={blog_1} style={{width:"auto",height:"auto"}} className='w-full' style={{width:"auto",height:"auto"}} alt="blog-1" />
                                </div>
                                <div className='basis-1/3'>
                                     <Image src={blog_2} className='w-full' style={{width:"auto",height:"auto"}} alt="blog-1" />
                                </div>
                                <div className='basis-1/3'>
                                     <Image src={blog_3} className='w-full' style={{width:"auto",height:"auto"}} alt="blog-1" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-start gap-y-4">
                                <h1 className='heading-kh  text-xl md:text-2xl mb-2'>Four Major Elements That We Offer:</h1>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-[600]  '><BsCheck/></span> Your child’s interests, likes, dislikes</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-[600]  '><BsCheck/></span> Their routines- patterns of eating, sleeping, toileting</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-[600]  '><BsCheck/></span> Your child’s current wellbeing</p>
                                <p className="pregrap-kh flex justify-start  gap-x-3 check  "><span className='flex justify-center items-center w-6 h-6 rounded-[12px] bg-[#faf5f5] text-yellow-kh font-[600]  '><BsCheck/></span> Any major events taking place at home.</p>

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
                                    {/*<Link className='Link-text-kh capitalize' href="#"> preschool, </Link>*/}
                                    {/*<Link className='Link-text-kh capitalize' href="#">children</Link>*/}
                                </div>
                                <div className="flex justify-start items-center">
                                    <span className='pregrap-kh mr-3 '>Share:</span>
                                    <div className="icon flex justify-start items-center gap-5 gap-x-2 ">
                                        {/*<Link className='icon-kh !bg-[#faf5f5] text-md font-[600] hover:!bg-rad-kh text-rad-kh hover:text-white ' href="x#"> <FaFacebookF/></Link>*/}
                                        {/*<Link className='icon-kh !bg-[#faf5f5] text-md font-[600] hover:!bg-rad-kh text-rad-kh hover:text-white ' href="#"><BsTwitter/></Link>*/}
                                        {/*<Link className='icon-kh !bg-[#faf5f5] text-md font-[600] hover:!bg-rad-kh text-rad-kh hover:text-white ' href="#"><FaPinterestP/></Link>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-y-gray-150 border-y-[1px] py-4 ">
                                {/*<Link className='font-[600] text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">*/}
                                {/*    <AiOutlineLeft/>*/}
                                {/*    Prev Post*/}
                                {/*</Link>*/}
                                {/*<Link className='font-[600] text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">*/}
                                {/*    Next Post*/}
                                {/*    <AiOutlineRight/>*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                        {/*    ----->>> Comment  Box ---------<<<<<< */}
                        <div className="flex flex-col justify-start gap-y-5  ">
                            <h3 className='heading-kh text-2xl mb-4 '> 3 Comments:</h3>
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                     <Image src={client_1} style={{width:"auto",height:"auto"}} className='w-20'   alt='client-avtar'/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    {/*<Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>*/}
                                    <p className="pregrap-kh text-justify">
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    {/*<Link className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border*/}
                                    {/*        font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Reply*/}
                                    {/*</Link>*/}
                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                             <Image src={client_3} style={{width:"auto",height:"auto"}} className='w-20'  alt='client-avtar'/>
                                        </div>
                                        <div className="flex flex-col justify-start  gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            {/*<Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>*/}
                                            <p className="pregrap-kh text-justify">
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            {/*<Link className='w-20 text-center  py-1 px-6 rounded-[20px] bg-white border-gray-200 border*/}
                                            {/*           font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh' href="components/BlogDetail/BlogPost/index#">Reply*/}
                                            {/*</Link>*/}
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/*------------------------------------ 2nd Commend ------------->>>>>>*/}
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                     <Image src={client_1} style={{width:"auto",height:"auto"}} className='w-20'  alt='client-avtar'/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    {/*<Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>*/}
                                    <p className="pregrap-kh text-justify ">
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    {/*<Link className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border*/}
                                    {/*        font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Reply*/}
                                    {/*</Link>*/}

                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                             <Image src={client_3} style={{width:"auto",height:"auto"}} className='w-20'  alt='client-avtar'/>
                                        </div>
                                        <div className="flex flex-col gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            {/*<Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>*/}
                                            <p className="pregrap-kh text-justify ">
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            {/*<Link className='w-20 text-center  py-1 px-6 rounded-[20px] bg-white border-gray-200 border*/}
                                            {/*          font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'*/}
                                            {/*   href="#">Reply*/}
                                            {/*</Link>*/}
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
                        <form className='flex flex-wrap justify-between items-center  gap-y-3 ' action="components/BlogDetail/BlogPost/index">
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
                                <label className='pregrap-kh' htmlFor="blog-formCheck">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            <button type='submit' className={`${Button.btn_card} py-4 font-[600] text-lg px-6`}>Post A Comment</button>

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

                                <button className='w-10 h-10 bg-[#faf5f5] text-rad-kh  flex items-center justify-center hover:text-kh-white hover:bg-rad-kh text-lg font-[600] rounded-lg transition-all delay-10 ease-in
                                     absolute top-[9%] right-[3%]  '>
                                    <BiSearchAlt/>
                                </button>
                            </div>
                        </div>

                        {/* -------------------->>>> popular post<<<<<<<<---------           */}
                        <div className="flex flex-col justify-start gap-y-3.5 shadow-kh px-5 pb-6">
                            <div className='border-b border-y-gray-100 mb-5 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Popular Posts</h3>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center ">
                                {/*<Link href="#" className={`rounded-md cursor-pointer bg-cover bg-center bg-[url("https://templates.envytheme.com/ketan/default/assets/img/blog/blog-3.jpg")] w-20 h-20 bg-cover basis-1/4`}></Link>*/}
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-sm' > June 10, 2022</p>
                                    {/*<Link className='text-base text-kh-heading hover:text-rad-kh font-[600] transition duration-300 ease-in' href="#">*/}
                                    {/*    The Data Surrounding Higher Education*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center ">
                                {/*<Link href="#" className={`rounded-md cursor-pointer bg-cover bg-center bg-[url("https://templates.envytheme.com/ketan/default/assets/img/blog/blog-3.jpg")] w-20 h-20 bg-cover basis-1/4`}></Link>*/}
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-sm' > June 10, 2022</p>
                                    {/*<Link className='text-base text-kh-heading hover:text-rad-kh font-[600] transition duration-300 ease-in' href="#">*/}
                                    {/*    The Data Surrounding Higher Education*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center ">
                                {/*<Link href="" className={`rounded-md cursor-pointer bg-cover bg-center bg-[url("https://templates.envytheme.com/ketan/default/assets/img/blog/blog-3.jpg")] w-20 h-20 bg-cover basis-1/4`}></Link>*/}
                                <div className="flex flex-col gap-y-1 basis-3/4 ">
                                    <p className='text-rad-kh text-sm' > June 10, 2022</p>
                                    {/*<Link className='text-base text-kh-heading hover:text-rad-kh font-[600] transition duration-300 ease-in' href="components/BlogDetail/BlogPost/index#">*/}
                                    {/*    The Data Surrounding Higher Education*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>

                        {/*    ------------->>>>>> category  DIV <<<<<<<-----------------*/}
                        <div className="flex flex-col shadow-kh  justify-center gap-y-5 px-5 ">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Categories </h3>
                            </div>

                            <div className="flex flex-col justify-start items-start gap-y-4 pb-5 ">
                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Alphabet Parade</Link>*/}
                                </div>

                                <div className='flex justify-center items-center  gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Games</Link>*/}
                                </div>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Gross Motor</Link>*/}
                                </div>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Inspare Success</Link>*/}
                                </div>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Auditory Processing</Link>*/}
                                </div>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                    {/*<Link className='link-text-kh text-md ' href="#">Kindergarten</Link>*/}
                                </div>
                            </div>

                        </div>

                        {/*    ------------------>>>>>>Popular TAGS DIV -<<<<<<<<-------------------------*/}

                            <div className="flex flex-col shadow-kh  justify-center gap-y-5 px-5 pb-7">
                                <div className='border-b border-y-gray-100 pt-5'>
                                    <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Popular Tags </h3>
                                </div>

                                <div className="flex justify-start flex-wrap items-center gap-x-4 gap-y-4">
                                    {/*<Link className='text-center py-1.5 px-4 rounded-md  w-fit  bg-[#f5f5f5] border-gray-200 border*/}
                                    {/*        font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Preschool*/}
                                    {/*</Link>*/}
                                    {/*<Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border*/}
                                    {/*        font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Children*/}
                                    {/*</Link>*/}
                                    {/*<Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border*/}
                                    {/*        font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Activities*/}
                                    {/*</Link>*/}
                                    {/*<Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border*/}
                                    {/*        font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">Educational*/}
                                    {/*</Link>*/}
                                    {/*<Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border*/}
                                    {/*        font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'*/}
                                    {/*   href="#">*/}
                                    {/*    Teachers*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;