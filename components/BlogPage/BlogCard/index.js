import React from 'react';

import Blog1 from "../../../assect/img/blog-3.jpg";
import Blog2 from "../../../assect/img/blog-2.jpg";
import Blog3 from "../../../assect/img/blog-1.jpg";
import Pagination from "../../MiniComponet/Pagination";
// import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import NewsCard from "../../MiniComponet/NewsCard";


const BlogCard = () => {
    return (
        <div className="classes bg-kh-white ">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col gap-y-12 justify-center items-center">
                    <div className="flex justify-center items-center flex-col md:justify-between md:flex-row  flex-wrap gap-y-5">
                        <NewsCard image={Blog1} BtnURL='/blog-details'/>
                        <NewsCard image={Blog2} BtnURL='/blog-details'/>
                        <NewsCard image={Blog3}/>
                        <NewsCard image={Blog1}/>
                        <NewsCard image={Blog2}/>
                        <NewsCard image={Blog3}/>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;