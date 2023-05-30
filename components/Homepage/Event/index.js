import React from 'react';
import {HeroImg} from "../../Design";
import Image from "next/image"
import event1 from "../../../assect/img/event-1.png"
import event2 from "../../../assect/img/event-2.png"
import event3 from "../../../assect/img/event-3.png"
import event4 from "../../../assect/img/event-4.png"
import {BiTime} from "react-icons/bi";
import {MdLocationOn} from "react-icons/md";


const Event = () => {

    return (
        <div className={`bg-[url("https://templates.envytheme.com/ketan/default/assets/img/event/event-bg.jpg")] ${HeroImg.primary_img} py-10`}>

            <div className='containte-kh !w-screen !px-2 py-10 '>
                <div className="flex-item-center justify-center flex-col">
                    <p className="font-sacramento text-xl text-center font-semibold text-white mb-5">Event</p>
                    <h3 className="font-extrabold font-Catamaran text-center text-white text-2xl md:text-3xl lg:4x1 mb-8">Upcoming Event</h3>
                </div>

              <div className="flex flex-col justify-center item-center lg:flex-row lg:flex-wrap lg:justify-between gap-y-5">

                  <div className="flex flex-col justify-center items-center bg-kh-white gap-y-5 md:flex-row md:justify-between basis-full md:basis-[49%] rounded-lg py-4 px-3  ">

                      <div className="flex flex-col justify-center items-center basis-full md:basis-[22%] ">
                          <Image src={event1} style={{width:"auto", height:"auto"}} alt='event-1'/>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-y-2.5 basis-full md:basis-[55%]">
                          <h4 className="heading-kh ">Annual Cultural Programme</h4>
                          <div className='text-[15px] flex justify-center items-center '>
                              <span className="title-kh mr-1"><BiTime/></span>
                              <p className=' text-kh-heading '>: 8:00 AM - 10:00 PM</p>
                          </div>
                          <div  className='text-[15px] flex justify-center items-center'>
                              <span className="title-kh "><MdLocationOn/> </span>
                              <p className='text-kh-heading '>: New York 56 Glassford Street Glasgow</p>
                          </div>
                      </div>

                      <div className="flex flex-col justify-center items-center w-full gap-y-4 basis-full md:basis-[22%] mb-2  ">
                          <strong className=' text-5xl lg:text-7xl text-rad-kh'>12</strong>
                          <p className=' text-rad-kh font-medium text-lg'>september </p>
                      </div>


                  </div>

                  <div className="flex flex-col justify-center items-center bg-kh-white gap-y-5 md:flex-row md:justify-between basis-full md:basis-[49%] rounded-lg py-4 px-3  ">

                      <div className="flex flex-col justify-center items-center basis-full md:basis-[22%] ">
                          <Image src={event1} style={{width:"auto", height:"auto"}} alt='event-1'/>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-y-2.5 basis-full md:basis-[55%]">
                          <h4 className="heading-kh ">Annual Cultural Programme</h4>
                          <div className='text-[15px] flex justify-center items-center '>
                              <span className="title-kh mr-1"><BiTime/></span>
                              <p className=' text-kh-heading '>: 8:00 AM - 10:00 PM</p>
                          </div>
                          <div  className='text-[15px] flex justify-center items-center'>
                              <span className="title-kh "><MdLocationOn/> </span>
                              <p className='text-kh-heading '>: New York 56 Glassford Street Glasgow</p>
                          </div>
                      </div>

                      <div className="flex flex-col justify-center items-center w-full gap-y-4 basis-full md:basis-[22%] mb-2  ">
                          <strong className=' text-5xl lg:text-7xl text-rad-kh'>12</strong>
                          <p className=' text-rad-kh font-medium text-lg'>september </p>
                      </div>


                  </div>
                  <div className="flex flex-col justify-center items-center bg-kh-white gap-y-5 md:flex-row md:justify-between basis-full md:basis-[49%] rounded-lg py-4 px-3  ">

                      <div className="flex flex-col justify-center items-center basis-full md:basis-[22%] ">
                          <Image src={event1} style={{width:"auto", height:"auto"}} alt='event-1'/>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-y-2.5 basis-full md:basis-[55%]">
                          <h4 className="heading-kh ">Annual Cultural Programme</h4>
                          <div className='text-[15px] flex justify-center items-center '>
                              <span className="title-kh mr-1"><BiTime/></span>
                              <p className=' text-kh-heading '>: 8:00 AM - 10:00 PM</p>
                          </div>
                          <div  className='text-[15px] flex justify-center items-center'>
                              <span className="title-kh "><MdLocationOn/> </span>
                              <p className='text-kh-heading '>: New York 56 Glassford Street Glasgow</p>
                          </div>
                      </div>

                      <div className="flex flex-col justify-center items-center w-full gap-y-4 basis-full md:basis-[22%] mb-2  ">
                          <strong className=' text-5xl lg:text-7xl text-rad-kh'>12</strong>
                          <p className=' text-rad-kh font-medium text-lg'>september </p>
                      </div>


                  </div>
                  <div className="flex flex-col justify-center items-center bg-kh-white gap-y-5 md:flex-row md:justify-between basis-full md:basis-[49%] rounded-lg py-4 px-3  ">

                      <div className="flex flex-col justify-center items-center basis-full md:basis-[22%] ">
                          <Image src={event1} style={{width:"auto", height:"auto"}} alt='event-1'/>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-y-2.5 basis-full md:basis-[55%]">
                          <h4 className="heading-kh ">Annual Cultural Programme</h4>
                          <div className='text-[15px] flex justify-center items-center '>
                              <span className="title-kh mr-1"><BiTime/></span>
                              <p className=' text-kh-heading '>: 8:00 AM - 10:00 PM</p>
                          </div>
                          <div  className='text-[15px] flex justify-center items-center'>
                              <span className="title-kh "><MdLocationOn/> </span>
                              <p className='text-kh-heading '>: New York 56 Glassford Street Glasgow</p>
                          </div>
                      </div>

                      <div className="flex flex-col justify-center items-center w-full gap-y-4 basis-full md:basis-[22%] mb-2  ">
                          <strong className=' text-5xl lg:text-7xl text-rad-kh'>12</strong>
                          <p className=' text-rad-kh font-medium text-lg'>september </p>
                      </div>


                  </div>
              </div>





                <div className="flex  hidden flex-col justify-center items-center  bg-kh-white gap-y-5 mb-5 py-3 w-full md:flex-row md:justify-between rounded-2xl ">
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12">
                        <Image src={event2}  alt='event-1'/>
                    </div>
                    <div className="flex flex-col justify-center gap-y-3 items-center w-full md:w-4/12">
                        <h4 className="heading-kh mg-2 ">World Kids Day</h4>
                        <p className=' text-kh-heading text-base  '> <span className="title-kh">time</span>: 8:00 AM - 10:00 PM</p>
                        <p className=' text-kh-heading text-base  '><span className="title-kh">location </span>: New York 56 Glassford Street Glasgow</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12 gap-y-5 ">
                        <strong className=' text-5xl lg:text-7xl text-rad-kh'>18</strong>
                        <p className=' text-rad-kh font-medium text-lg'>January </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Event;