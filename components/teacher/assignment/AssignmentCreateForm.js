import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Select, Skeleton} from "antd";
import {getCoursesDropDownByTeacher} from "../../../APIRequest/courseAPIRequest";
import {getModulesDropDownByCourseTeacher} from "../../../APIRequest/courseModuleApiRequest";
import {createAssignmentRequest, getSingleAssignment} from "../../../APIRequest/assignmentAPIRequest";
import {useRouter} from "next/router";
import Link from "next/link";

const AssignmentCreateForm = ({id}) => {
    const [courses, setCourses] = useState();
    const [courseSelect, setCourseSelect] = useState('')
    const [moduleDropDown, setModuleDropDown] = useState([]);
    const router = useRouter();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [assignmentFile, setAssignmentFile] = useState(null);

    const onFinish = async (values)=>{
        if (file){
            values.file = file;
        }else {
            values.file = assignmentFile;
        }
        setLoading(true)
        const result = await createAssignmentRequest(values, id);
        setLoading(false);

        if (id && result?.modifiedCount > 0) {
            message.success('Assignment updated successfully!');
            await router.push('/dashboard/assignment/views');
        }
        if (result?.assignment){
            message.success('Assignment created successfully!');
            form.resetFields();
        }



    }

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

    useEffect(()=> {
        (async ()=>{
            if (id){
                setDataLoading(true)
                const assignment = await getSingleAssignment(id);
                setDataLoading(false)
                form.setFieldsValue({
                    courseId: assignment?.courseId,
                    courseModuleId: assignment?.courseModuleId,
                    assignmentName: assignment?.assignmentName,
                    assignmentDescription: assignment?.assignmentDescription,
                });
                const modulesData = await getModulesDropDownByCourseTeacher(assignment?.courseId);
                setModuleDropDown(modulesData)
                if (assignment.file?.secure_url){
                    setAssignmentFile(assignment?.file)
                }
            }

        })()
    }, [id])

    const handleOnchange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    return (
        <>
            <Skeleton loading={dataLoading} style={{width: '600px', padding: '100px'}}>
            <Form
                name="basic"
                layout='vertical'
                form={form}
                onFinish={onFinish}
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
                        // onChange={onChangeUniversity}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={moduleDropDown}
                    />
                </Form.Item>

                <Form.Item
                    label="Assignment Name"
                    name="assignmentName"
                    rules={[
                        {
                            required: true,
                            message: 'Please provide a assignment name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Assignment Description"
                    name="assignmentDescription"
                >
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item
                    name="file"
                    label="Assignment File"
                >
                    <Input type='file' onChange={handleOnchange}/>
                </Form.Item>

                <Form.Item
                >
                    <Button type="default" loading={loading} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {
                assignmentFile?.secure_url &&  <div className='px-8'>
                    <h2 className='mb-2'>Download Assignment File</h2>
                    <Link href={assignmentFile?.secure_url} download className='mt-4 bg-orange-600 py-2 px-4 rounded text-white hover:text-white'>Download Now</Link>
                </div>
            }
            </Skeleton>

        </>
    );
};

export default AssignmentCreateForm;