import React from 'react';
import BlogCard from "../../MiniComponet/BlogCard";
import axiosInstance from "../../../helper/axiosInstance";



const LatestBlog = ({posts}) => {
    return (
        <div className="classes bg-kh-white pb-20">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col items-center justify-center">
                    <span className="title-kh py-5 ">News & Blog </span>
                    <h3 className="heading-kh mb-8 text-3xl">Latest Blog</h3>
                </div>

                <div className="flex flex-col md:justify-between md:flex-row md:flex-wrap gap-y-5 ">
                    {
                        posts?.map(post => (
                            <BlogCard post={post} key={post?._id}/>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default LatestBlog;