import React from 'react';
import Image from "next/image"
import WhoWeAreImage from '../../../assect/img/who-we-are-2.png'
const WhoWeAre = () => {
    return (
        <div className='who-we-are bg-kh-white'>
            <div className="containte-kh lg:py-20">

                <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row ">
                    <div className="flex flex-col lg:w-1/2 pr-4 ">
                        <div className="flex flex-col gap-y-4">
                            <span className='title-kh !text-left' >Who We Are</span>
                            <h1 className='heading-kh py-5 text-2xl  md:text-3xl lg:text-[45px] lg:leading-[50px] '>
                                Learn About Our Work and Cultural Activities
                            </h1>
                            <p className='pregrap-kh leading-tight '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <p className='pregrap-kh leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex justify-between items-center flex-wrap gap-y-5 mt-3">
                                <div className="flex justify-self-start items-center w-1/2 ">
                                    <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>1</span>
                                    <h3 className="text-kh-heading text-base font-semibold ml-4">Homelike Environment</h3>
                                </div>
                                <div className="flex justify-self-start items-center w-1/2">
                                    <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>2</span
                                    ><h3 className="text-kh-heading text-base font-semibold ml-4">Quality Educatorst</h3>
                                </div>
                                <div className="flex justify-self-start items-center w-1/2 ">
                                    <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>3</span>
                                    <h3 className="text-kh-heading text-base font-semibold ml-4">Safety and Security</h3>
                                </div>
                                <div className="flex justify-self-start items-center w-1/2 ">
                                    <span className='w-7 h-7 text-kh-white bg-rad-kh hover:bg-yellow-kh text-sm font-semibold text-center rounded-full pt-1'>4</span>
                                    <h3 className="text-kh-heading text-base font-semibold ml-4">Play to Learn</h3>
                                </div>
                                <button className="btn-kh mt-3 ">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-4 items-center lg:w-1/2">
                        <Image src={WhoWeAreImage}
                               className=" "
                               width={"100%"}
                               height={'100%'}
                               alt='Who We Are Image'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;