import React from 'react';
import Image from "next/image"
import class1 from '../../../assect/img/class-1.jpg'
import class2 from '../../../assect/img/class-2.jpg'
import class3 from '../../../assect/img/class-3.jpg'
import classShape1 from '../../../assect/img/class-shape-1.png'
import classShape2 from '../../../assect/img/class-shape-2.png'
import ClassCard from "../../MiniComponet/ClassCard";

const Classes = () => {
    return (
        <div className="classes bg-kh-white relative z-10 pb-8 ">
            <div className="containte-kh px-4 py-10   ">
                <div className="flex flex-col items-center justify-center">
                    <span className="title-kh py-5 ">Clesses </span>
                    <h3 className="heading-kh mb-8 text-3xl">Popular Classes</h3>
                </div>
                <div className="flex justify-center items-center flex-col md:justify-between md:flex-row flex-wrap gap-y-5">
                    <ClassCard image={class1} />
                    <ClassCard image={class2} title='Learning Disciplines'/>
                    <ClassCard image={class3} title={'Drawing'} age={'4-5 Year'} seat={'35'} time={'8:30 am'} />
                </div>
            </div>
                <Image src={classShape1} className='hidden lg:block w-[320px] left-0 bottom-0 absolute -z-10 ' alt="class-shape-1"/>
                <Image src={classShape2} className='hidden lg:block w-[300px] right-0 bottom-0 absolute -z-10 ' alt="class-shape-2"/>
        </div>
    );
};

export default Classes;