import React, { useRef } from 'react';
import {ImLocation} from "react-icons/im";
import {HiOutlineMail} from "react-icons/hi";
import {TbPhoneCall} from "react-icons/tb";
import {Button,Element} from '../../Design';
import Link from "next/link";
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { useState } from 'react';


const ContactForm = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm( process.env.NEXT_PUBLIC_SERVICE_ID , process.env.NEXT_PUBLIC_TEMPLATE_ID , form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          toast.success('Message sent successfully')
      };
     
      
    
    return (
        <div className='bg-kh-white pt-16 pb-20'>
            <div className="md:container mx-auto ">
                <div className=" flex flex-col justify-center items-center lg:justify-between
                                lg:flex-row gap-y-7 lg:gap-x-8 ">
                                    
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-start lg:grow gap-y-5 w-[90%] lg:w-3/5">
                            <h1 className='heading-kh text-2xl ps-3'>Ready to Get Started?</h1>
                            <div className='px-2 sm:px-0 '>
                                <input type="text"
                                    name='user_name'
                                    placeholder='Your Name'
                                    required
                                    className="w-full p-4 border border-gray-200 rounded-md focus-visible:outline-none focus-visible:outline-2 duration-300 ease-in-out focus-visible:border-orange-500

                                        " />
                                {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                                <span className='text-rad-kh text-lg hidden '>please enter your name </span>
                            </div>
                            <div className='px-2 sm:px-0 '>
                                <input type="email"
                                    name='user_email'
                                    placeholder='Your Email '
                                    required
                                    className="w-full p-4 border border-gray-200 rounded-md focus-visible:outline-none focus-visible:outline-2 duration-300 ease-in-out focus-visible:border-orange-500"
                                />
                                {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                                <span className='text-rad-kh text-lg hidden  '>please enter your email </span>
                            </div>
                            <div className='px-2 sm:px-0 '>
                                <input type="number"
                                    name='user_phone'
                                    placeholder='Your Numbre'
                                    required
                                    className="w-full p-4 border border-gray-200 rounded-md focus-visible:outline-none focus-visible:outline-2 duration-300 ease-in-out focus-visible:border-orange-500"
                                />
                                {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                                <span className='text-rad-kh text-lg hidden  '>please enter your Number </span>
                            </div>
                            <div className='px-2 sm:px-0 '>
                                <input type="text"
                                    name='subject'
                                    placeholder='Subject'
                                    required
                                    className="w-full p-4 border border-gray-200 rounded-md focus-visible:outline-none focus-visible:outline-2 duration-300 ease-in-out focus-visible:border-orange-500"
                                />
                                {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                                <span className='text-rad-kh text-lg hidden  '>please enter your Subject </span>
                            </div>
                            <div className='px-2 sm:px-0 '>
                                <textarea
                                    placeholder='Write Your Massage '
                                    name='message'
                                    required
                                    className="w-full p-4 border border-gray-200 rounded-md focus-visible:outline-none focus-visible:outline-2 duration-300 ease-in-out focus-visible:border-orange-500 "
                                        cols='10'
                                        rows='5 '>
                                </textarea>
                                {/*  -------------->>> Error Massage here  <<<<<<----------------*/}
                                <span className='text-rad-kh text-lg hidden  '>please enter your name </span>
                            </div>
                            <div className='px-2 sm:px-0 '>
                                <button type='submit' className={`${Button.btn_primary}`}>Send Message</button>
                            </div>
                        </form>
                    <div className="flex flex-col justify-center lg:grow lg:justify-center gap-y-5 lg:px-5 lg:w-2/5">
                        <div className="flex flex-col justify-start gap-y-4">
                            <h3 className='heading-kh text-2xl '>Here to Help</h3>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl "  ><ImLocation/></span>Location :
                                <strong  className='ml-2'>Wonder Street, USA, New York</strong>
                            </p>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl  " ><TbPhoneCall/></span>Call Us:
                                <Link className={`heading - kh ${Element["link-before"]} ml-2`} href="#">01321654214</Link>
                            </p>
                            <p className="flex  items-center ">
                                <span className="text-rad-kh mr-3 text-xl  "  ><HiOutlineMail/></span>Email Us:
                                <Link className={`heading - kh ${Element["link-before"]} ml-2`} href="#">helle@gmail.com</Link>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start ">
                            <h3 className='heading-kh text-2xl mb-5 '>Here to Help</h3>
                            <p className={`${Element.paragraphs} text-lg mb-3`}>Tuesday: 8AM - 6AM</p>
                            <p className={`${Element.paragraphs} text-lg mb-3`}>Wednesday: 8AM - 6AM</p>
                            <p className={`${Element.paragraphs} text-lg mb-3`}>Monday: 8AM - 6AM</p>
                            <p className={`${Element.paragraphs} text-lg mb-3`}>Thursday: 8AM - 6AM</p>
                            <p className={`${Element.paragraphs} text-lg mb-3`}>Friday: Closed</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;