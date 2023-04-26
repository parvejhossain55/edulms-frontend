import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../assect/img/leadeducare-lg-logo.png'
import {useRouter} from "next/router";




    const Nav = () => {
        const [open, setOpen] = React.useState(false);
        const [flyer, setFlyer] = React.useState(false);
        const [flyerTwo, setFlyerTwo] = React.useState(false);
        const router = useRouter();
        return (
            <>

                <div className="relative bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href="/">
                                    <span className="sr-only">LeadEdu Care</span>
                                    <Image
                                        className="h-8 w-auto sm:h-10"
                                        src={Logo}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    {/* Heroicon name: outline/menu */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="hidden md:flex space-x-10">

                                <Link
                                    href="/"
                                    className={`text-base font-medium hover:text-rad-kh ${router.pathname === '/' ? 'text-rad-kh' : 'text-gray-500'}`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/programs"
                                    className={`text-base font-medium hover:text-rad-kh ${router.pathname === '/programs' ? 'text-rad-kh' : 'text-gray-500'}`}
                                >
                                    Programs
                                </Link>
                                <Link
                                    href="/blog"
                                    className={`text-base font-medium hover:text-rad-kh ${router.pathname === '/blog' ? 'text-rad-kh' : 'text-gray-500'}`}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/about-us"
                                    className={`text-base font-medium hover:text-rad-kh ${router.pathname === '/about-us' ? 'text-rad-kh' : 'text-gray-500'}`}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className={`text-base font-medium hover:text-rad-kh ${router.pathname === '/contact-us' ? 'text-rad-kh' : 'text-gray-500'}`}
                                >
                                    Contact Us
                                </Link>



                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link
                                    href="/login"
                                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-rad-kh "
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  btn-kh"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div
                        className={
                            open
                                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        }
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <Link href='/' className='inline-block'>
                                        <Image
                                            className="h-8 w-auto"
                                            src={Logo}
                                            alt="Workflow"
                                        />
                                    </Link>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            onClick={() => setOpen(!open)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            {/* Heroicon name: outline/x */}
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        <Link
                                            href="/programs"
                                            className={`-m-3 p-3 flex items-center rounded-md hover:bg-org-light-jo  ${router.pathname === '/programms' ? 'bg-org-light-jo' : ''}`} >
                                            {/* Heroicon name: outline/cursor-click */}

                                            <span className="ml-3 text-base font-medium text-gray-900">
                        Programms
                    </span>
                                        </Link>
                                        <Link
                                            href="/blog"
                                            className={`-m-3 p-3 flex items-center rounded-md hover:bg-org-light-jo  ${router.pathname === '/blog' ? 'bg-org-light-jo' : ''}`} >
                                            {/* Heroicon name: outline/cursor-click */}

                                            <span className="ml-3 text-base font-medium text-gray-900">
                        Blog

                    </span>
                                        </Link>
                                        <Link
                                            href="/about-us"
                                            className={`-m-3 p-3 flex items-center rounded-md hover:bg-org-light-jo  ${router.pathname === '/about-us' ? 'bg-org-light-jo' : ''}`} >
                                            {/* Heroicon name: outline/cursor-click */}

                                            <span className="ml-3 text-base font-medium text-gray-900">

About Us


                    </span>
                                        </Link>

                                        <Link
                                            href="/contact-us"
                                            className={`-m-3 p-3 flex items-center rounded-md hover:bg-org-light-jo  ${router.pathname === '/contact-us' ? 'bg-org-light-jo' : ''}`} >
                                            {/* Heroicon name: outline/cursor-click */}

                                            <span className="ml-3 text-base font-medium text-gray-900">

Contact Us


                    </span>
                                        </Link>


                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">

                                <div>
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white btn-kh"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500 ">
                                        Existing customer?
                                        <a href="#" className="text-rad-kh ml-2">
                                             Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default Nav;





