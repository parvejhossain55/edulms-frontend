import React from 'react';
import Head from "next/head";
import {BlogDetail} from "../components";


const BlogDetails = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <main>
                <BlogDetail/>
            </main>
        </>
    );
};

export default BlogDetails;