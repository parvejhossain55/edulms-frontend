import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";
import { Button } from '../../Design';

const ClassCard = ({
    image = class1,
    price = '$99',
    title = 'Color Matching',
    description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    age = '2-5year',
    time = '8-10pm',
    seat = '35'
}) => {
    return (
        <div className="card flex rounded-2xl md:basis-[49%] lg:basis-[32%] flex-col bg-kh-white shadow-[0_2px_28px_0_rgba(0,0,0,0.09)]">
            <div className=" w-full overflow-hidden ">
                <Image
                    src={image}
                    style={{width:"auto" , height:"auto"}}
                    className="cardImage transition duration-500"
                    alt="classImage" />
            </div>
            <div className="text-right mb-4  mt-[6px] ">
                <strong className="text-center font-medium w-fit text-lg rounded-bl-[10px] py-2 px-6 bg-rad-kh text-white">
                    {price}
                </strong>
            </div>
            <div className="flex flex-col px-8 pb-6 ">
                <Link className="heading-kh mb-4 text-xl md:text-2xl transition-all duration-200 ease-in  title-link" href='#'>{title}</Link>
                <p className="font-normal text-base text-p-kh mb-5"> {description}</p>
                <span className='bg-rad-kh w-full border-dashed border-b-[1.5px] mb-4 '></span>
                <div className="flex justify-between items-center mb-4 capitalize">
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">age : </span>{age}</h5>
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">time :</span> {time}</h5>
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">seat : </span>{seat}</h5>
                </div>
                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>
            </div>

        </div>
    );
};

export default ClassCard;