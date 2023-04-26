import React from 'react';
import BlogHero from "./BlogHero";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";

const BlogPage = () => {
    return (
        <div>
            <BlogHero/>
            <BlogCard/>
            <BlogPost/>
        </div>

    );
};

export default BlogPage;