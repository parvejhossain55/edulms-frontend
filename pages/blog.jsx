import React from 'react';
import Head from "next/head";
import {BlogPage, Footer, Nav} from "../components";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main>
                <Nav />
                <BlogPage />
                <Footer />
            </main>
        </>
    );
};

export default Blog;