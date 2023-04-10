import React from 'react';
import Head from "next/head";
import { Contactuspage, Footer, Nav} from "../components";

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main>
                <Nav />
                <Contactuspage />
                <Footer />
            </main>
        </>
    );
};

export default ContactUs;