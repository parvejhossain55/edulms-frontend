import React from 'react'
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';

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
            <div>
                <div className="px-6 sm:w-2/3 sm:justify-center sm:m-auto md:w-2/4 lg:w-1/3">
                    <div className="logo">
                        <h1>Your Logo</h1>
                    </div>
                    <h3 className='text-3xl py-8 font-semibold'>Sign in</h3>
                    <p>If you already have an account register</p>
                    <p>You can <span className='text-orange-600 font-bold mx-2'><button> <Link href='/login'>Login here ?</Link> </button></span> </p>
                    <form onSubmit={handleSubmit} action="">
                        <div className='my-12'>
                            <div className='my-6'>
                                <label className='text-sm font-semibold' htmlFor="">Full Name</label>
                                <input
                                    name="name"
                                    value={inputs.name || ""}
                                    onChange={handleChange}
                                    className='form_control' type="text" />
                            </div>
                            <div className='my-6'>
                                <label className='text-sm font-semibold' htmlFor="">Email</label>
                                <input
                                    name="email"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                    className='form_control' type="text" />
                            </div>
                            <div className='my-6'>
                                <label className='text-sm font-semibold' htmlFor="">Password</label>
                                <input
                                    name="password"
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    className='form_control' type="password" />
                            </div>
                            <div className='my-6'>
                                <label className='text-sm font-semibold' htmlFor="">Conform Password</label>
                                <input
                                    name="conformPassword"
                                    value={inputs.conformPassword || ""}
                                    onChange={handleChange}
                                    className='form_control' type="password" />
                            </div>
                            <div>
                                <button className='btn-primary'>Register</button>
                            </div>
                            <div>
                                <p className='text-center text-slate-400 font-semibold'>or continue with</p>
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

export default SignupPage