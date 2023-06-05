import React from 'react'
import { Homepage } from '../components'
import Head from 'next/head'
import HeroSection from "../components/Homepage/Hero";
import WhoWeAre from "../components/Homepage/Who-we-are";
import LatestBlog from "../components/Homepage/LatestBlog";
import Activities from "../components/Homepage/Activitie";
import Courses from "../components/Homepage/Courses";
import Event from "../components/Homepage/Event";
import CoreValue from "../components/Homepage/CoreValue";
import Teacher from "../components/Homepage/Teacher";
import axiosInstance from "../helper/axiosInstance";

export const getServerSideProps = async ()=>{

    const url = `/posts/popular-post`
    const {data} =  await axiosInstance.get(url)
    const courses =  await axiosInstance.post(`/courses/published?perPage=6&pageNo=1`, {category: []})
    return { props: {
            posts: data,
            courses: courses.data?.course
        }};
}

const index = ({posts, courses}) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
          <HeroSection />
          <WhoWeAre />
          <LatestBlog posts={posts} />
          <Activities />
          <Courses courses={courses} />
          <Event />
          <CoreValue />
          <Teacher />
      </main>
    </>
  )
}

export default index