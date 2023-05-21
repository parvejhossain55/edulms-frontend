import React from 'react';

const AboutSubscribe = () => {

    return (
        <div className='bg-[#fdeee9] '>
            <div className="containte-kh py-12 md:py-8 lg:py-20">
                <div className=" flex flex-col lg:flex-row lg:justify-between  gap-y-5 z-0 ">

                        <h1 className="basis-ful md:basis-1/2 md:leading-tight heading-kh text-2xl md:text-[34px] ">Do You Want To Know Get Update What’s Upcoming</h1>
                        <div className='md:relative basis-full  md:basis-1/2 flex flex-col justify-start md:flex-row
                                    md:justify-center md:items-center rounded-xl '>
                            <input type='text' className='px-9 py-5  w-full rounded-xl ' placeholder="Enter Your Email Address"   />
                            <button className='mt-5 md:mt-0 btn-kh md:absolute md:top-center !font-semibold md:right-[2%]'>Subscribe Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSubscribe;