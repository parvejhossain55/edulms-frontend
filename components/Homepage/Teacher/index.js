import React from 'react';
import Image from "next/image"
import teacherImage1 from '../../../assect/img/teacher-1.jpg'
import teacherImage4 from '../../../assect/img/teacher-4.jpg'

const Teacher = () => {

    return (
        <div className='bg-seandary-bg py-5 ' >
            <div className="containte-kh px-4 py-6 md:py-8 lg:py-10 ">
                <p className="title-kh  mb-4 ">Our Core Teacher</p>
                <h3 className="heading-kh mb-4  text-center">Meet Our Teacher</h3>
                <div className="flex items-center flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-between gap-3 ">
                    <div className="flex flex-col gap-3 basis-12  md:basis-5/12 lg:basis-3/12 ">
                        <Image src={teacherImage1} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>
                        <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>
                        <p className='title-kh text-sm -m-2 '>Music Teacher</p>
                    </div>
                    <div className="flex flex-col gap-3 basis-12 md:basis-5/12 lg:basis-3/12 ">
                    <Image src={teacherImage4} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>
                        <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>
                        <p className='title-kh text-sm -m-2 '>Music Teacher</p>
                    </div>
                    <div className="flex flex-col gap-3 basis-12 md:basis-5/12 lg:basis-3/12 ">
                    <Image src={teacherImage1} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>
                        <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Glims Bond</h3>
                        <p className='title-kh text-xs -m-2 '>Music Teacher</p>
                    </div>
                    <div className="flex flex-col gap-3 basis-12 md:basis-5/12 lg:basis-3/12 ">
                    <Image src={teacherImage4} className='w-full rounded-full border-8 border-rad-kh' alt='teacher-1'/>
                        <h3 className="heading-kh text-center mt-2 text-2xl lg:text-3xl">`Sherlock Bin</h3>
                        <p className='title-kh text-sm -m-2 '>Art Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;