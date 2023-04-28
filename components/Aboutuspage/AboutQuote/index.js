import React from 'react';
import Image from 'next/image'
import Quote_bg from '../../../assect/img/quote-bg.jpg'

const AboutVQuote = () => {

    return (
        <div className='relative w-full '>
            <Image src={Quote_bg} className='absolute -z-10 bg-fixed top-0 right-0  ' alt='Quote-bg'/>
            <div className="containte-kh py-6 md:py-8 lg:py-10   ">
                <div className="flex justify-center w-full items-center md:justify-end ">
                    <div className="flex flex-col w-full md:basis-5/6  lg:basis-3/5 gap-y-2 justify-start bg-kh-white py-10  px-10 lg:px-12 ">
                        <p className='font-sacramento font-semibold text-rad-kh  mb-4'> Get a Quote</p>
                        <h2 className='heading-kh text-[22px] md:text-[45px] mb-4'>Online Class Registration</h2>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Your Name'
                                   className="py-4 w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5

                                    " />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Your Name'
                                   className="py-4 w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5

                                    " />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Your Name'
                                   className="py-4 w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5

                                    " />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="text"
                                   placeholder='Type Your Requ'
                                   className="py-4 w-full mb-2 focus:border-rad-kh border-gray-400 border-[1.5px]
                                   rounded-lg invalid:border-red-500 outline-none px-5

                                    " />
                        </div>
                        <div className='px-2 sm:px-0 '>
                            <input type="button"
                                   value='Submit Now'
                                   className="py-4 w-full bg-rad-kh  rounded-xl
                                    text-center border-2 font-medium text-lg hover:bg-yellow-kh
                                    transition-all duration-500 text-white shadow-2xl "
                            />
                        </div>
                    </div>

                </div>


            </div>




        </div>
    );
};

export default AboutVQuote;