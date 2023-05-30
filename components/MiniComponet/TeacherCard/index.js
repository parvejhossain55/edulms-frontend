import React from 'react';
import Image from "next/image";
import teacher_10 from "../../../assect/img/teacher-10.jpg";
import {FaFacebookF, FaGooglePlusG} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import Link from "next/link";

const TeacherCard = ({
        image=teacher_10,
        teacherName='Glims Bond',
        teacherTitle='Music Teacher',
        fbUrl= '#',
        twUrl= '#',
        googleUrl= '#',
    }) => {
    return (
        <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative">
            <Image src={image} className='w-full rounded-xl'  alt='Expart-taacher'/>


            <div className='flex justify-center items-center w-full h-full bg-[#000] bg-opacity-0 hover:bg-opacity-50 absolute right-0 left-0  transition ease-in duration-500  rounded-xl'>

                <div className=" flex flex-col justify-center items-center gap-y-4 opacity-0 hover:opacity-100  bg-transparent
              w-full h-full transition ease-in duration-500 translate-y-5 hover:translate-y-0 ">
                    <h2 className='font-bold text-kh-white text-2xl capitalize '>{teacherName}</h2>
                    <span className='text-white font-semibold'>{teacherTitle}</span>
                    <div className="icon flex justify-start items-center gap-x-5 opacity-100 ">
                        <Link className='flex justify-center items-center bg-kh-white w-10 h-10 rounded-full text-yellow-kh hover:bg-yellow-kh hover:text-kh-white transition-all duration-500 ease-in' href={`${fbUrl}`}> <FaFacebookF/></Link>
                        <Link className='flex justify-center items-center bg-kh-white w-10 h-10 rounded-full text-yellow-kh hover:bg-yellow-kh hover:text-kh-white transition-all duration-500 ease-in' href={`${twUrl}`}><BsTwitter/></Link>
                        <Link className='flex justify-center items-center bg-kh-white w-10 h-10 rounded-full text-yellow-kh hover:bg-yellow-kh hover:text-kh-white transition-all duration-500 ease-in' href={`${googleUrl}`}><FaGooglePlusG/></Link>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default TeacherCard;