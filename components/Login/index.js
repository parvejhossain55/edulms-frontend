import React from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import MyComponent from '../../uiComponents/TextInput';
import { Box, Button } from '@mui/material';
import Logo from './../../assect/img/leadeducare-lg-logo.png'
import Image from 'next/image';



const LoginPage = () => {
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
                    <Box component={Link} href='/'>
                        <Image
                            width={80}
                            height={80}
                            src={Logo}
                            alt='Leadedu'

                        />
                    </Box>
                    <h3 className='text-3xl py-8 font-semibold'>Sign in</h3>
                    <p>If you dont have an account register</p>
                    <p>You can <span className='text-orange-600 font-bold mx-2'><button><Link href={'/users/signup'}>Register here !</Link></button></span> </p>
                    <form onSubmit={handleSubmit} action="">
                        <div className='my-12'>
                            <div>
                                <MyComponent
                                    variant='outlined'
                                    label='Email Address'
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                    type="text" />
                            </div>
                            <div className='my-6'>
                                <MyComponent
                                    label='Password'
                                    name='password'
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    type="password" />
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <div>Rememeber me</div>
                                <div className='text-orange-600 font-semibold'><button>Forget Password ?</button></div>
                            </div>
                            <div>
                                <Button color='secondary' className='bg-purple-700' variant='contained' sx={{ width: '100%', background: '#7b1fa2', '&:hover': { background: '#7b1fa2' }, marginTop: 4, padding: 1.5, fontSize: '1rem', fontWeight: 'bold' }} type='submit' disableElevation>Login</Button>
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

export default LoginPage
