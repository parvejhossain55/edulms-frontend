import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from 'next/image'
import footerImage from '../../../assect/img/footer-gallery-3.jpg'


const Footer = () => {
    return (
        <>
            <div className={` bg-[url("https://templates.envytheme.com/ketan/default/assets/img/footer-bg.jpg")] center bg-cover bg-no-repeat relative z-10 bg-fixed before:bg-zinc-800 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:opacity-[.9] before:-z-10`}>
                <div className=" containte-kh py-24 z-10 text-white">
                    <div className="flex flex-col  justify-center items-center gap-y-4 ">
                        <div className="flex flex-col justify-start items-start sm:justify-between sm:flex-row sm:flex-wrap lg:flex-nowrap ">
                            <div className="sm:w-[46%] lg:w-[24%] xl:w-[25%] w-full flex flex-col justify-start sm:mr-5 mb-4">
                                <h2 className='font-bold text-[44px] mb-6'>Ketan</h2>
                                <p className='font-normal text-base text-white mb-5 text-left'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                                <div className="icon flex justify-start items-center gap-5 ">
                                    <a className='icon-kh' href="#"> <FaFacebookF /></a>
                                    <a className='icon-kh' href="#"><BsTwitter /></a>
                                    <a className='icon-kh' href=""><FaPinterestP /></a>
                                    <a className='icon-kh' href="#"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div className="sm:w-[46%] lg:w-[24%] xl:w-[25%] w-fuex flex-col justify-start">
                                <h2 className='font-bold text-2xl mb-4'>Contact us</h2>
                                <div className="flex justify-start mb-4 mt-6 ">
                                    <i className='mt-2 font-normal text-xl text-rad-kh mr-6'><BsFillTelephoneFill /></i>
                                    <div className="flex flex-col">
                                        <h2 className='font-medium text-xl mb-1 '>Phone</h2>
                                        <a className='link-kh' href="#"> 01533-000000
                                        </a>
                                    </div>
                                </div>
                                <div className="flex justify-start mb-4  ">
                                    <i className='mt-2 font-normal text-2xl text-rad-kh mr-6 '><HiOutlineMail /></i>
                                    <div className="flex flex-col">
                                        <h2 className='font-medium text-xl mb-1 '>Email</h2>
                                        <a className='link-kh' href="#"> hello@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex justify-start mb-4 ">
                                    <i className='mt-2 font-normal text-2xl text-rad-kh mr-6 '><MdOutlineLocationOn /></i>
                                    <div className="flex flex-col">
                                        <h2 className='font-medium text-xl mb-2 '>Location</h2>
                                        <p className='text-kh-white  transition-all pr-8 '> 175 5th Ave Premium Area, New York, NY 10010, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-[46%] lg:w-[24%] xl:w-[25%] w-fuex flex-col justify-start">
                                <div className="flex justify-start mb-4  ">
                                    <div className="flex flex-col space-y-4">
                                        <h2 className='font-medium text-2xl mb-2 '>Activities</h2>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">
                                                <a className='link-kh' href="#"> Maths Olympiad</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">
                                                <a className='link-kh' href="#"> Art Competition</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">
                                                <a className='link-kh' href="#"> English Novels</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">

                                                <a className='link-kh' href="#"> Science Competition</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">
                                                <a className='link-kh' href="#"> Teachers Day</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mb-4 ">
                                            <div className="flex flex-col">
                                                <a className='link-kh' href="#"> World Kids Day</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-[46%] lg:w-[24%] xl:w-[25%] w-ful flex flex-col justify-start  ">
                                <h2 className='font-bold text-2xl mb-2'>Photo Gallery</h2>
                                <span className='w-24 h-[2px] bg-rad-kh mb-10'></span>
                                <div className="lg:w-full flex justify-between items-center flex-wrap gap-y-1">
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                    <div className='w-[32%]'>
                                        <Image src={footerImage} alt='footer-gallary ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center p-6 bg-black text-white">Copyright @2023 Ketan. All Rights Reserved by EnvyTheme </div>
        </>
    );
};

export default Footer;