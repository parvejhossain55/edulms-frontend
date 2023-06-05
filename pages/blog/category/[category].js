import Head from "next/head";
import axiosInstance from "../../../helper/axiosInstance";
import React, { useState} from "react";
import ReactPaginate from "react-paginate";
import BlogCard from "../../../components/BlogPage/BlogCard";
import {setCurrentPage} from "../../../redux/slice/posts-slice";
import {useRouter} from "next/router";


export const getServerSideProps = async ({query}) => {
    let loading = true;
    const {category, page, search, cat} = query;
    const pageNo = page ? page : 1;
    const keyword = search ? search : '0';

    const url = `posts/${category}/${pageNo}/10/${keyword}`
    const {data} =  await axiosInstance.get(url);
    loading = false
    const totalPost= data?.length;
    return { props: {
            posts: data,
            totalPost,
            loading,
            category,
            categoryName: cat,
            pageNo
        } };
};
const CategoryPosts = ({posts, totalPost, loading, category, categoryName, pageNo}) => {

    const router = useRouter();
    console.log('totalPost', totalPost)
    const [selectedCategory, setSelectedCategory] = useState('');

  /*  const handleBlogCatChange = (e) => {
        const { value } = e.target;
        setSelectedCategory(value);
        router.push(`/blog/category?category=${value}`);
    };*/
    const handlePageClick = ({ selected }) => {
        const selectedPage = selected + 1;
        setCurrentPage(selectedPage);
        router.push(`/blog/category/${category}?page=${selectedPage}&cat=${categoryName}`);
        /*if (selectedCategory){

        }else {
            router.push(`/blog/category/${category}?page=${selectedPage}`);
        }*/
    };

    return (
        <>
            <Head>
                <title>Blog Post</title>
            </Head>

            <div className="font-roboto">
                <h2 className="pt-10 pb-2 text-3xl text-[#140342] font-bold text-center">
                    {categoryName?.toUpperCase()} - POST
                </h2>
                {/*<h2 className="text-md text-gray-600 text-center">
                    We`re on a mission to deliver engaging, curated courses at a reasonable
                    price.
                </h2>*/}
                <div className="w-12/12 md:flex container mx-auto px-5">
                    <div className="w-12/12 md:w-10/12 mt-8">
                        {/*<div className="flex justify-between">
                            <p className="text-center ms-4 mb-2">Total Posts {totalPost}</p>
                            <p className="text-center mb-2">Page {currentPage} of {totalPages}</p>
                        </div>*/}

                        <div className="flex flex-wrap 2xl:container 2xl:mx-auto items-start justify-center ">
                            {/* {loading &&
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
                            }*/}
                            { posts?.map((item, index) => (
                                <div key={index} className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12">
                                    <BlogCard item={item} index={index} BlogList={item}/>
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
                                pageCount={pageNo}
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




export default CategoryPosts;