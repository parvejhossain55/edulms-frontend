import React from 'react'
import { Homepage } from '../components'
import Head from 'next/head'


const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  )
}

export default index