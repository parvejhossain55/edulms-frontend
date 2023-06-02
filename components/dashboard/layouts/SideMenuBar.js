import React, {useState} from 'react';
import {Menu, Layout} from "antd";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import QuizIcon from '@mui/icons-material/Quiz';
import StreamIcon from '@mui/icons-material/Stream';
import MessageIcon from '@mui/icons-material/Message';
import {checkRole} from "../../../middleware/checkRole";
import Link from "next/link";
import {useRouter} from "next/router";
import logo from '../../../assect/img/leadeducare-sm-logo.png';
import Image from "next/image";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


const {Sider} = Layout;
const items = [
    {
        key: 'home',
        label: <Link href={`/`} className='font-semibold'>{process.env.NEXT_PUBLIC_APP_NAME}</Link>,
        icon: <Image
            src={logo}
            width={30}
            height={30}
            alt="edu care"
            style={{background: '#140342', borderRadius: '3px'}}
        />
    },
    {
        key: 'dashboard',
        label: <Link href={`/dashboard`}>Dashboard</Link>,
        icon: <SpaceDashboardIcon/>
    },
    checkRole('teacher') || checkRole('user') ?
        {
            key: 'course',
            label: <Link href={`/dashboard/courses`}>My Course</Link>,
            icon: <LibraryBooksIcon/>,
        } : '',
    checkRole('teacher') &&
    {
        key: 'assignment',
        label:  'Assignments',
        icon: <AssignmentIcon/>,
        children: [
            {
                key: 'assignment-create',
                label: <Link href={`/dashboard/assignment/create`}>Create</Link>,
                icon: <AssignmentIcon/>,
            },
            {
                key: 'assignment-views',
                label: <Link href={`/dashboard/assignment/views`}>List</Link>,
                icon: <AssignmentIcon/>,
            },
            {
                key: 'assignment-submitted',
                label: <Link href={`/dashboard/assignment/submitted`}>Submitted</Link>,
                icon: <AssignmentIcon/>,
            }
        ]
    },
    checkRole('user') &&
    {
        key: 'userAssignment',
        label: <Link href={`/dashboard/assignment`}>Assignments</Link>,
        icon: <AssignmentIcon/>,
    },
    {
        key: 'resources',
        label: <Link href={`/dashboard`}>Resources</Link>,
        icon: <FolderCopyIcon/>
    },
    {
        key: 'quiz',
        label: <Link href={`/dashboard`}>Quiz</Link>,
        icon: <QuizIcon/>
    },
    checkRole('teacher') &&
    {
        key: 'livesession',
        label:  'Live Session',
        icon: <AssignmentIcon/>,
        children: [
            {
                key: 'livesession-create',
                label: <Link href={`/dashboard/livesession/create`}>Create</Link>,
                icon: <AssignmentIcon/>,
            },
            {
                key: 'livesession-views',
                label: <Link href={`/dashboard/livesession/views`}>List</Link>,
                icon: <AssignmentIcon/>,
            }
        ]
    },
    checkRole('user') &&
    {
        key: 'livesession',
        label: <Link href={`/dashboard/livesession`}>Live Session</Link>,
        icon: <StreamIcon/>
    },
    {
        key: 'message',
        label: <Link href={`/dashboard`}>Message</Link>,
        icon: <MessageIcon/>
    },
]

const SideMenuBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    const { pathname } = router;
    return (
        <Sider theme='light' className='shadow-lg' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu theme='light' defaultSelectedKeys={pathname} items={items} mode="inline"
                  className='mt-2'/>
        </Sider>
    );
};

export default SideMenuBar;