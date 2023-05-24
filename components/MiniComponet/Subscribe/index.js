import React from 'react';

import {Button} from "../../Design";
import newsLetter1 from '../../../assect/img/newsletter-shape-1.png'
import newsLetter2 from '../../../assect/img/newsletter-shape-2.png'
import Image from "next/image";

const Subscribe  = ({title='Do You Want To Know Get Update What’s Upcoming'}) => {
    return (
        <div className='bg-[#fdeee9] relative z-20 py-8 '>
            <div className="containte-kh py-12 md:py-10 lg:py-20 ">
                <div className=" flex flex-col lg:flex-row lg:justify-between  gap-y-5 z-0 ">

                    <h1 className="basis-ful md:basis-1/2 md:leading-tight heading-kh text-2xl md:text-[35px] mt-3 font-bold ">{title}</h1>
                    <div className='md:relative basis-full md:basis-1/2 mb-2 flex flex-col justify-start md:flex-row
                                    md:justify-center md:items-center rounded-xl '>
                        <input type='text' className='px-9 py-5  w-full rounded-xl ' placeholder="Enter Your Email Address"   />
                        <button className={`${Button.btn_primary} mt-5 md:mt-0 md:absolute md:top-center font-semibold w-fit md:right-[2%]`}>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <Image src={newsLetter1} width={250} height={200 } className='absolute bottom-1/4 left-1 -z-10 hidden md:block' alt='news letter'/>
            <Image src={newsLetter2} width={250} height={200 } className='absolute right-1 bottom-3 -z-10 hidden md:block' alt='news letter'/>
        </div>
    );
};

export default Subscribe ;