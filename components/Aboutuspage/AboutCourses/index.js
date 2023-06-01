import React from 'react';
import Image from 'next/image'
import aboutCourse from '../../../assect/img/AboutCourses -1.png';
import aboutCourse_shape_1 from '../../../assect/img/AboutCourses-shape-1.png';
import aboutCourse_shape_2 from '../../../assect/img/AboutCourses-shape-2.png';
import aboutCourse_shape_3 from '../../../assect/img/AboutCourses-shape-3.png';
import { Button,Element } from '../../Design';

const AboutCourses = () => {
    return (
        <div className='bg-kh-white' id="AboutCourses ">
            <div className="containte-kh py-6 md:py-8 lg:py-10 relative">
                <Image
                    src={aboutCourse_shape_1}
                    width={200}
                    height={200}
                    alt='aboutCourse_shape_1'
                    className='hidden lg:block  animate-[slideInRight_4s_ease-in-out_infinite] absolute left-1/2 top-10 z-20 ' />
                <Image
                    src={aboutCourse_shape_2}
                    width={200}
                    height={200}
                    alt='aboutCourse_shape_1'
                    className='hidden lg:block animate-[slideInRight_4s_ease-in-out_infinite] absolute bottom-20 right-0 z-0 ' />
                <div className="flex flex-col lg:justify-between lg:flex-row gap-y-5 ">
                    <div className="flex flex-col justify-start lg:basis-1/2 gap-y-8 ">
                        <span className="font-sacramento  font-semibold text-rad-kh -mb-3 ">Courses</span>
                        <h1 className="heading-kh text-2xl font-bold lg:text-[45px] lg:leading-[55px]">Request a Tutors For Free Online Class</h1>

                        <p className={`${Element.paragraphs}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <p className={`${Element.paragraphs}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className={`${Button.btn_card}`} >Search Tutor</button>

                    </div>
                    <div className="flex justify-center items-center lg:basis-1/2 z-0 relative  ">
                        <Image
                            src={aboutCourse_shape_3}
                            width={230}
                            height={180}
                            alt='aboutCourse_shape_1'
                            className='hidden lg:block animate-[slideInRight_4s_ease-in-out_infinite]
                               absolute bottom-20 left-0   '
                        />
                        <Image
                            src={aboutCourse}
                            width={200}
                            height={200}
                            className='w-full overflow-hidden z-20 '
                            alt="who-we-are-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCourses;