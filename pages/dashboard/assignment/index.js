import React from 'react';
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import DashboardHeader from "../../../components/dashboard/layouts/DashboardHeader";
import AssignmentList from "../../../components/dashboard/assignment/AssignmentList";
import withAuth from "../../../middleware/withAuth";

const Index = () => {
    return (
        <>
            <Head>
                <title>Assignments | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <DashboardHeader>
                <h1 className='uppercase font-semibold text-orange-600'>Submitted Assignment</h1>
            </DashboardHeader>
            <div className='p-4 h-screen'>
                <div className='bg-white shadow h-screen'>
                    <AssignmentList/>
                </div>
            </div>
        </>
    );
};

export default withAuth(Index);