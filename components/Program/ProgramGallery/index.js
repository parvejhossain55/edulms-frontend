import React from 'react';
import Image from "next/image"
import Link from "next/link";
import gallery1 from '../../../assect/img/gallery-1.jpg'
import gallery2 from '../../../assect/img/gallery-2.jpg'
import gallery3 from '../../../assect/img/gallery-3.jpg'
import {BiSearchAlt} from "react-icons/bi";


const ProgramGallery  = () => {
    return (
        <div className='Activities bg-seandary-bg'>
            <div className="containte-kh px-4 py-8 sm:py-10 md:py-12 lg:py-16">
                <p className="title-kh">Activities</p>
                <h1 className='heading-kh my-6 text-[28px] text-[35px] text-[45px]  text-center capitalize'>Our Activities Gallery</h1>
                <div className="flex flex-col justify-start md:flex-wrap md:flex-row gap-y-7 mt-10">


                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className='relative'>
                           <Image src={gallery1}
                                  style={{width:"auto" , height:"auto"}}
                                  className='w-full rounded-2xl  '
                                  alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className=' relative'>
                           <Image src={gallery2}
                                  style={{width:"auto" , height:"auto"}}
                                  className='w-full rounded-2xl  '
                                  alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className=' relative'>
                            <Image src={gallery3}
                                   style={{width:"auto" , height:"auto"}}
                                   className='w-full rounded-2xl  '
                                   alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className=' relative'>
                            <Image src={gallery3}
                                   style={{width:"auto" , height:"auto"}}
                                   className='w-full rounded-2xl  '
                                   alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className=' relative'>
                            <Image src={gallery2}
                                   style={{width:"auto" , height:"auto"}}
                                   className='w-full rounded-2xl  '
                                   alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start basis-full md:basis-6/12 lg:basis-4/12 activity-box transition-all">
                        <div className=' relative'>
                            <Image src={gallery1}
                                   style={{width:"auto" , height:"auto"}}
                                   className='w-full rounded-2xl  '
                                   alt='activities gallery'/>
                            <div className='flex justify-center items-center rounded-2xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in opacity-0 hover:opacity-100 translate-y-5 hover:translate-y-0 '>
                                <Link href='#' className=' font-bold text-4xl text-white '><BiSearchAlt/></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProgramGallery ;