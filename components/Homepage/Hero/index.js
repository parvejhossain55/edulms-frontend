import React from 'react'
import Hero_girl from '../../../assect/img/hero-girl.png'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[#e7ddf4]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row lg:py-16">
                        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
                            <h6 className='text-rad-kh pt-7 font-medium text-lg  '>Play, Learn and Grow</h6>
                            <h1 className='heading-kh py-5 md:text-5xl  lg:text-6xl lg:leading-tight  '>Empowering Student Knowledge</h1>
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