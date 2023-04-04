import React from 'react'
import { LoginPage } from '../components'
import Head from 'next/head'

const login = () => {
    return (
        <div>
            <div>
                <Head>
                    <title>Login</title>
                </Head>
                <main>
                    <LoginPage />
                </main>
            </div>
        </div>
    )
}

export default login