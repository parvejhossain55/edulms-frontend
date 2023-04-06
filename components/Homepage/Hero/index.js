import React from 'react'
import Hero_girl from '../../../assect/img/hero-girl.png'
import  banner_1 from '../../../assect/img/banner-shape-1.png'
import banner_2 from '../../../assect/img/banner-shape-2.png'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[#e7ddf4]">
                <div className="containte-kh px-4 ">
                    <div className="hidden lg:block">
                        <Image src={banner_1} className='moving-banner left-6 ' alt="banner" />
                        <Image src={banner_2} className='moving-banner left-2/4 ' alt="banner" />
                    </div>
                    <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row lg:py-20">
                        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
                            <h6 className='text-rad-kh pt-7 font-medium text-lg  '>Play, Learn and Grow</h6>
                            <h1 className='heading-kh py-5 text-3xl md:text-5xl  lg:text-6xl lg:leading-tight  '>Empowering Student Knowledge</h1>
                            <p className='pregrap-kh w-auto'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div className="flex justify-center items-center my-6 lg:justify-start">
                                <button className='btn-kh mr-7'> Learn More </button>
                                <button className='btn-kh' > Find Out More</button>
                            </div>

                        </div>
                        <div className="flex justify-center items-center lg:w-1/2">
                            <Image src={Hero_girl} className='w-full' alt="authImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection