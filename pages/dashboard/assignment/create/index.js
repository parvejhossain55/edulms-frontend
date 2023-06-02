import React from 'react';
import DashboardHeader from "../../../../components/dashboard/layouts/DashboardHeader";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AssignmentCreateForm from "../../../../components/teacher/assignment/AssignmentCreateForm";
import withAuth from "../../../../middleware/withAuth";

const Index = () => {
    return (
        <>
            <Head>
                <title>Assignment Create | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <DashboardHeader>
                <h1 className='uppercase font-semibold text-orange-600'>Assignment Create Form</h1>
            </DashboardHeader>
            <div className='p-4 h-screen'>
                <div className='bg-white shadow h-screen'>
                    <AssignmentCreateForm/>
                </div>
            </div>
        </>
    );
};

export default withAuth(Index);