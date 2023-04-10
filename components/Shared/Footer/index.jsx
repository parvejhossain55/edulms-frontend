import React from "react";
import {FaFacebookF, FaLinkedinIn, FaPinterestP} from "react-icons/fa";
import {BsFillTelephoneFill, BsTwitter} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineLocationOn} from "react-icons/md";
import Image from 'next/image'
import footerImage from '../../../assect/img/footer-gallery-3.jpg'



const Footer = () => {
    return (
        <div className='bg-neutral-700 -z-10'>
            <div className="containte-kh py-10 z-10 text-white ">
                <div className="flex justify-start items-start flex-col sm:justify-between sm:flex-row sm:flex-wrap lg:flex-nowrap ">
                    <div className="sm:w-[45%]   lg:w-full flex flex-col justify-start sm:mr-5 mb-4">
                        <h2 className='font-bold text-[40px] mb-6'>Ketan</h2>
                        <p className='font-normal text-base text-white mb-5 text-justify md:pr-16  '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div className="icon flex justify-start items-center fap-5 gap-5 ">
                            <a className='icon-kh' href="#"> <FaFacebookF/></a>
                            <a className='icon-kh' href="#"><BsTwitter/></a>
                            <a className='icon-kh' href=""><FaPinterestP/></a>
                            <a className='icon-kh' href="#"><FaLinkedinIn/></a>
                        </div>
                    </div>
                    <div className="sm:w-[45%]   lg:w-full flex flex-col justify-start">
                        <h2 className='font-bold text-2xl mb-4'>Activities</h2>
                        <span className='w-24 h-[2px] bg-rad-kh '></span>
                        <div className="flex justify-start mb-4 mt-6 ">
                            <i className='mt-2 font-normal text-2xl text-rad-kh mr-6 '><BsFillTelephoneFill/></i>
                            <div className="flex flex-col">
                                <h2 className='font-medium text-2xl mb-2 '>Phone</h2>
                                <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0  hover:border-b-2' href="#"> 01533-000000
                                </a>
                            </div>

                        </div>
                        <div className="flex justify-start mb-4  ">
                            <i className='mt-2 font-normal text-2xl text-rad-kh mr-6 '><HiOutlineMail/></i>
                            <div className="flex flex-col">
                                <h2 className='font-medium text-2xl mb-2 '>Email</h2>
                                <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0  hover:border-b-2' href="#"> hello@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-start mb-4 ">
                        <i className='mt-2 font-normal text-2xl text-rad-kh mr-6 '><MdOutlineLocationOn/></i>
                        <div className="flex flex-col">
                            <h2 className='font-medium text-2xl mb-2 '>Location</h2>
                            <p className='text-kh-white  transition-all'> 175 5th Ave Premium Area, New York, NY 10010, United States</p>
                        </div>
                    </div>

                    </div>
                    <div className="sm:w-[45%]   lg:w-full flex flex-col justify-start gap-4 mt-">
                        <h2 className='font-bold text-2xl mb-2'>Contact Us</h2>
                        <span className='w-24 h-[2px] bg-rad-kh '></span>
                        <div className="flex flex-col justify-start gap-y-4">
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0 w-fit  hover:border-b-2' href="#"> Maths Olympiad
                            </a>
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0 w-fit  hover:border-b-2' href="#">  Art Competition
                            </a>
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh w-fit  border-0 hover:border-b-2' href="#">  English Novels
                            </a>
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0 w-fit  hover:border-b-2' href="#">  Science Competition
                            </a>
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0 w-fit  hover:border-b-2' href="#">  Teachers Day
                            </a>
                            <a className='text-kh-white hover:text-rad-kh transition-all
                                 border-rad-kh  border-0 w-fit  hover:border-b-2' href="#">  World Kids Day
                            </a>
                        </div>
                    </div>
                    <div className="sm:w-3/6 lg:ful flex flex-col justify-start ">
                        <h2 className='font-bold text-2xl mb-2'>Photo Gallery</h2>
                        <span className='w-24 h-[2px] bg-rad-kh mb-10  '></span>
                        <div className="lg:w-full flex justify-between items-center flex-wrap">
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                            <div className='w-[32%]'>
                                <Image src={footerImage} alt='footer-gallary '/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;