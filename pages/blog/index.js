import Head from "next/head";
import {BlogPage} from "../../components";
import axiosInstance from "../../helper/axiosInstance";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Skeleton} from "antd";
import ReactPaginate from "react-paginate";
import BlogCard from "../../components/BlogPage/BlogCard";
import axios from "axios";
import {Stack} from "@mui/material";
import {PostsFilterContext, PostsFilterContextProvider} from "../../context/postFilter";
import {store} from "../../redux/store";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../redux/slice/posts-slice";
import {useRouter} from "next/router";


export const getServerSideProps = async ({query}) => {
    // const {currentPage, perPage} = store.getState().post;
    const {page, cat} = query;
   const url = `/posts/${page}/1/0`
   const {data} =  await axiosInstance.post(url, {category: cat ? [cat] : []})

    return { props: {
            posts: data?.posts,
            totalPages: data?.totalPages,
            currentPage: data?.currentPage,
            totalPosts: data?.totalPosts
    } };
};
const Blog = ({posts, totalPages, currentPage, totalPosts}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [blogPosts, setBlogPost] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    // const [totalPages, setTotalPages] = useState();
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPosts, setTotalPosts] = useState();
    const [perPage, setPerPage] = useState(1);
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    console.log('alamgir', posts)

    const BlogList = async () => {
        try {

            setLoading(true)
            const { data } = await axiosInstance.post(`/posts/${currentPage}/${perPage}/0`, {category: selectedCategory})
            setLoading(false)
            setBlogPost(data?.posts)
            // setTotalPages(data?.totalPages)
            setCurrentPage(data?.currentPage)
            // setTotalPosts(data?.totalPosts)
            setLoading(false);
            // console.log('posts', data?.posts)

        } catch (err) {
            console.log(err)
        }
    }
    const CategoryList = async () => {
        try {
            setLoading(true)
            const { data } = await axiosInstance.get(`/blog/category/1/10/0`)
            setLoading(false)
            setCategories(data.data[0].Rows)
            console.log("axPPP", data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        BlogList()
        CategoryList()
    }, [currentPage, perPage, totalPages , totalPosts , selectedCategory ])
    const handleBlogCatChange = (e) => {
        const { value } = e.target;
        setSelectedCategory(value);
        router.push(`/blog?cat=${value}`);
    };
    const handlePageClick = ({ selected }) => {
        const selectedPage = selected + 1;
        setCurrentPage(selectedPage);

        if (selectedCategory){
            router.push(`/blog?page=${selectedPage}&cat=${selectedCategory}`);
        }else {
            router.push(`/blog?page=${selectedPage}`);
        }
    };

    return (
        <>
            <Head>
                <title>Blog Post</title>
            </Head>
            {/*<main>
                <BlogPage />
            </main>*/}

                <div className="font-roboto">
                <h2 className="pt-10 pb-2 text-3xl text-[#140342] font-bold text-center">
                    Latest News
                </h2>
                <h2 className="text-md text-gray-600 text-center">
                    We`re on a mission to deliver engaging, curated courses at a reasonable
                    price.
                </h2>
                <div className="w-12/12 md:flex container mx-auto px-5">
                    <div className="w-12/12 md:w-2/12 ms-6 mt-4">
                        <div className="flex justify-center my-10">
                            <ul className="flex flex-col space-x-2">
                                <p className="ms-2 text-xl font-medium">Categories</p>
                                { loading &&
                                    <>
                                        <Skeleton active width={130}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={130}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={140}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={150}/>
                                        <Skeleton active width={130}/>
                                    </>
                                }
                                <label>
                                    <button
                                        className={`me-2 mt-4 text-md hover:text-indigo-600 ${selectedCategory === "" ? "text-indigo-600 cursor-pointer" : "cursor-pointer"}`}
                                        onClick={handleBlogCatChange}
                                    >
                                        All Categories
                                    </button>
                                </label>
                                {categories.map((category , i) => (
                                    <div key={i} className="ms-4 item-start cursor-pointer first:ms-2 text-md">
                                        <label>
                                            <button
                                                className={`${selectedCategory === category._id ? "text-indigo-600 cursor-pointer" : "cursor-pointer"} my-1 text-start hover:text-indigo-600 text-md`}
                                                onClick={handleBlogCatChange}
                                                value={category?._id}
                                            >
                                                {category.name}
                                            </button>
                                        </label>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-12/12 md:w-10/12 mt-8">
                        <BlogCard/>
                        <div className="flex justify-between">
                            <p className="text-center ms-4 mb-2">Total Blog {totalPosts}</p>
                            <p className="text-center mb-2">Page {currentPage} of {totalPages}</p>
                        </div>

                        <div className="flex flex-wrap 2xl:container 2xl:mx-auto items-start justify-center ">
                            {loading &&
                                Array.from({ length: 8 }).map((item, i) => (
                                    <div className="ps-4 w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12 space-x-4" key={i} >
                                        <Stack key={i.toString()} spacing={1} sx={{ width: '250px' }}>
                                            <Skeleton variant="rectangular" width={250} height={150} />
                                            <Skeleton variant="rounded" width={70} height={20} />
                                            <Skeleton variant="rounded" width={250} height={20} />
                                            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                                <Skeleton variant="rounded" width={250} height={20} />
                                            </Stack>
                                        </Stack>
                                    </div>
                                ))
                            }
                            { posts?.map((item, index) => (
                                <div key={index} className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12">
                                    <BlogCard item={item} index={index} BlogList={BlogList}/>
                                </div>
                                 ))
                            }

                            {/*{ posts?.map((item, index) => (
                                <div key={index} className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12">
                                    <BlogCard item={item} index={index} BlogList={BlogList}/>
                                </div>
                            ))
                            }*/}

                        </div>
                        <div className="flex justify-center my-12">
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                pageCount={totalPages}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageClick}
                                activeClassName="active "
                                containerClassName={"pagination flex justify-center"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link border rounded-full px-3 py-2 me-1 "}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link border rounded-full px-3 py-2 me-1 "}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link border rounded-full px-3 py-2 me-1 "}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link  border rounded-full px-3 py-2 me-1 "}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};




export default Blog;