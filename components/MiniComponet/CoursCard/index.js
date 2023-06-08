import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";
import { Button } from '../../Design';

const ClassCard = ({ course}) => {
    return (
        <div className="card flex rounded-2xl md:basis-[49%] lg:basis-[32%] flex-col bg-kh-white shadow-[0_2px_28px_0_rgba(0,0,0,0.09)]">
            <div className=" w-full overflow-hidden ">
                <Image
                    src={course?.thumbnail?.secure_url}
                    width={400}
                    height={250}
                    className="cardImage transition duration-500"
                    alt="classImage" />
            </div>
            <div className='flex justify-between items-center'>

                    <div className="mb-4 capitalize ml-2">
                        <h5 className='font-medium'><span className="text-rad-kh mr-1">Teacher : </span>{course?.teacherId?.firstName + ' '+ course?.teacherId?.lastName}</h5>
                        <h5 className='font-medium'><span className="text-rad-kh mr-1">Category :</span> {course?.categoryId?.name}</h5>
                        {/*<h5 className='font-medium'><span className="text-rad-kh mr-1">seat : </span>{seat}</h5>*/}
                    </div>

                <div>
                    <div className="text-right mb-4  mt-[6px] ">
                        <strong className="text-center font-medium w-fit text-lg rounded-bl-[10px] py-2 px-6 bg-rad-kh text-white">
                            $ {course?.sellPrice}
                        </strong>
                    </div>
                    <div className="text-right mb-4  mt-[6px] ">
                        <del className="text-center font-medium w-fit text-lg rounded-bl-[10px] py-2 px-6 bg-rad-kh text-white">
                            $ {course?.regularPrice}
                        </del>
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-8 pb-6 ">
                <Link  href={`/course/${course?._id}`} className="heading-kh mb-4 text-xl md:text-2xl transition-all duration-200 ease-in  title-link">{course?.name}</Link>
                <p className="font-normal text-base text-p-kh mb-5"> {course?.description?.substring(0, 120)}</p>
                <span className='bg-rad-kh w-full border-dashed border-b-[1.5px] mb-4 '></span>
                <button className={`${Button.btn_card} font-semibold`}>Join Course</button>
            </div>

        </div>
    );
};

export default ClassCard;