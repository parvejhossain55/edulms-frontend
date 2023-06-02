import React, {useEffect, useState} from 'react';
import {Table, Tag, Space} from 'antd'
import {getAllAssignmentRequest} from "../../../APIRequest/assignmentAPIRequest";
import Link from "next/link";
import withAuth from "../../../middleware/withAuth";

const AssignmentListTable = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const getAssignments = await getAllAssignmentRequest();
            setLoading(false)
            setAssignments(getAssignments)
        })()
    }, [])

    const columns = [
        {
            title: 'Assignment Name',
            dataIndex: 'assignmentName',
            key: 'assignmentName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Course',
            dataIndex: 'courseName',
            key: 'courseName',
        },
        {
            title: 'Module',
            dataIndex: 'courseModule',
            key: 'courseModule',
        },
        /*{
            title: 'status',
            key: 'status',
            dataIndex: 'status',
            render: (status, tags) => (
                <>

                    <Tag key={status}>
                        {status.toUpperCase()}
                    </Tag>
                </>
            ),
        },*/
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Updated Date',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/dashboard/assignment/update/${record?._id}`} className='bg-green-600 py-2 px-3 rounded text-white'>Edit</Link>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <>
            <Table loading={loading} columns={columns} dataSource={assignments} />;
        </>
    );
};

export default withAuth(AssignmentListTable) ;