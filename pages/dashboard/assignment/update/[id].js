import React from 'react';
import DashboardHeader from "../../../../components/dashboard/layouts/DashboardHeader";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AssignmentCreateForm from "../../../../components/teacher/assignment/AssignmentCreateForm";
import {useRouter} from "next/router";
import withAuth from "../../../../middleware/withAuth";

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
                <title>Assignment Update | {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <DashboardHeader>
                <h1 className='uppercase font-semibold text-orange-600'>Assignment Update Form</h1>
            </DashboardHeader>
            <div className='p-4 h-screen'>
                <div className='bg-white shadow h-screen'>
                    <AssignmentCreateForm id={id}/>
                </div>
            </div>
        </>
    );
};

export default withAuth(Id);