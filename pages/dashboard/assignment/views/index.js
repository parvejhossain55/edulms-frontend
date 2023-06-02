import React from 'react';
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import DashboardHeader from "../../../../components/dashboard/layouts/DashboardHeader";
import AssignmentListTable from "../../../../components/teacher/assignment/AssignmentListTable";
import withAuth from "../../../../middleware/withAuth";

const Index = () => {
    return (
        <>
            <Head>
                <title>Assignment List | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <DashboardHeader>
                <h1 className='uppercase font-semibold text-orange-600'>Assignment List</h1>
            </DashboardHeader>
            <div className='p-4 h-screen'>
                <div className='bg-white shadow h-screen'>
                    <AssignmentListTable/>
                </div>
            </div>
        </>
    );
};

export default withAuth(Index);