import { Button, Form, Input, InputNumber , Select, Slider, Upload, message } from 'antd';
const { Option } = Select;
import React, {useEffect, useState} from 'react';
import {DownloadOutlined, EyeOutlined, UploadOutlined} from '@ant-design/icons';
import {checkRole} from "../../../middleware/checkRole";
import Link from "next/link";
import {
    assignmentReview, assignmentSubmitRequest,
    createAssignmentRequest,
    getSubmittedAssignmentByAssignmentID
} from "../../../APIRequest/assignmentAPIRequest";

const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/zip', 'application/pdf' , 'application/x-zip-compressed'];

const AssignmentDetails = ({record}) => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [feedback, setFeedback] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [studentComment, setStudentComment] = useState('')
    const [assignmentUrl, setAssignmentUrl] = useState('')
    const [submittedAssignment, setSubmittedAssignment] = useState({})
    const [mark, setMark] = useState(record?.mark);


    useEffect(()=> {
        (async ()=>{
           const getData = await getSubmittedAssignmentByAssignmentID(record?._id);
           setSubmittedAssignment(getData);
           setStudentComment(getData?.studentComment);
           setAssignmentUrl(getData?.assignmentUrl);
            console.log('getData', getData)
        })()

    }, [record?._id])

    function handleOnChange(event) {
        const file = event.target.files[0]; // Get the first selected file
        setFile(file)

        if (file) {
            const fileSize = file.size; // File size in bytes
            const fileSizeInKB = Math.round(fileSize / 1024); // File size in kilobytes

            console.log(`File size: ${fileSizeInKB} KB`);
        }
    }


    const submitAssignment = async ()=>{
            const formData = {};
            formData.assignmentId = record?._id;
            formData.studentComment = studentComment
            formData.assignmentUrl = assignmentUrl
            formData.file=file
            formData.status = 'pending'
            setLoading(true)
            const result = await assignmentSubmitRequest(formData);
            setLoading(false)
            const getData = await getSubmittedAssignmentByAssignmentID(record?._id);
            setSubmittedAssignment(getData);
            setStudentComment(getData?.studentComment);
            setAssignmentUrl(getData?.assignmentUrl)
        }


      const teacherReview = async ()=>{
          setLoading(true)
          const values = {status, mark, teacherReview: feedback}
          await assignmentReview(values, record?.studentId, record?.assignmentId, record?._id)
          setLoading(false)
      }

    return (
        <>
        { checkRole('user') ? (
            <div className='font-roboto'>
                <p className='font-bold text-[#140342]'>{record?.assignmentName}</p>
                <p className='text-gray-600 pb-4 mt-2 text-md font-medium'>{record?.assignmentDescription} </p>
                {
                    submittedAssignment?.file?.secure_url && <>
                        <p className=' font-medium uppercase'>Submitted File</p>
                        <div className="flex justify-between pb-4 mt-4">
                            <div className="">
                                <p className='font-medium text-gray-500'>{submittedAssignment?.file?.public_id}</p>
                            </div>
                            <Link href={submittedAssignment?.file?.secure_url} download>
                                <Button
                                    type=""
                                    className='bg-[#140342] text-white flex items-center hover:bg-[#100729]'
                                >
                                    <DownloadOutlined  style={{ fontSize: '16px'}} />
                                </Button>
                            </Link>

                        </div>
                    </>
                }

                <hr />
                <div className="flex justify-between items-center mt-4 ">
                    {/* <div>
                        <p className=' font-medium'>Deadline</p>
                        <p className='text-green-500 text-xl font-medium'>9:00 PM , October 28</p>
                    </div> */}
                    <div>
                        <p className='font-medium'>Attempt left</p>
                        <p className=' text-center text-xl font-bold text-green-500'>{submittedAssignment?.limit === 0 || submittedAssignment?.limit > 0 ? submittedAssignment?.limit : 3}</p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center bg-[#140342] w-full py-1.5 mt-5 px-4">
                    <div className="">
                        <p className='text-white'> status </p>
                        <p className='text-xl font-bold text-green-500'>{submittedAssignment?.status ? submittedAssignment?.status : 'ACTIVE'}</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <p className='text-white text-xs'>Mark</p>
                        <p className='px-4 py-2 m-0.5 bg-[#0d0522] text-white text-xl font-bold border border-gray-500 rounded-lg'>{submittedAssignment?.mark ? submittedAssignment?.mark : '0'}</p>
                        <p className='text-white text-xs'>out of 10</p>
                    </div>
                </div>

                <div className="p-3 bg-gray-200">
                    <p className='text-md font-medium text-gray-600'>Teachers Feedback</p>
                    <p className='text-md font-medium '>{record?.teacherReview}</p>
                </div>
                <Form.Item
                    name="studentComment"
                    style={{
                        width: '100%',
                        marginRight: '10px',
                        marginTop: "20px"
                    }}
                >
                    <label className='text-md font-medium'>Comment</label>
                    <Input.TextArea value={studentComment} onChange={(e)=> {setStudentComment(e.target.value)}} placeholder="Student Feedback" className='w-full mt-1' />
                </Form.Item>

                <Form.Item
                    name="url"
                    style={{
                        width: '100%',
                        marginRight: '10px',
                        marginTop: "20px"
                    }}
                >
                    <label className='text-md font-medium'>Add URL</label>
                    <Input value={assignmentUrl} onChange={(e)=> {setAssignmentUrl(e.target.value)}} placeholder="Please enter assignment url" className='w-full mt-1' />
                </Form.Item>
                <div className="flex mb-2">
                    <p className='text-gray-700 text-base'>Attachments</p>
                    <p className='text-gray-500 text-xs ps-9 mt-1'>Formats: Only zip allowed</p>
                </div>

                <div className='mb-6'>
                    <input type="file" accept=".zip" onChange={(e) => handleOnChange(e)}/>

                    {
                        file &&
                        <>
                            <div className='bg-gray-200 px-2 py-0.5 mt-2 rounded-lg mt-4'>
                                <p> File Name: {file.name}</p>
                                <p> File Size: {Math.round(file.size / 1024)} KB</p>
                            </div>
                        </>
                    }
                </div>

                    {/*<input type="file" onChange={handleOnchange} />*/}


                <Button
                    onClick={submitAssignment}
                    type=""
                    loading={loading}
                    disabled={submittedAssignment?.mark > 0}
                    className={`${submittedAssignment?.mark > 0 ? 'bg-gray-400' : 'bg-[#140342] hover:bg-[#100729]'} text-white flex w-full items-center justify-center py-5 `}
                >
                    <span>Submit</span>
                </Button>
                
            </div>
            ) : (
            <div className='font-roboto'>
                <h1 className='font-bold text-[#140342] text-xl'>{record?.assignment?.assignmentName}</h1>
                <p className='text-gray-600 pb-4 mt-6 text-md font-medium'>
                    {record?.assignment?.assignmentDescription}
                     </p>


                {
                    record?.file?.secure_url && <>
                        <p className=' font-medium uppercase'>Submitted File</p>
                        <div className="flex justify-between pb-4 mt-4">
                            <div className="">
                                <p className='font-medium text-gray-500'>{record?.file?.public_id}</p>
                            </div>
                            <Link href={record?.file?.secure_url} download>
                                <Button
                                    type=""
                                    className='bg-[#140342] text-white flex items-center hover:bg-[#100729]'
                                >
                                    <DownloadOutlined  style={{ fontSize: '16px'}} />
                                </Button>
                            </Link>

                        </div>
                    </>
                }

                {
                    record?.assignmentUrl && <>
                        <p className=' font-medium'></p>
                        <div className="flex justify-between items-center pb-4 mt-4">
                            <div className="">
                                <p className='font-medium uppercase'>Submitted URL</p>
                            </div>
                            <Link href={record?.assignmentUrl} target='_blank' className='bg-[#140342] text-white flex items-center hover:bg-[#100729] py-2 px-4 rounded'>
                                <EyeOutlined style={{ fontSize: '16px' }} />
                            </Link>

                        </div>
                    </>
                }

                <hr />
                {/* <div className="flex justify-between items-center mt-4 ">
                    <div>
                        <p className=' font-medium'>Deadline</p>
                        <p className='text-green-500 text-xl font-medium'>9:00 PM , October 28</p>
                    </div>
                    <div>
                        <p className='font-medium'>Attempt left</p>
                        <p className=' text-center text-xl font-bold text-green-500'>3</p>
                    </div>
                </div> */}

                <div className="flex justify-between items-center bg-[#140342] w-full py-3 mt-5 px-4">
                    <div className="">
                        <p className='text-white'>Status</p>
                        <Select style={{width: '120px'}} defaultValue={record?.status} onChange={(status)=> setStatus(status)}>
                            <Option value="ACTIVE">Active</Option>
                            <Option value="PENDING">Pending</Option>
                            <Option value='APPROVED'>Approved</Option>
                            <Option value="REJECTED">Rejected</Option>
                        </Select>
                    </div>
                    <div className="">
                        <p className='text-white text-xs'>Mark | out of 10</p>
                        <InputNumber
                            min={0}
                            max={10}
                            value={mark}
                            onChange={(mark)=> setMark(mark)}
                        />
                        {/*<p className='text-white text-xs'></p>*/}
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    marginRight: '10px',
                    marginTop: "20px",
                    marginBottom: '20px'
                }}>
                    <label className='text-md font-medium'>Teachers Feedback</label>
                    <Input value={record?.teacherReview} onChange={(e) => {setFeedback(e.target.value)}} placeholder="write here your feedback" className='w-full mt-1' />

                </div>


                
                <Button
                    onClick={teacherReview}
                    loading={loading}
                    className='bg-[#140342] text-white flex w-full items-center justify-center py-5 hover:bg-[#100729]'

                >
                    <span>Approve Assignment</span>
                </Button>
                
            </div>
            )
        }
        </>
    );
};

export default AssignmentDetails;