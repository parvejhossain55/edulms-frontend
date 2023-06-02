import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Drawer , Select , Table, Tag, Space ,Empty } from "antd";
import { getCoursesDropDownByTeacher} from "../../../APIRequest/courseAPIRequest";
import { getModulesDropDownByCourseTeacher} from "../../../APIRequest/courseModuleApiRequest";
import {getAllAssignmentRequest, getSubmittedAssignments} from "../../../APIRequest/assignmentAPIRequest";
import {useRouter} from "next/router";
import { EyeOutlined } from '@ant-design/icons';
import AssignmentDetails from './AssignmentDetails';

const SubmittedAssignment = () => {
    const [courses, setCourses] = useState();
    const [courseSelect, setCourseSelect] = useState('')
    const [moduleSelect, setModuleSelect] = useState('')
    const [moduleDropDown, setModuleDropDown] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [assignmentDetails, setAssignmentDetails] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const course = await getCoursesDropDownByTeacher();
            setCourses(course)
        })()
    }, [])

    useEffect(() => {
        if (courseSelect.length > 0) {
            (async () => {
                const modulesData = await getModulesDropDownByCourseTeacher(courseSelect);
                setModuleDropDown(modulesData)
            })()
        }
    }, [courseSelect])

    useEffect(()=>{
        (async ()=>{
            if (moduleSelect){
                setLoading(true)
                const getAssignments = await getSubmittedAssignments(courseSelect, moduleSelect);
                setLoading(false)
                setAssignments(getAssignments[0]?.rows)
            }

        })()
    }, [moduleSelect])

    const showDrawer = (record) => {
        setOpen(true);
        setAssignmentDetails(record)

    };

    const onClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            title: 'Students Name',
            dataIndex: 'assignmentName',
            key: 'fullName',
            render: (_, record) => <p>{record?.student?.fullName}</p>,
        },
        {
            title: 'Assignment Name',
            dataIndex: 'assignmentName',
            key: 'assignmentName',
            render: (_, record) => <p>{record?.assignment?.assignmentName}</p>,
        },
        
        {
            title: 'Submitted Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Updated Date',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'status',
            key: 'status',
            dataIndex: 'status',
            render: (status, record) => (
                <>
                    <Tag key={record?._id} className={`${status?.toUpperCase() === 'ACTIVE' ? 'bg-green-300' : 'bg-orange-300'} `}>
                        {status?.toUpperCase()}
                    </Tag>
                </>
            ),
        },
        {
            title: 'Mark',
            key: 'mark',
            dataIndex: 'mark',
            render: (mark, record) => (

                <Space size="middle">
                    <Tag
                        className='bg-green-300'
                    >{mark}/10
                    </Tag>
                </Space>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'createdAt',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type=""
                        onClick={() => showDrawer(record)}
                        className='bg-[#140342] text-white flex items-center hover:bg-[#100729]'
                    >
                        <EyeOutlined style={{ marginRight: '5px' }} />
                        <span>View</span>
                    </Button>
                    <Drawer title="Assignment" placement="right" onClose={onClose} open={open} >
                        <AssignmentDetails record={assignmentDetails}/>
                    </Drawer>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Form
                name="basic"
                layout='vertical'
                form={form}
                autoComplete="on"
                className='p-8'
            >
                <Form.Item
                    name="courseId"
                    label="Select a course"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a course!'
                        },
                    ]}
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                        marginRight: '10px'
                    }}
                >

                    <Select
                        showSearch
                        placeholder="Select a Course"
                        optionFilterProp="children"
                        onChange={(e) => {
                            setCourseSelect(e)
                        }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={courses}
                    />
                </Form.Item>

                <Form.Item
                    name="courseModuleId"
                    label="Select a module"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a module!'
                        },
                    ]}
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                    }}
                >

                    <Select
                        showSearch
                        placeholder="Select a Module"
                        optionFilterProp="children"
                        onChange={(e) => {
                            setModuleSelect(e)
                        }}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={moduleDropDown}
                    />
                </Form.Item>
            </Form>

            {/* {moduleDropDown.length > 0 ? ( */}

            <Table loading={loading} columns={columns} dataSource={assignments} />

            {/* ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )} */}
        </>
    );
};

export default SubmittedAssignment;