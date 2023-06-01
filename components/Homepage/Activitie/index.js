import React from 'react';
import Link from 'next/link';

const Activities = () => {
    return (
        <div className='Activities bg-seandary-bg'>
            <div className="containte-kh px-4 py-8 sm:py-10 md:py-12 lg:py-16">
                <p className="title-kh">Our Activities</p>
                <h1 className='heading-kh my-6   text-3xl text-center capitalize'>our more enjoyable activities</h1>
                <div className="flex flex-col justify-start md:flex-wrap md:flex-row gap-y-7 mt-10">

                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-orange-400 text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                01
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>math Club</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>



                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-[#fdbea8] text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                02
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>Music Training</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>

                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-[#b6fdd6] text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                03
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>World Kids Day</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>



                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-[#fd91a8] text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                04
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>Full-Day Session</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>

                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-[#fce0ad] text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                05
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>Art Competition</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>


                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='border-2 border-orange-300 rounded-full mr-8  '>
                            <strong className='flex justify-center items-center text-2xl bg-[#cca0fe] text-[#1b0238] w-16 h-16 rounded-full border-spacing-6 border-[5px] border-white p-8 l  transition ease-in duration-200  '>
                                06
                            </strong>
                        </div>
                        <div className='flex flex-col justify-start gap-y-4  '>
                            <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize  transition ease-in duration-200 '>Museum Visit</Link>
                            <p className='font-normal text-base text-p-kh'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href='#' className='text-rad-kh text-md font-medium readMore-kh  transition-all ease-in duration-200'>Read More</Link>
                        </div>
                    </div>






                </div>

            </div>
            
        </div>
    );
};

export default Activities;