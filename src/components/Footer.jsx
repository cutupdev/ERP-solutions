'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/favicon.png';

const Footer = () => {
    return (
        <Fragment>
            <footer className=" text-gray-600 body-font bg-[#fafafa]">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    <div className=" flex-shrink-0 md:mx-0 mx-auto  md:text-left justify-center md:flex flex-col md:items-left md:items-start items-center  flex ">
                        <Image
                            src={logo}
                            height={100}
                            width={70}
                            alt="img"
                            className=""
                        />
                        <p className="mt-5">
                            <i className="ri-customer-service-2-fill mr-3"></i>
                            <a href="tel:9005768830">9005768830</a>
                        </p>
                        <p>
                            <i className="ri-mail-fill mr-2"></i>{' '}
                            <a href="mailto:alsaifsiddiqui1@gmail.com">alsaifsiddiqui1@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase ">
                                Products
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="/products/erpnext"
                                        className="text-gray-600 hover:text-gray-800 font-semibold transition duration-300"
                                    >
                                        ERPNext
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/mobileapp"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Mobile App
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/neupos"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        NeuPOS
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase ">
                                Solutions
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="/solutions/retail"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Retail
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/healthcare"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Healthcare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/manufacturing"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Manufacturing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/distribution"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Distribution
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/services"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/education"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/realestate"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Real Estate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/solutions/agriculture"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Agriculture
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase ">
                                Resources
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="/learn/casestudies"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/learn/blogs"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/learn/faq"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        F.A.Q&apos;s
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase ">
                                About
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="/about/company"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about/team"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/careers"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact-sales"
                                        className="font-semibold text-gray-600 hover:text-gray-800 transition duration-300"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="">
                    <div className="container mx-auto py-4 px-0 flex  flex-wrap flex-col sm:flex-row  items-center ">
                        <p className="text-gray-500 text-sm text-center sm:text-left ">
                            © {new Date().getFullYear()} Wahni IT Solutions
                        </p>
                        <div className="inline-flex  sm:ml-auto sm:mt-0 mt-2 p-2 justify-center sm:justify-start">
                            <p className="w-full ">
                                <Link
                                    href={'/tos'}
                                    className="mx-2 hover:text-gray-900 transition duration-300"
                                >
                                    Terms of Service
                                </Link>{' '}
                                |{' '}
                                <Link
                                    href={'/privacy-policy'}
                                    className="mx-2 hover:text-gray-900 transition duration-300"
                                >
                                    Privacy Policy
                                </Link>{' '}
                            </p>
                            <div id="social" className='flex '>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100075923303577"
                                    target="_blank"
                                    className="text-gray-500"
                                    rel="noreferrer"
                                >
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/WahniSolutions"
                                    target="_blank"
                                    className="ml-3 text-gray-500"
                                    rel="noreferrer"
                                >
                                    <i className="ri-twitter-x-fill "></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/wahnierp_/"
                                    target="_blank"
                                    className="ml-3 text-gray-500"
                                    rel="noreferrer"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/wahni-it-solutions/"
                                    target="_blank"
                                    className="ml-3 text-gray-500"
                                    rel="noreferrer"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        ></path>
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            stroke="none"
                                        ></circle>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
