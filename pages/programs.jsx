import React from 'react';
import Head from "next/head";
import {Footer, Nav} from "../components";
import Program from "../components/Program";

const Programs = () => {
    return (
        <>
            <Head>
                <title>Program us</title>
            </Head>
            <main>
                <Nav />
                <Program />
                <Footer />
            </main>
        </>
    );
};

export default Programs;