'use client';
import './FeaturesCard.css';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import featuresCardData from '@/textContent/index/featuresCardData.json';

export default function FeaturesCard() {
    const keys = Object.keys(featuresCardData);
    const [activeTab, setActiveTab] = useState(keys[0]);

    return (
        <Fragment>
            <div
                id="main-delivery"
                className="w-full min-h-screen bg-white py-20 px-5 md:px-28"
            >
                <div id="upper" className="w-full text-center py-5">
                    <h1 className="text-6xl font-extrabold text-[#2e2e2e]">
                        Perfect fit{' '}
                        <span className="gradient-text">for every team</span>
                    </h1>
                    <p className="text-md mt-3 font-semibold">
                        Get started fast with out-of-the-box solutions.
                    </p>
                    <p>Easily customize to your needs!</p>
                </div>
                <div
                    id=""
                    className="lower my-10 md:flex md:flex-col md:items-center"
                >
                    <div className="flex  gap-10 justify-center items-center p-5  overflow-x-auto">
                        {keys.map((tab, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer ${activeTab === tab
                                    ? 'text-black font-semibold p-8 border border-gray-300 rounded-lg shadow-lg shadow-purple-100 transition duration-300'
                                    : 'font-medium text-gray-700  border shadow-sm p-8 rounded-lg transition duration-300  scale-100 hover:scale-95 '
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                <div className="text-center">
                                    <i
                                        className={`ri-${featuresCardData[tab].icon} text-3xl`}
                                    ></i>
                                </div>
                                <p>{tab}</p>
                            </div>
                        ))}
                    </div>
                    <div
                        id=""
                        className="card border rounded-lg w-4/5 py-8 px-10 grid md:grid-cols-2 gap-5 shadow-lg shadow-purple-100 mt-1"
                    >
                        <div>
                            <h2 className="font-bold text-2xl my-3">
                                {featuresCardData[activeTab].heading}
                            </h2>
                            <p className="text-lg font-semibold mt-4">
                                {featuresCardData[activeTab].caption}
                            </p>
                            <ul className="text-md mt-4">
                                {featuresCardData[activeTab].benefits.map(
                                    (benefit) => (
                                        <li key={benefit}>
                                            <i className="ri-checkbox-circle-line text-green-700"></i>
                                            &nbsp;
                                            <span className="font-normal text-lg">
                                                {benefit}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div className="w-full md:w-3/4 ms-auto">
                            <ul className="text-sm font-semibold border-2 border-gray-300 rounded-lg">
                                {featuresCardData[activeTab].points.map(
                                    (item, idx) => (
                                        <li
                                            key={item.title}
                                            className={
                                                idx !==
                                                    featuresCardData[activeTab]
                                                        .points.length -
                                                    1
                                                    ? `border-b-2 border-gray-300 p-3`
                                                    : 'p-3'
                                            }
                                        >
                                            <i
                                                className={`ri-${item.icon} text-lg mx-2 text-gray-600`}
                                            ></i>
                                            <span className="text-lg font-medium">
                                                {item.title}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <div className="ms-auto">
                                <Link href="/contact-sales">
                                    <button className="mt-6 w-full bg-gradient-to-r from-[#4695F0] to-[#FC42CE] py-3 md:py-2 md:text-md rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                                        Use this Solution{' '}
                                        <i className="ri-arrow-right-line"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
