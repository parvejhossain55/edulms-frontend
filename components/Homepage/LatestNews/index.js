import React from 'react';
import Image from "next/image";
import Blog1 from "../../../assect/img/blog-3.jpg";
import Blog2 from "../../../assect/img/blog-2.jpg";
import Blog3 from "../../../assect/img/blog-1.jpg";
import NewsCard from "../../MiniComponet/NewsCard";

const LatestNews = () => {
    return (
        <div className="classes bg-kh-white pb-20">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col items-center justify-center">
                    <span className="title-kh py-5 ">News & Blog </span>
                    <h3 className="heading-kh mb-8 text-3xl">Latest News</h3>
                </div>

                <div className="flex flex-col md:justify-between md:flex-row md:flex-wrap gap-y-5 ">
                    <NewsCard image={Blog2} title={'Red Green Color Blindness'}/>
                    <NewsCard image={Blog1}/>
                    <NewsCard image={Blog2}/>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;