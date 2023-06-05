import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import class2 from "../../../assect/img/class-2.jpg";
import class3 from "../../../assect/img/class-3.jpg";
import classShape1 from "../../../assect/img/class-shape-1.png";
import classShape2 from "../../../assect/img/class-shape-2.png";
import Pagination from "../../MiniComponet/Pagination";
import ClassCard from "../../MiniComponet/CoursCard";

const ProgramCard = () => {
    return (
        <div className="classes bg-seandary-bg relative z-10 pb-20 ">
            <div className="containte-kh px-4 py-10">
                <h1 className='heading-kh  text-2xl md:text-3xl my-6  '>Popular Class</h1>
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    <div className="flex justify-center items-center flex-col md:justify-between md:flex-row flex-wrap gap-y-5 ">
                        <ClassCard image={class1} title='Learning Disciplines'/>
                        <ClassCard image={class2} title='Drawing'/>
                        <ClassCard image={class3} title='Color Matching'/>
                        <ClassCard image={class1} title='Learning Disciplines'/>
                        <ClassCard image={class2} title='Drawing'/>
                        <ClassCard image={class3} title='Color Matching'/>
                    </div>
                    <Pagination/>
                </div>

            </div>
            <Image src={classShape1} className='hidden lg:block w-[320px] left-0 bottom-0 absolute -z-10' alt="class-shape-1"/>
            <Image src={classShape2} className='hidden lg:block w-[300px] right-0 bottom-0 absolute -z-10' alt="class-shape-2"/>
        </div>
    );
};

export default ProgramCard;