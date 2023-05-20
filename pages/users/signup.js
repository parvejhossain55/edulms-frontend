import React from 'react'
import { SignupPage } from '../../components'
import Head from 'next/head'

const signup = () => {
    return (
        <div>
            <div>
                <Head>
                    <title>Signup</title>
                </Head>
                <main>
                    <SignupPage />
                </main>
            </div>
        </div>
    )
}

export default signup