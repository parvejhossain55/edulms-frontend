import React from 'react';
import Head from "next/head";
import {Aboutuspage, Footer, Nav} from "../components";

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <main>
                <Nav />
                <Aboutuspage />
                <Footer />
            </main>
        </>
    );
};

export default AboutUs;