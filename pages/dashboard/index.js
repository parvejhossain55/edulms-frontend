import Head from 'next/head'
import { FaUserFriends } from 'react-icons/fa';
import withAuth from "../../middleware/withAuth";

function Dashboard() {

  const {currentUser} = useSelector(state => state.auth);

  console.log('currentUser', currentUser);

  return (
    <>

        <Head>
          <title>Dashboard | My App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <DashboardHeader>

      </DashboardHeader>
          {
            TeacherDesh.map((item, i) => (
                <div key={i.toString()} className=' bg-white p-4 my-4 lg:mx-3 w-full block h-28 shadow-md  shadow-orange-100'>
                  <div className="flex justify-start items-center">
                    <div className='m-4 text-xl'>
                      {item.icon}
                    </div>
                    <div className='px-4'>
                      <div className='text-md text-gray-700'>
                        {item.title}
                      </div>
                      <div className='text-2xl text-blue-700 font-semibold'>
                        {item.total}
                      </div>
                    </div>
                  </div>
                </div>
            ))
          }

    </>
  )
}

export default withAuth(Dashboard) ;

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Person4Icon from '@mui/icons-material/Person4';
import DashboardLayout from "../../components/dashboard/layouts/DashboardLayout";
import DashboardHeader from "../../components/dashboard/layouts/DashboardHeader";
import {useSelector} from "react-redux";



const TeacherDesh = [
  {
    id: 1,
    title: 'Total Revinuo',
    total: '100',
    icon: <AttachMoneyIcon />
  },
  {
    id: 2,
    title: 'Avarage Ratings',
    total: '4.5',
    icon: <ThumbUpOffAltIcon />
  },
  {
    id: 3,
    title: 'Total Student',
    total: '500',
    icon: <Person4Icon />
  },
]
