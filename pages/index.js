import React from 'react'
import { Footer, Homepage, Nav } from '../components'
import Head from 'next/head'


const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Nav />
        <Homepage />
        <Footer />
      </main>
    </>
  )
}

export default index