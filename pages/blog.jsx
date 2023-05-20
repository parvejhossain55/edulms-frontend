import React from 'react';
import Head from "next/head";
import {BlogPage} from "../components";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main>
                <BlogPage />
            </main>
        </>
    );
};

export default Blog;