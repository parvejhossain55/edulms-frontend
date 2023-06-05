import React from 'react';
import Image from "next/image";
import class1 from "../../../assect/img/class-1.jpg";
import Link from "next/link";
import { Button } from '../../Design';
import moment from "moment/moment";
import ReactHtmlParser from 'react-html-parser';
const BlogCard = ({
    post
}) => {
    return (
        <div className="card bg-kh-white flex rounded-2xl md:basis-[48%] lg:basis-[31%] flex-col drop-shadow-lg pb-8">

            <div className=" w-full overflow-hidden">
                <Image src={post?.thumbnail?.secure_url} width={387} height={200} className="cardImage transition duration-500" alt={post?.title} />
            </div>
            <div className="flex justify-between items-center my-3.5 px-6 tex-base capitalize">
                <h3 className='font-normal'><span className="text-rad-kh pr-1">by Author:</span>{post?.author?.firstName +' '+ post?.author?.lastName}</h3>
                <p className='font-normal'><span className="text-rad-kh pr-1">date: </span>{moment(post?.createdAt).fromNow()}</p>
            </div>
            <div className="flex flex-col px-6 gap-y-4">
                <Link href='#' className='text-xl font-bold text-kh-heading title-link capitalize transition ease-in duration-200'>{post?.title}</Link>
                { ReactHtmlParser(post?.content.substring(0, 120)+'...')}
                <Link href={`/blog/${post?._id}`} className={`text-white bg-red-600 w-[120px] p-2 rounded`}>Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;