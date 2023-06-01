import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";
import { Button } from '../../Design';

const NewsCard = ({
    image = class1,
    title = 'Color Matching',
    description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    admin = 'jack john',
    date = '25 Dec 2022',
    BtnURL='#'


}) => {
    return (
        <div className="card bg-kh-white flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col drop-shadow-lg pb-8">

            <div className=" w-full overflow-hidden">
                <Image src={image} style={{width:'auto' ,height:"auto"}} className="cardImage transition duration-500" alt="classImage" />
            </div>
            <div className="flex justify-between items-center my-3.5 px-6 tex-base capitalize">
                <h3 className='font-normal'><span className="text-rad-kh pr-1">by Admin:</span>{admin}</h3>
                <p className='font-normal'><span className="text-rad-kh pr-1">date: </span>{date}</p>
            </div>
            <div className="flex flex-col px-6 gap-y-4">
                <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200'>{title}</Link>
                <p className="font-normal text-base text-p-kh mb-2"> {description}</p>
                <Link href={BtnURL} className={`${Button.btn_card} py-3`}>Read More</Link>
            </div>
        </div>
    );
};

export default NewsCard;