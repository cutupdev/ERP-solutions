'use client';
import './Main.css';
import {
    faCoins,
    faIndustry,
    faStore,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';
import ChangeText from './ChangeText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import Frappe from './Frappe';
import Link from 'next/link';
import LogosMarquee from './LogosMarquee';
import logosData from '../textContent/logos/logosData.json';

export default function Home() {
    const textContent = [
        'streamline operations',
        'automate production',
        'increase profits',
        'reduce costs',
        'boost productivity',
    ];

    return (
        <Fragment>
            <div id="page-1" className="h-full bg-opacity-80">
                <video
                    src="images/home-video.webm"
                    autoPlay={true}
                    muted={true}
                    loop
                    width={1000}
                    height={100}
                    alt="img"
                    className="md:hidden my-[4vw] mx-3"
                    id="topimg"
                />
                <div id="content">
                    <div className="w-full max-h-screen grid md:grid-cols-2">
                        <div className="mx-4 md:mx-24 md:py-12">
                            <ChangeText
                                staticText="we have the solutions to"
                                animTextContent={textContent}
                                interval={2000}
                                staticTextClass="text-3xl md:text-5xl h-auto md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-[#393939]"
                                animTextClass="w-full typed"
                            />

                            <div
                                className="bg-transparent py-4 rounded-md mt-8"
                                id="btn"
                            >
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/solutions/manufacturing">
                                        <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                            <FontAwesomeIcon
                                                icon={faIndustry}
                                                className="text-blue-600"
                                            />
                                            Manufacturing
                                        </button>
                                    </Link>
                                    <Link href='/solutions/retail'>
                                        <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                            <FontAwesomeIcon
                                                icon={faStore}
                                                className="text-blue-600"
                                            />
                                            Retail
                                        </button>
                                    </Link>

                                </div>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Link href='/products/erpnext'>
                                        <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                            <FontAwesomeIcon
                                                icon={faCoins}
                                                className="text-blue-600"
                                            />{' '}
                                            ERPNext{' '}
                                        </button>
                                    </Link>
                                    <Link href='/services/e-commerce'>
                                        <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                            <FontAwesomeIcon
                                                icon={faWarehouse}
                                                className="text-blue-600"
                                            />{' '}
                                            E-commerce{' '}
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link href="/contact-sales">
                                    <Button variant="gradient" color="blue">
                                        Schedule a Free Demo
                                    </Button>
                                </Link>
                            </div>

                            <div
                                className="mt-[8vw] md:mt-[3vw] mx-[5vw] md:mx-[0vw]"
                                id="qualifications"
                            >
                                <Frappe />

                                <p className='flex items-center justify-start gap-3'>
                                    <div>
                                        <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                        <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                        <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                        <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                    </div>
                                    <span className="text-md text-gray-600 ">
                                        Based on Customer Reviews
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div id="right" className="hidden md:block ">
                            <video
                                src="images/home-video.webm"
                                autoPlay
                                loop
                                muted
                                width={10000}
                                height={100}
                                alt="video"
                                className=""
                                id="bottomimg"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col md:mt-auto p-10 md:opacity-60 opacity-50 md:items-center md:justify-center md:flex-col bg-transparent mb-[5vw] bg-black">
                        <LogosMarquee data={logosData} />
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
