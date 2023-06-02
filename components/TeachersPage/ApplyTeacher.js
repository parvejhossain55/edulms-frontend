import React, {useState} from 'react';
import {Button, Card, Form, Input, InputNumber, message, Row, Select, Upload} from "antd";
import { useRouter } from 'next/router';
import { applyTeacherRequest } from '../../APIRequest/applyTeacherAPIRequest';
import { toast } from 'react-hot-toast';
const {TextArea} = Input;
const validateMessages = {
    required: '${label} is required!'
};

const ApplyTeacher = () => {

    const [loading,setLoading] = useState(false);
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = async (values) => {
        setLoading(true);
        const result = await applyTeacherRequest(values)
        console.log("Values", values);
        console.log("result", result)
        setLoading(false);
        if (result){
            form.resetFields()
            router.push('/teacher/teachers');
        }
    }

    return (
        <>
        <Row justify="center" align="middle" style={{ marginTop: '50px' , marginBottom: '50px'}}>
            <Card title='Apply For Teacher' className='shadow-lg bg-gray-100'
            >
                <Form
                    name="create-teacher"
                    layout='vertical'
                    onFinish={onFinish}
                    style={{
                        width: '600px',
                    }}
                    validateMessages={validateMessages}
                    form={form}

                >
                    <Form.Item
                        name='firstName'
                        label="First Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder={'First Name'}
                            className='bg-gray-100'
                        />
                    </Form.Item>
                    <Form.Item
                        name='lastName'
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder={'Last Name'}
                            className='bg-gray-100'
                        />
                    </Form.Item>

                    <Form.Item
                        name='email'
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email'
                            },
                        ]}
                    >
                        <Input  placeholder={'E-Mail'}
                            className='bg-gray-100' 
                            />
                    </Form.Item>
                    <Form.Item
                        name='mobile'
                        label="Mobile Number"
                        rules={[
                            {
                                required: true,
                                message: 'Mobile number required'
                            },
                        ]}

                    >
                        <Input placeholder={'Mobile Number'}
                            className='bg-gray-100'
                        />
                    </Form.Item>

                    <Form.Item
                        name='qualification'
                        label="Qualification"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder={'Qualification'}
                            className='bg-gray-100'
                        />
                    </Form.Item>

                    <Form.Item
                        name='about'
                        label="About"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <TextArea placeholder={'About'} 
                            className='bg-gray-100'
                            />
                    </Form.Item>

                    <Form.Item
                    >
                        <Button
                        loading={loading}
                        type="" htmlType="submit" className='mt-4 bg-[#140342] hover:bg-[#110829] hover:text-white text-white hover:shadow-lg'>
                        Apply For Teacher
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
        </>
    );
};

export default ApplyTeacher;