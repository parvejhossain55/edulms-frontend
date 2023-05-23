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
                         fbUrl= 'https://facebook.com',
                         twUrl= 'https://twitter.com/',
                         googleUrl= 'https://google.com',

                     }) => {
    return (
        <div className="hover-box flex basis-12 md:basis-[48%] lg:basis-[32%] relative">
            <Image src={image} className='w-full rounded-xl'  alt='Expart-taacher'/>
            <div className=" flex flex-col gap-y-4 opacity-0 hover:opacity-100 translate-y-2 hover:translate-y-0 bg-opacity-0 hover:bg-opacity-50 justify-center items-center rounded-xl hover:mb-3
             bg-black w-full h-full transition ease-in duration-500 absolute right-0 left-0  ">
                <h2 className='font-bold text-kh-white text-2xl capitalize '>{teacherName}</h2>
                <span className='text-white font-semibold'>{teacherTitle}</span>
                <div className="icon flex justify-start items-center gap-5 opacity-100 ">
                    <Link className='icon-kh' href={`${fbUrl}`}> <FaFacebookF/></Link>
                    <Link className='icon-kh' href={`${twUrl}`}><BsTwitter/></Link>
                    <Link className='icon-kh' href={`${googleUrl}`}><FaGooglePlusG/></Link>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;