import React from 'react'
import banner_2 from '../../../assect/img/banner-shape-2.png'
import banner_3 from '../../../assect/img/banner-shape-3.png'
import banner_4 from '../../../assect/img/banner-shape-4.png'

import  heroLrftBottom from '../../../assect/img/hero-left-Bttom-6.png'
import heroLeft from '../../../assect/img/hero-banner-shape-5.png'
import rightBanner_3 from '../../../assect/img/hero-right-banner-1.png'
import rightBanner_4 from '../../../assect/img/hero-right-banner-2.png'


import Image from 'next/image'
import { Button } from '../../Design'

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[#e7ddf4] mb-10 relative z-0">
                <Image src={heroLeft}
                       className= ' hidden lg:block absolute -z-10 left-0 top-0 '
                       width={300}
                       height={300}
                       alt="banner" />
                <Image src={heroLrftBottom}
                       className= 'hidden lg:block absolute -z-10 left-5 bottom-0 '
                       width={250}
                       height={240}
                       alt="banner" />
                <div className="containte-kh px-4   ">
                    <div className="hidden lg:block lg:pb-8">
                        <Image src={banner_2} className='moving-banner left-2/4 top-4' alt="banner" />
                    </div>
                        <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row  mb-6 ">
                            <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 gap-y-5  ">
                                <h6 className='text-rad-kh pt-7 font-medium text-lg  '>Play, Learn and Grow</h6>
                                <h1 className='heading-kh py-5 text-3xl md:text-5xl lg:text-[54px] lg:leading-tight  '>
                                    We are a Childcare Professional
                                </h1>
                                <p className='font-normal text-base text-p-kh w-auto pr-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <div className="flex justify-center items-center  lg:justify-start  ">
                                    <button className={`${Button.btn_primary} mr-7`}> Learn More </button>
                                    <button className={`${Button.btn_primary}`}> Find Out More</button>
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 py-5 ">
                                <div className=" relative inline-flex ">
                                    <Image src={rightBanner_3}
                                           className='absolute z-0 '
                                           width={650}
                                           height={450}
                                           alt="authImage"
                                    />
                                    <Image src={rightBanner_4}
                                           className=' z-10 top-1 '
                                           width={650}
                                           height={450}
                                           alt='right-banner'/>

                                </div>
                            </div>
                        </div>
                    <div className="relative pb-10  hidden lg:block  ">
                        <Image src={banner_4} height={100} width={100} className=' mx-auto animate-[slideTopBottom_4s_infinite]  bottom-10 z-10 ' alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection