import React from 'react';
import Image from "next/image"
import event1 from "../../../assect/img/event-1.png"
import event2 from "../../../assect/img/event-2.png"
import event3 from "../../../assect/img/event-3.png"
import event4 from "../../../assect/img/event-4.png"


const Event = () => {

    return (
        <div className="bg-amber-300 bg-fixed  ">
            <div className="containte-kh px-4 py-8 md:py-12 lg:py-16">
                <p className="font-sacramento text-xl text-center font-semibold text-white mb-5">Event</p>
                <h3 className="font-extrabold font-Catamaran text-center text-white text-2xl md:text-3xl lg:4x1 mb-8">Upcoming Event</h3>
                <div className="flex flex-col justify-center items-center  bg-kh-white gap-y-5 mb-5 py-3 w-full md:flex-row md:justify-between rounded-2xl ">
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12">
                        <Image src={event1}  alt='event-1'/>
                    </div>
                    <div className="flex flex-col justify-center gap-y-3 items-center w-full md:w-4/12">
                        <h4 className="heading-kh mg-2 ">Annual Cultural Programme</h4>
                        <p className=' text-kh-heading text-base  '> <span className="title-kh">time</span>: 8:00 AM - 10:00 PM</p>
                        <p className=' text-kh-heading text-base  '><span className="title-kh">location </span>: New York 56 Glassford Street Glasgow</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12 gap-y-5 ">
                        <strong className=' text-5xl lg:text-7xl text-rad-kh'>12</strong>
                        <p className=' text-rad-kh font-medium text-lg'>september </p>
                    </div>


                </div>
                <div className="flex flex-col justify-center items-center  bg-kh-white gap-y-5 mb-5 py-3 w-full md:flex-row md:justify-between rounded-2xl ">
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
                <div className="flex flex-col justify-center items-center  bg-kh-white gap-y-5 mb-5 py-3 w-full md:flex-row md:justify-between rounded-2xl ">
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12">
                        <Image src={event3}  alt='event-1'/>
                    </div>
                    <div className="flex flex-col justify-center gap-y-3 items-center w-full md:w-4/12">
                        <h4 className="heading-kh mg-2 ">World Drawing Day</h4>
                        <p className=' text-kh-heading text-base  '> <span className="title-kh">time</span>: 8:00 AM - 10:00 PM</p>
                        <p className=' text-kh-heading text-base  '><span className="title-kh">location </span>: New York 56 Glassford Street Glasgow</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12 gap-y-5 ">
                        <strong className=' text-5xl lg:text-7xl text-rad-kh'>25</strong>
                        <p className=' text-rad-kh font-medium text-lg'>March </p>
                    </div>


                </div>
                <div className="flex flex-col justify-center items-center  bg-kh-white gap-y-5 mb-5 py-3 w-full md:flex-row md:justify-between rounded-2xl ">
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12">
                        <Image src={event4}  alt='event-1'/>
                    </div>
                    <div className="flex flex-col justify-center gap-y-3 items-center w-full md:w-4/12">
                        <h4 className="heading-kh mg-2 ">Annual Cultural Programme</h4>
                        <p className=' text-kh-heading text-base  '> <span className="title-kh">time</span>: 8:00 AM - 10:00 PM</p>
                        <p className=' text-kh-heading text-base  '><span className="title-kh">location </span>: New York 56 Glassford Street Glasgow</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-4/12 gap-y-5 ">
                        <strong className=' text-5xl lg:text-7xl text-rad-kh'>30</strong>
                        <p className=' text-rad-kh font-medium text-lg'>April </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Event;