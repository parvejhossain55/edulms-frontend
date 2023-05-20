import React from 'react';
import Head from "next/head";
import {Aboutuspage} from "../components";

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <main>
                <Aboutuspage />
            </main>
        </>
    );
};

export default AboutUs;