/*
import React from 'react';

import Blog1 from "../../../assect/img/blog-3.jpg";
import Blog2 from "../../../assect/img/blog-2.jpg";
import Blog3 from "../../../assect/img/blog-1.jpg";
import Pagination from "../../MiniComponet/Pagination";
// import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import NewsCard from "../../MiniComponet/NewsCard";




const BlogCard = () => {

    return (
        <div className="classes bg-kh-white ">
            <div className="containte-kh px-4 py-10  ">
                <div className="flex flex-col gap-y-12 justify-center items-center">
                    <div className="flex justify-center items-center flex-col md:justify-between md:flex-row  flex-wrap gap-y-5">
                        <NewsCard image={Blog1} BtnURL='/blog-details'/>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;*/


import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Link from 'next/link';
import moment from 'moment';
// import { getToken } from '../../helper/sessionStorage';
import axios from 'axios';
import { HideLoader, ShowLoader } from '../../../redux/slice/loadingSlice';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import axiosInstance from "../../../helper/axiosInstance";
import Image from "next/image";
import {Button} from "../../Design";

const BlogCard = ({ item, index , BlogList, }) => {

    // console.log("item", item)
    const router = useRouter()

    const { enqueueSnackbar } = useSnackbar();

    const Like = async (event) => {
        event.preventDefault();
        try {

            const { data } = await axiosInstance.get(`/posts/${item?._id}/like`)

            BlogList()

        } catch (err) {
            console.error(err);
            enqueueSnackbar(err?.response?.data, { variant: 'error' });
        }
    }



    return (
        <div>
            <div
                key={index}
                className="mb-5 border bg-white-800 rounded-md hover:shadow-sm mx-2 sm:mx-0 first:ms-4"
                // className="mb-5 w-96 sm:w-64 2xl:w-80 border bg-white-800 rounded-md hover:shadow-sm mx-2 sm:mx-0 first:ms-4"
            >
                <img
                    className="w-full rounded-t-md h-full bg-cover bg-center"
                    src={item?.thumbnail?.secure_url}
                    alt="avatar"
                />
                <div className="text-sm font-normal mt-4 mb-1 px-4 flex">
                    <h1 className="-mt-1 text-[#140342]">{item?.category?.name}</h1>
                </div>
                <Link href={`/blog/${item?._id}`}>
                    <p className="text-[#140342] text-lg font-medium mb-1 px-4 hover:text-green-500">
                        {item?.title?.substring(0, 50)}
                        {item?.title?.length > 50 ? "..." : ""}
                    </p>
                </Link>
                <div className="flex justify-between items-center text-sm px-4 pb-3">
                    <div className="flex items-center justify-center">
                       {/* {!item.likes.includes(tokenDecode?._id) &&
                            <a  onClick={Like} > <ThumbUpOffAltIcon className='me-2 my-1 text-gray-400 text-xl cursor-pointer'/> </a>
                        }*/}
                        {/*{item.likes.includes(tokenDecode?._id) &&
                            <a onClick={Like} className='cursor-pointer'> <ThumbUpIcon className='me-1 my-1 text-[#140342] text-xl'/> </a>}
                        <p className="text-gray-600"> {item?.likes?.length}</p>*/}
                        <a> <RemoveRedEyeIcon className='ms-2 me-1 my-1 text-gray-400 text-xl'/></a>
                        <p className='text-sm'> {item?.views}</p>
                    </div>
                    <p className="text-gray-600"> {moment(item?.createdAt).fromNow()}</p>
                </div>
            </div>
        </div>

    );
};

export default BlogCard;
