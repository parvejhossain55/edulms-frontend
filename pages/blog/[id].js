import React from 'react';
import Image from 'next/image'
import blogPostImg from '../../assect/img/BlogPost.jpg'
import blog_1 from '../../assect/img/blog-1.jpg'
import blog_2 from '../../assect/img/blog-2.jpg'
import blog_3 from '../../assect/img/blog-3.jpg'
// import client_1 from '../../../assect/img/client-1.jpg'
// import client_3 from '../../../assect/img/client-3.jpg'
import {BsCheck, BsFillBookmarkFill, BsTwitter} from "react-icons/bs";
import {FaCircle, FaFacebookF, FaPinterestP} from "react-icons/fa";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import {Button,Element} from '../../components/Design';
import Link from "next/link";
import axiosInstance from "../../helper/axiosInstance";
import moment from "moment";
import ReactHtmlParser from 'react-html-parser';
import Head from "next/head";

export const getServerSideProps = async ({query}) => {
  const {id} = query;
  const url = `/posts/${id}`;
  const {data} =  await axiosInstance.get(url)
  const categories =  await axiosInstance.get(`/blog/category/dropdown`)
  const popularPosts =  await axiosInstance.get(`/posts/popular-post`)
  const relatedPosts =  await axiosInstance.get(`/posts/${id}/related`)

  return { props: {
          post: data,
          categories: categories.data,
          popularPosts: popularPosts.data,
          relatedPosts: relatedPosts.data
  } };
};


const BlogPost = ({post, categories, popularPosts, relatedPosts}) => {

    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>

        <div className='bg-kh-white pb-20' id='blogPost'>
            <div className="containte-kh px-4   ">
                <div className="flex flex-col lg:flex-row lg:gap-x-2  gap-y-5   mt-16">
                    <div className="flex flex-col pr-4 basis-full lg:basis-8/12 gap-y-6 mb-5">
                        <div className='w-full '>
                            <Image
                                src={post?.thumbnail?.secure_url}
                                width={'500'}
                                height={'400'}
                                className='w-full rounded-md '
                                alt={post?.title} />

                        </div>
                        <div className='flex justify-start items-center gap-x-5 -mt-2 flex-wrap  '>
                            <h5 className='text-kh-heading font-[600]  '>Posted On:
                                <Link className='Link-text-kh  pl-2' href="#">{moment(post?.createdAt, "YYYYMMDD").fromNow()}</Link>
                            </h5>
                            <h5 className='text-kh-heading  font-[600] '>Posted By:
                                <Link className='Link-text-kh pl-2 ' href="#">{post?.author.firstName +' '+  post?.author.lastName}</Link>
                            </h5>
                        </div>
                        <div className='flex flex-col justify-start  gap-y-5'>
                            {
                                ReactHtmlParser(post?.content)
                            }
                            <div className="flex justify-between items-center my-6   ">
                                {/*<div className="flex justify-start items-center ">
                                    <span className='mr-2'> <BsFillBookmarkFill/></span>
                                    <Link className='Link-text-kh capitalize' href="#"> preschool, </Link>
                                    <Link className='Link-text-kh capitalize' href="#">children</Link>
                                </div>*/}
                                <div className="flex justify-start items-center">
                                    <span className={`${Element.paragraphs} mr-3 `}>Share:</span>
                                    <div className="icon flex justify-start items-center gap-5 gap-x-2 ">
                                        <Link className='flex justify-center items-center w-8 h-8 rounded-[16px] bg-[#faf5f5] hover:bg-rad-kh text-rad-kh hover:text-white transition-all duration-500' href="#"> <FaFacebookF/></Link>
                                        <Link className='flex justify-center items-center w-8 h-8 rounded-[16px] bg-[#faf5f5] hover:bg-rad-kh text-rad-kh hover:text-white transition-all duration-500' href="#"><BsTwitter/></Link>
                                        <Link className='flex justify-center items-center w-8 h-8 rounded-[16px] bg-[#faf5f5] hover:bg-rad-kh text-rad-kh hover:text-white transition-all duration-500' href="#"><FaPinterestP/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-y-gray-150 border-y-[1px] py-4 ">
                                <Link className='font-[600] text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">
                                    <AiOutlineLeft/>
                                    Prev Post
                                </Link>
                                <Link className='font-[600] text-kh-heading hover:text-rad-kh hover:tracking-tight transition-all delay-300 flex justify-center items-center gap-x-4' href="#">
                                    Next Post
                                    <AiOutlineRight/>
                                </Link>
                            </div>
                        </div>


                        {/*    ----->>> Comment  Box ---------<<<<<< */}
                        <div className="flex flex-col justify-start gap-y-5  ">
                            <h3 className='heading-kh text-2xl mb-3 '> 3 Comments:</h3>
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                   {/* <Image
                                        src={client_1}
                                        style={{width:"auto",height:"auto"}}
                                        className='!w-28 '
                                        alt='client-avtar'/>*/}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    <Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>
                                    <p className={`${Element.paragraphs} text-justify`}>
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    <Link className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                            font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                          href="#">Reply
                                    </Link>
                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                           {/* <Image
                                                src={client_3}
                                                style={{width:"auto",height:"auto"}}
                                                className='!w-28 '
                                                alt='client-avtar'/>*/}
                                        </div>
                                        <div className="flex flex-col justify-start  gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            <Link href='#' className='Link-text-kh !text-sm w-fit'>April 24, 2022 at 10:59 am</Link>
                                            <p className={`${Element.paragraphs} text-justify`}>
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            <Link className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                                       font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh' href="#">Reply
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/*------------------------------------ 2nd Commend ------------->>>>>>*/}
                            <div className="flex justify-start gap-x-5 ">
                                <div>
                                    {/*<Image
                                        src={client_1}
                                        style={{width:"auto",height:"auto"}}
                                        className='!w-28 '
                                        alt='client-avtar'/>*/}
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {/*--------------this is main comment ----------->>>> */}
                                    <h3 className='heading-kh'> John Jones</h3>
                                    <Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>
                                    <p className={`${Element.paragraphs} text-justify`}>
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                    </p>
                                    <Link className='w-20 text-center py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                            font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                          href="#">Reply
                                    </Link>

                                    {/*=====>>>>> Reply the Commet =============>>>> box*/}
                                    <div className="flex justify-start gap-x-5 mt-4 ">
                                        <div>
                                           {/* <Image
                                                src={client_3}
                                                style={{width:"auto",height:"auto"}}
                                                className='!w-28 '
                                                alt='client-avtar'/>*/}
                                        </div>
                                        <div className="flex flex-col gap-y-2.5">
                                            <h3 className='heading-kh'> John Jones</h3>
                                            <Link href='#' className='Link-text-kh  !text-sm w-fit '>April 24, 2022 at 10:59 am</Link>
                                            <p className={`${Element.paragraphs} text-justify`}>
                                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                            </p>
                                            <Link className='w-20 text-center  py-1 px-6 rounded-[20px] bg-white border-gray-200 border
                                                      font-[600] shadow text-rad-kh transition-all delay-750 ease-in hover:text-white hover:bg-rad-kh'
                                                  href="#">Reply
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div>
                            <h2 className='heading-kh text-2xl mb-3 '> Leave a Reply</h2>
                            <p className={`${Element.paragraphs}`}>
                                Your email address will not be published. Required fields are marked *
                            </p>
                        </div>

                        {/*----->>>>>>input form------<<<<<<<<*/}
                        <form className='flex flex-wrap justify-between items-center  gap-y-6 ' action="components/BlogDetail/BlogPost/index">
                            <input  className='py-4 px-6 rounded-lg bg-[#f4f4f4] basis-full sm:basis-[48%] placeholder:text-[17px] border-[1px] focus:border-rad-kh outline-none duration-500'
                                    type="text"
                                    placeholder='Your Name*'
                            />
                            <input className='py-4 px-6  rounded-lg bg-[#f4f4f4] basis-full sm:basis-[48%] placeholder:text-[17px] border-[1px] focus:border-rad-kh outline-none duration-500'
                                    type="text"
                                    placeholder='Your Email*'
                            />
                            <input  className='py-4 px-6 border-[1px] rounded-lg bg-[#f4f4f4] basis-full placeholder:text-[17px] border-[1px] focus:border-rad-kh outline-none duration-500 '
                                    type="text"
                                    placeholder='Website*'
                            />
                            <textarea className='py-4 px-6 border-[1px] rounded-lg bg-[#f4f4f4] basis-full placeholder:text-[17px] border-2 focus:border-rad-kh outline-none duration-500  '
                                      placeholder='Your Comment'
                                      cols="10"
                                      rows="5">
                            </textarea>
                            <div className='flex justify-start items-center gap-x-3 basis-full '>
                                <input  className='w-4 h-4 checked::bg-rad-kh '
                                        type="checkbox"
                                        id='blog-formCheck'
                                />
                                <label className={`${Element.paragraphs}`} htmlFor="blog-formCheck">
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
                            <div className="relative flex justify-start items-center ">
                                <input type="text"
                                       placeholder='Search..'
                                       className='py-4 px-6 w-full mb-2 border-gray-300 focus:border-rad-kh border-[1.5px] rounded-lg outline-none transition-all duration-300 ease-in-out  !py-3 '
                                />

                                <button className='w-10 h-10 bg-[#faf5f5] text-rad-kh flex items-center justify-center hover:text-kh-white hover:bg-rad-kh text-lg rounded-lg transition-all duration-500 ease-in
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
                            {
                                popularPosts?.map(post => (
                                    <div className="flex justify-start gap-x-4 items-center ">
                                        <Link href={`/blog/${post?._id}`} className={`rounded-md cursor-pointer bg-cover bg-center bg-cover basis-1/4`}>
                                            <Image src={post?.thumbnail?.secure_url} width={120} height={120} alt={post?.name} className='border border-1'/>
                                        </Link>

                                        <div className="flex flex-col gap-y-1 basis-3/4 ">
                                            <p className='text-rad-kh text-sm' > {moment(post?.createdAt, "YYYYMMDD").fromNow()}</p>
                                            <Link className='text-base text-kh-heading hover:text-rad-kh font-[600] transition duration-300 ease-in' href={`/blog/${post?._id}`}>
                                                {post?.title}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex flex-col justify-start gap-y-3.5 shadow-kh px-5 pb-6">
                            <div className='border-b border-y-gray-100 mb-5 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Related Posts</h3>
                            </div>
                            {
                                relatedPosts?.map(post => (
                                    <div className="flex justify-start gap-x-4 items-center ">
                                        <Link href={`/blog/${post?._id}`} className={`rounded-md cursor-pointer bg-cover bg-center bg-cover basis-1/4`}>
                                            <Image src={post?.thumbnail?.secure_url} width={120} height={120} alt={post?.name} className='border border-1'/>
                                        </Link>

                                        <div className="flex flex-col gap-y-1 basis-3/4 ">
                                            <p className='text-rad-kh text-sm' > {moment(post?.createdAt, "YYYYMMDD").fromNow()}</p>
                                            <Link className='text-base text-kh-heading hover:text-rad-kh font-[600] transition duration-300 ease-in' href={`/blog/${post?._id}`}>
                                                {post?.title}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/*    ------------->>>>>> category  DIV <<<<<<<-----------------*/}
                        <div className="flex flex-col shadow-kh  justify-center gap-y-5 px-5 ">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Categories </h3>
                            </div>

                            <div className="flex flex-col justify-start items-start gap-y-4 pb-5 ">
                                {
                                    categories?.map(category => (
                                        <div className='flex justify-center items-center  gap-x-2'>
                                            <span className='text-[10px] text-rad-kh'> <FaCircle/></span>
                                            <Link className={`${Element["link-primary"]} heading-kh !font-thin` } href={`/blog/category/${category?._id}?cat=${category?.name}`}>{category?.name}</Link>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                        {/*    ------------------>>>>>>Popular TAGS DIV -<<<<<<<<-------------------------*/}

                        <div className="flex flex-col shadow-kh  justify-center gap-y-5 px-5 pb-7">
                            <div className='border-b border-y-gray-100 pt-5'>
                                <h3 className='heading-kh text-xl border-b w-fit pb-2  border-rad-kh '>Popular Tags </h3>
                            </div>

                            <div className="flex justify-start flex-wrap items-center gap-x-4 gap-y-4">
                                <Link className='text-center py-1.5 px-4 rounded-md  w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'
                                      href="#">Preschool
                                </Link>
                                <Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'
                                      href="#">Children
                                </Link>
                                <Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'
                                      href="#">Activities
                                </Link>
                                <Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'
                                      href="#">Educational
                                </Link>
                                <Link className='text-center py-1.5 px-4 rounded-md w-fit  bg-[#f5f5f5] border-gray-200 border
                                            font-normal text-kh-heading transition-all duration-300 ease-in hover:text-white hover:bg-rad-kh'
                                      href="#">
                                    Teachers
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BlogPost;