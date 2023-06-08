import Head from 'next/head';
import React from 'react';
import SingleCoursePage from '../../components/Homepage/Courses/SingleCourse';

const SingleCourse = () => {
    return (
        <div>
            <Head>
                <title>Single Course Page</title>
            </Head>
            <main>
                <SingleCoursePage />
            </main>
        </div>
    );
};

export default SingleCourse;