import React from 'react';
// import Image from "next/image"
import teacherImage1 from '../../../assect/img/teacher-1.jpg'
import teacherImage4 from '../../../assect/img/teacher-4.jpg'
import teacherImage8 from '../../../assect/img/teacher-8.jpg'
import teacherImage9 from '../../../assect/img/teacher-9.jpg'
import TeacherCard from "../../MiniComponet/TeacherCard";

const Teacher = () => {

    return (
        <div className='bg-seandary-bg py-5 ' >
            <div className="containte-kh px-4 py-6 md:py-8 lg:py-10 ">
                <p className="title-kh  mb-4 ">Our Core Teacher</p>
                <h3 className="heading-kh mb-4 text-[28px] md:text-[35px] lg:text-[45px] mb-8 text-center">Meet Our Teacher</h3>
                <div className="flex flex-col justify-center items-center md:justify-evenly md:flex-row md:flex-wrap gap-y-4 ">

                    <div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%]">
                        <TeacherCard image={teacherImage1}/>
                    </div>
                    <div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%]">
                        <TeacherCard image={teacherImage4}/>
                    </div>
                    <div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%]">
                        <TeacherCard image={teacherImage8} teacherName={'kamrul hasan'}/>
                    </div>
                    <div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%]">
                        <TeacherCard image={teacherImage9} teacherName={'md riad'}/>
                    </div>

                    {/*<div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%] ">*/}
                    {/*    <Image src={teacherImage1} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>*/}
                    {/*    <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>*/}
                    {/*    <p className='title-kh text-sm -m-2 '>Music Teacher</p>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%] ">*/}
                    {/*<Image src={teacherImage4} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>*/}
                    {/*    <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>*/}
                    {/*    <p className='title-kh text-sm -m-2 '>Music Teacher</p>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%] ">*/}
                    {/*<Image src={teacherImage1} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>*/}
                    {/*    <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>*/}
                    {/*    <p className='title-kh text-xs -m-2 '>Music Teacher</p>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col gap-y-4 basis-full md:basis-[32%] lg:basis-[23%] ">*/}
                    {/*<Image src={teacherImage4} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>*/}
                    {/*    <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Sherlock Bin</h3>*/}
                    {/*    <p className='title-kh text-sm -m-2 '>Art Teacher</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Teacher;