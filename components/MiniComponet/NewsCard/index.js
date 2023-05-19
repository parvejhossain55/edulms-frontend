import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";

const NewsCard = ({
                  image=class1 ,
                  title='Color Matching',
                  description='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
                  admin='jack john',
                  date='25 Dec 2022',


              }) => {
    return (
        <div className="card bg-kh-white flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col drop-shadow-lg pb-8">

            <div className=" w-full overflow-hidden">
                <Image src={image} width={'100%'} height={'100%'} className="cardImage transition duration-400 ease-in " alt="classImage"/>
            </div>
            <div className="flex justify-between items-center my-3.5 px-3 tex-base capitalize">
                <h3 className='font-normal'><span className="text-rad-kh pr-1">by Admin:</span>{admin}</h3>
                <p className='font-normal'><span className="text-rad-kh pr-1">date: </span>{date}</p>
            </div>
            <div className="flex flex-col px-3 gap-y-4">
                <Link href='#' className='text-xl md:text-2xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200'>{title}</Link>
                <p className="pregrap-kh mb-2"> {description}</p>
                <button className="btn-kh pb-5 z-0">Join Class</button>
            </div>

        </div>
    );
};

export default NewsCard;