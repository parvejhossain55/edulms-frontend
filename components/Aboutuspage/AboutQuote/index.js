import React from 'react';
import {Button, HeroImg} from "../../Design";

const AboutVQuote = () => {

    return (
        <div className={`bg-[url("https://templates.envytheme.com/ketan/default/assets/img/quote-bg.jpg")] ${HeroImg.primary_img}`}>
            <div className="containte-kh py-10 md:py-14 lg:py-20">
                <div className="flex justify-center w-full items-center md:justify-center items-center lg:justify-end  ">
                    <div className="flex flex-col w-full md:basis-9/12 lg:basis-7/12 gap-y-3 justify-start bg-kh-white px-4 py-12 md:px-6 lg:px-12 ">
                        <p className='font-sacramento font-semibold text-rad-kh pl-2 mb-2'> Get a Quote</p>
                        <h2 className='heading-kh text-[22px] md:text-[40px] mb-4'>Online Class Registration</h2>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                placeholder='Your Name'
                                   className="py-4 placeholder:text-[15px] w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5" />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                placeholder='Your Email'
                                   className="py-4 placeholder:text-[15px] w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5"/>
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                placeholder='Studying Class'
                                   className="py-4 placeholder:text-[15px] w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5" />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                placeholder='Type Your Requirement'
                                className="py-4 placeholder:text-[15px] w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5" />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <button  className={`${Button.btn_primary} py-4 w-full capitalize`}>
                                submit now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVQuote;