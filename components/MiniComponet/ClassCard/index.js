import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";
import Btn from "../btn";

const ClassCard = ({
                         image=class1 ,
                         price='$99',
                         title='Color Matching',
                         description='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
                         age='2-5year',
                         time='8-10pm',
                         seat='35'
                     }) => {
    return (
        <div className="card flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col bg-kh-white drop-shadow-lg">
            <div className=" w-full overflow-hidden">
                <Image src={image} className="cardImage w-full transition duration-400 ease-in " alt="classImage"/>
            </div>
            <div className="text-right mb-2">
                <button className="btn-kh !py-2 !rounded-t-none max-w-fit">{price}</button>
            </div>
            <div className="flex flex-col px-4 pb-6 ">
                <Link className="heading-kh mb-4 text-xl md:text-2xl transition-all duration-200 ease-in  title-link" href='#'>{title}</Link>
                <p className="pregrap-kh mb-5"> {description}</p>
                <span className='bg-rad-kh w-full border-dashed border-b-[1.5px] mb-4 '></span>
                <div className="flex justify-between items-center mb-4 capitalize">
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">age : </span>{age}</h5>
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">time :</span> {time}</h5>
                    <h5 className='font-medium'><span className="text-rad-kh mr-1">seat : </span>{seat}</h5>
                </div>

                <Btn value={'buy now'}/>


                {/*<button className="btn-kh z-0">Join Class</button>*/}
            </div>

        </div>
    );
};

export default ClassCard;