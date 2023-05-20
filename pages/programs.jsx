import React from 'react';
import Head from "next/head";
import Program from "../components/Program";

const Programs = () => {
    return (
        <>
            <Head>
                <title>Program us</title>
            </Head>
            <main>
                <Program />
            </main>
        </>
    );
};

export default Programs;