import { useRouter } from 'next/router';
import * as React from "react";
import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axiosInstance from "../../../../helper/axiosInstance";
import { Button, Col, Collapse, Drawer, message, Row, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import DashboardHeader from "../../../../components/dashboard/layouts/DashboardHeader";
import VideoPlayer from "../../../../components/dashboard/courseView/VideoPlayer";
import {useSelector} from "react-redux";
import {checkRole} from "../../../../middleware/checkRole";
import Link from "next/link";
import AssignmentDetails from '../../../../components/teacher/assignment/AssignmentDetails';
import withAuth from "../../../../middleware/withAuth";

const { Panel } = Collapse;

const ViewCoursePage = () => {
    const router = useRouter();
    const { courseId } = router.query;
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({});
    const [video, setVideo] = useState(null);
    const [key, setKey] = useState(0);
    const [defaultModule, setDefaultModule] = useState('');
    const [open, setOpen] = useState(false);
    const [assignmentDetails, setAssignmentDetails] = useState({});
    const {currentUser} = useSelector(state => state.auth);

    const getFirstModuleFirstVideo = (modules, course)=>{

        const getRunningVideo = JSON.parse(localStorage.getItem(`video${currentUser?._id}${course}`));
        // if (getRunningVideo){


            setDefaultModule(getRunningVideo?.moduleId);
            const isMatch = modules.find(module => module?._id === getRunningVideo?.moduleId);
            if (isMatch){
                setVideo(getRunningVideo);
            } else {
            const moduleNo1 = modules.find(module => module?.moduleNo === 1);
            setDefaultModule(moduleNo1?._id);
            // Check if moduleNo 1 exists
            if (moduleNo1) {
                // Get the first content
                const firstContent = moduleNo1?.contents[0];
                // Check if the first content exists
                if (firstContent) {
                    setVideo(firstContent)
                }
            }
        }

    }

    useEffect(()=>{
        (async ()=>{
            if (checkRole('user')){
                setLoading(true)
                const {data} = await axiosInstance.get(`/courses/my-course/${courseId}`);
                setLoading(false);
                setCourse(data);

                getFirstModuleFirstVideo(data?.modules, data?._id)
            }else if (checkRole('teacher')){
                setLoading(true)
                const {data} = await axiosInstance.get(`/courses/teacher/${courseId}`);
                setLoading(false);
                setCourse(data);
                getFirstModuleFirstVideo(data?.modules, data?._id)
            }

        })()
    }, [courseId, currentUser?._id])
    const onChange = ()=> {

    }

    const videoChange = (content, course)=>{
        setVideo(content)
        setKey(key + 1);
        content.course = course
        localStorage.setItem(`video${currentUser?._id}${course}`, JSON.stringify(content));
    }

    const showDrawer = (assignments) => {
        setOpen(true);
        setAssignmentDetails(assignments)
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Head>
                <title>{`View Course ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardHeader/>

            <Skeleton loading={loading}>
                <h3 className='text-orange-600 font-bold p-4 text-4xl'>{course?.name}</h3>
                <Row className='p-4' gutter={20}>
                    <Col span={16}>
                        <VideoPlayer key={key} video={video}/>
                    </Col>
                    <Col span={8}>
                        <Collapse defaultActiveKey={defaultModule} onChange={onChange}>
                            {
                                course?.modules?.map(module => (
                                    <Panel header={`${module?.name}`} key={`${module?._id}`}>
                                        {
                                            module?.contents?.sort((content) => content?.serialNo)?.map((content) => (
                                                <p key={content?._id}
                                                   onClick={()=> videoChange(content, course?._id)}
                                                   className={`py-3 cursor-pointer hover:bg-gray-100 px-2 ${video?.videoTitle === content?.videoTitle ? 'bg-gray-200' : ''}`}>
                                                    {content?.videoTitle}
                                                </p>
                                            ))
                                        }

                                        {
                                            module.assignment &&  <Collapse className='mt-4'>
                                                <Panel key={module?.assignment?._id} header='Assignment'>
                                                    <p className='flex justify-between items-center px-2 text-orange-600'>
                                                        { module?.assignment?.assignmentName } <button onClick={() => showDrawer(module?.assignment)}>View</button>
                                                        <Drawer title="Assignment" placement="right" onClose={onClose} open={open}>
                                                            <AssignmentDetails record={assignmentDetails}/>
                                                        </Drawer>
                                                    </p>
                                                </Panel>
                                            </Collapse>
                                        }



                                    </Panel>
                                ))
                            }

                        </Collapse>
                    </Col>
                </Row>
            </Skeleton>
        </>

    );
};
export default withAuth(ViewCoursePage);
