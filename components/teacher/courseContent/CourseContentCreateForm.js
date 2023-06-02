import React, {useEffect, useState} from "react";
import {Button, Card, Form, Input, InputNumber, Select, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {createContentRequest} from "../../../APIRequest/contentAPIRequest.js";
import {getCoursesDropDownByTeacher} from "../../../APIRequest/courseAPIRequest.js";
import { getModulesDropDownByCourseTeacher} from "../../../APIRequest/courseModuleApiRequest.js";


const validateMessages = {
    required: '${label} is required!'
};
const CourseContentCreateForm = () => {
    const [courseDropDown, setCourseDropDown] = useState([])
    const [courseSelect, setCourseSelect] = useState('')
    const [moduleDropDown, setModuleDropDown] = useState([])
    const [loading, setLoading] = useState(false)

    const [form] = Form.useForm();

    useEffect(()=>{
        (async ()=>{
            const course = await getCoursesDropDownByTeacher();
            setCourseDropDown(course)
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


    const onClickSubmit = (values) => {
        (async () => {
            await submitCourseCreate(values);
        })()
    }


    const submitCourseCreate = async (values) => {
        setLoading(true);
        const result = await createContentRequest(values);
        setLoading(false);
        if (result){
            form.resetFields();
        }
    }


    return (
        <Card>
            <Form
                name="create-content"
                form={form}
                layout='vertical'
                onFinish={onClickSubmit}
                style={{
                    width: '600px',
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name="courseId"
                    label="Coure"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
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
                        options={courseDropDown}
                    />
                </Form.Item>


                <Form.Item
                    name="moduleId"
                    label="Module"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
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


                <Form.List name="contents">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map(({key, name, ...restField}) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'block',
                                        marginBottom: 8,
                                        backgroundColor: 'rgb(227, 227, 227)',
                                        padding: '15px'
                                    }}
                                    align="baseline"
                                >


                                    <Form.Item
                                        {...restField}
                                        name={[name, 'serialNo']}
                                        label={'Serial No'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Lesson Serial',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={1} placeholder='Lession Serial'/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'videoTitle']}
                                        label={'Video Title'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing video title',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Video Title"/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'videoUrl']}
                                        label={'Video Url'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing video url',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Video url"/>
                                    </Form.Item>
                                    <MinusCircleOutlined className={'fs-5'} onClick={() => remove(name)}/>
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                    Add lesson
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>


                <Form.Item
                >
                    <Button
                        loading={loading}
                        type="default" htmlType="submit">
                        Create Content
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
};
export default CourseContentCreateForm;