import React from 'react';
import Head from "next/head";
import { Contactuspage} from "../components";

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main>
                <Contactuspage />
            </main>
        </>
    );
};

export default ContactUs;