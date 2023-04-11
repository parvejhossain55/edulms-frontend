import React from 'react';
import {ImLocation} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import {TbPhoneCall} from "react-icons/tb";

const ContactForm = () => {

    return (
        <div className='bg-kh-white'>
            <div className="containte-kh py-6 md:py-8 lg:py-10">
                <div className="flex flex-col justify-start lg:justify-between
                                lg:flex-row gap-y-7 lg:gap-x-8 ">

                    <div className="flex flex-col justify-start lg:grow gap-y-5 ">
                        <h1 className='heading-kh text-2xl'>Ready to Get Started?</h1>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Your Name'
                                   className="py-4 w-full mb-2 border-rad-kh focus:border-[1.5px] rounded-lg invalid:border-red-500 outline-none

                                    " />
                            {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                            <span className='text-rad-kh text-lg '>please enter your name </span>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="email"
                                   placeholder='Your Email '
                                   className="py-4 w-full mb-2 border-gray-300 focus:border-rad-kh border-[1.5px] rounded-lg invalid:border-red-500 outline-none

                                    " />
                            {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                            <span className='text-rad-kh text-lg hidden  '>please enter your email </span>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="number"
                                   placeholder='Your Numbre'
                                   className="py-4 w-full mb-2 border-gray-300 focus:border-rad-kh border-[1.5px]
                                    rounded-lg invalid:border-red-500 outline-none "
                            />
                            {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                            <span className='text-rad-kh text-lg hidden  '>please enter your Number </span>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Subject'
                                   className="py-4 w-full mb-2 border-gray-300 focus:border-rad-kh
                                   border-[1.5px] rounded-lg invalid:border-red-500 outline-none"
                            />
                            {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                            <span className='text-rad-kh text-lg hidden  '>please enter your Subject </span>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <textarea
                                   placeholder='Your Name'
                                   className="py-4 w-full mb-2 border-gray-300 focus:border-rad-kh          border-[1.5px] rounded-xl invalid:border-red-500 outline-none "
                                      cols='10'
                                      rows='5 '>
                            </textarea>
                            {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                            <span className='text-rad-kh text-lg hidden  '>please enter your name </span>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="button"
                                   className='text-center border-2 font-medium text-lg
                                    w-auto rounded-[10px] py-1.5 px-6 bg-rad-kh text-white shadow-2xl '
                                   value="Send Massage"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start lg:grow lg:justify-center gap-y-5 lg:mt-20 ">
                        <div className="flex flex-col justify-start gap-y-4">
                            <h3 className='heading-kh text-2xl '>Here to Help</h3>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl "  ><ImLocation/></span>Location :
                                <strong  className='ml-2'>Wonder Street, USA, New York</strong>
                            </p>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl  " ><TbPhoneCall/></span>Call Us:
                                <a className='heading-kh hover:text-rad-kh transition-all hover:border-b-[1px] border-rad-kh ml-2  ' href="#">01321654214</a>
                            </p>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl  "  ><HiOutlineMail/></span>Email Us:
                                <a className='heading-kh hover:text-rad-kh transition-all hover:border-b-[1px] border-rad-kh ml-2  ' href="#">helle@gmail.com</a>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start ">
                            <h3 className='heading-kh text-2xl mb-5 '>Here to Help</h3>
                            <p className='pregrap-kh text-lg mb-3 '>Tuesday: 8AM - 6AM</p>
                            <p className='pregrap-kh text-lg mb-3 '>Wednesday: 8AM - 6AM</p>
                            <p className='pregrap-kh text-lg mb-3 '>Monday: 8AM - 6AM</p>
                            <p className='pregrap-kh text-lg mb-3 '>Thursday: 8AM - 6AM</p>
                            <p className='pregrap-kh text-lg mb-3 '>Friday: Closed</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;