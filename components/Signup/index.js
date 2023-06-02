/*
import React from 'react'
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import MyComponent from '../../uiComponents/TextInput';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Logo from './../../assect/img/leadeducare-lg-logo.png'

const SignupPage = () => {
    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <div>
            <div className='truncate min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-purple-200 via-30% to-emerald-100 to-100% pt-12'>
                <div className="px-6 sm:w-2/3 sm:justify-center sm:m-auto md:w-2/4 lg:w-1/3">
                    <div className="logo">
                        <Box component={Link} href='/'>
                            <Image
                                width={80}
                                height={80}
                                src={Logo}
                                alt='Leadedu'

                            />
                        </Box>
                    </div>
                    <h3 className='text-3xl py-8 font-semibold'>Sign in</h3>
                    <p>If you already have an account register</p>
                    <p>You can <span className='text-orange-600 font-bold mx-2'><button> <Link href='/login'>Login here ?</Link> </button></span> </p>
                    <form onSubmit={handleSubmit} action="">
                        <div className='my-12'>
                            <div className='my-6'>
                                <MyComponent
                                    variant='outlined'
                                    label='Full Name'
                                    name="name"
                                    value={inputs.name || ""}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div className='my-6'>
                                <MyComponent
                                    variant='outlined'
                                    label='Email Address'
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                    type="email" />
                            </div>
                            <div className='my-6'>
                                <MyComponent
                                    variant='outlined'
                                    label='Phone'
                                    name="phone"
                                    value={inputs.phone || ""}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div className='my-6'>
                                <MyComponent
                                    variant='outlined'
                                    label='Password'
                                    name="password"
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    type="password" />
                            </div>
                            <div className='my-6'>
                                <MyComponent
                                    variant='outlined'
                                    label='Confirm Password'
                                    name="confirmPassword"
                                    value={inputs.confirmPassword || ""}
                                    onChange={handleChange}
                                    type="password" />
                            </div>
                            <div>
                                <Button color='secondary' className='bg-purple-700' variant='contained' sx={{ width: '100%', background: '#7b1fa2', '&:hover': { background: '#7b1fa2' }, marginTop: 4, padding: 1.5, fontSize: '1rem', fontWeight: 'bold' }} type='submit' disableElevation>Signup</Button>
                            </div>
                            <div>
                                <p className='text-center text-slate-400 font-semibold mt-4'>or continue with</p>
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <p className='mx-2 text-3xl my-6 text-blue-700'><button><BsFacebook /></button></p>
                                    <p className='mx-2 text-3xl my-6 text-slite-700'><button><AiFillGithub /></button></p>
                                    <p className='mx-2 text-3xl my-6 text-red-500'><button><AiOutlineGoogle /></button></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage*/


import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { ShowLoader, HideLoader } from "../../redux/store";
import { store } from "../../redux/store";
import { setEmail } from '../../helper/sessionStorage';
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import {Card, message} from "antd";


const SignupPage = () => {
    const [inputs, setInputs] = React.useState({});
    const router = useRouter();

    message.config({
        top: 100,
        duration: 2,
        maxCount: 3,
        rtl: true,
        prefixCls: 'my-message',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const PushSignup = async () => {
        try {
            store.dispatch(ShowLoader())
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/register`, inputs)
            setEmail(inputs.email)
            store.dispatch(HideLoader())
            router.push('/verifyotp');

        } catch (err) {
            console.error(err);
            store.dispatch(HideLoader())
            if (err.response.status === 400){
                message.error(err.response.data.error)
            }

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        PushSignup()
    }


    return (
        <div>
            <div className="truncate bg-gradient-to-r from-indigo-100 from-10% via-purple-200 via-30% to-emerald-100 to-100% py-12">
                <div className="px-6 sm:w-2/3 sm:justify-center sm:m-auto md:w-2/4 lg:w-1/3 xl:w-1/3">
                    {/*<div className="logo">
                        <Link href={'/'}>
                            <Image
                                width={80}
                                height={80}
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>*/}
                    {/* <h3 className='text-3xl py-8 font-semibold'>Sign in</h3>
                    <p>If you already have an account register</p>
                    <p>You can <span className='text-orange-600 font-bold mx-2'><button> <Link href='/login'>Login here ?</Link> </button></span> </p>*/}
                    <Card title='Sign Up'>


                        <form onSubmit={handleSubmit} action="">
                            <div className=''>
                                <div className='my-6'>
                                    <TextField
                                        name="firstName"
                                        label="First Name"
                                        variant="standard"
                                        value={inputs.firstName || ""}
                                        onChange={handleChange}
                                        type="text" required fullWidth />
                                </div>
                                <div className='my-6'>
                                    <TextField
                                        name="lastName"
                                        label="Last Name"
                                        variant="standard"
                                        value={inputs.lastName || ""}
                                        onChange={handleChange}
                                        type="text" required fullWidth />
                                </div>
                                <div className='my-6'>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        variant="standard"
                                        value={inputs.email || ""}
                                        onChange={handleChange}
                                        type="text" required fullWidth />
                                </div>
                                <div className='my-6'>
                                    <TextField
                                        name="password"
                                        label="Password"
                                        variant="standard"
                                        value={inputs.password || ""}
                                        onChange={handleChange}
                                        type="password" required fullWidth />
                                </div>
                                <div className='my-6'>
                                    <TextField
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        variant="standard"
                                        value={inputs.confirmPassword || ""}
                                        onChange={handleChange}
                                        type="password" required fullWidth />
                                </div>
                                <div>
                                    <Button className="bg-black" color='primary' variant='contained' sx={{ width: '100%', background: 'black','&:hover':{background: 'black'}, marginTop: 4, padding: 1.5, fontSize: '1rem', fontWeight: 'bold' }} type='submit' disableElevation>Signup</Button>
                                </div>
                                {/* <div className='mt-4'>
                                <p className='text-center text-slate-400 font-semibold'>or continue with</p>
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <p className='mx-2 text-3xl my-6 text-blue-700'><button><BsFacebook /></button></p>
                                    <p className='mx-2 text-3xl my-6 text-slite-700'><button><AiFillGithub /></button></p>
                                    <p className='mx-2 text-3xl my-6 text-red-500'><button><AiOutlineGoogle /></button></p>
                                </div>
                            </div> */}
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SignupPage