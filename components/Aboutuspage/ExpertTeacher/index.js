import React from 'react';
import teacher_8 from '../../../assect/img/teacher-8.jpg'
import teacher_9 from '../../../assect/img/teacher-9.jpg'
import teacher_10 from '../../../assect/img/teacher-10.jpg'
import { Button } from '../../Design';
import TeacherCard from "../../MiniComponet/TeacherCard";



const ExpertTeacher = () => {
    return (
        <div className="bg-kh-white overflow-hidden ">
            <div className="containte-kh py-6 md:py-8 lg:py-16 ">
                <div className="flex flex-col  md:flex-wrap md:flex-row md:justify-between gap-y-6 md:gap-y-7 " >
                    <div className="flex flex-col justify-start gap-y-6 basis-12 md:basis-[48%] lg:basis-[32%]">
                        <p className='text-rad-kh text-base  '>Expert Teacher</p>
                        <h2 className='heading-kh text-2xl md:text-4xl lg:text-2xl xl:text-4xl '>Our Online Instructor</h2>
                        <p className='pregrap-kh'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                        </p>
                        <button className={`${Button.btn_card}`}> Instructor Profile</button>
                    </div>
                    <TeacherCard />
                    <TeacherCard image={teacher_10} teacherName={'art teacher'}/>
                    <TeacherCard image={teacher_8} />
                    <TeacherCard image={teacher_9} teacherName={'Smith Broke'}/>
                    <TeacherCard image={teacher_10} teacherName={'Priestly Herbart'}/>
                </div>
            </div>
        </div>
    );
};

export default ExpertTeacher;