'use client';
import React, { useState } from 'react';
import './Delivery.css';
import { FaHome, FaBuilding } from 'react-icons/fa';

const Delivery = () => {
    const [activeTab, setActiveTab] = useState(1); // Initially set the active tab to 1

    const tabs = [
        { icon: <FaHome className="md:text-2xl text-3xl text-[#212121]" /> },
        {
            icon: (
                <FaBuilding className="md:text-2xl text-3xl text-[#212121]" />
            ),
        },
        {
            icon: (
                <FaBuilding className="md:text-2xl text-3xl text-[#212121]" />
            ),
        },
        { icon: <FaHome className="md:text-2xl text-3xl text-[#212121]" /> },
        {
            icon: (
                <FaBuilding className="md:text-2xl text-3xl text-[#212121]" />
            ),
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
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
                    <p>Easily customize Wahni as team needs grow!</p>
                </div>
                <div
                    id=""
                    className="lower my-10 md:flex md:flex-col md:items-center"
                >
                    <div className="flex  gap-6 justify-center items-start p-5 overflow-x-auto bg-black">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={` ${activeTab === index + 1
                                    ? 'text-black font-extrabold p-8 border-[1px] border-black rounded-lg scale-110 shadow-lg shadow-red-50 transition duration-300'
                                    : 'font-extrabold text-black  border-[1px]  shadow-sm p-8 rounded-lg transition duration-300  hover:scale-95 '
                                    }`}
                                onClick={() => handleTabClick(index + 1)}
                            >
                                {tab.icon}
                            </div>
                        ))}
                    </div>
                    <div
                        id=""
                        className="card border-2 border-gray-500 rounded-lg w-full md:w-[70%] lg:w-[60%] xl:w-[70%] py-8 px-10 grid  md:grid-cols-2 gap-5 shadow-lg shadow-red-100 mt-1"
                    >
                        <div id="lft">
                            <h2 className="font-bold text-lg my-3">
                                Deliver projects on time, every time
                            </h2>
                            <p className="text-sm font-semibold my-1">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ducimus, perspiciatis ea.
                            </p>
                            <ul className="text-md font-semibold">
                                <li>
                                    <i className="ri-checkbox-circle-line text-sm font-bold mx-2"></i>
                                    Lorem ipsum dolor sit amet consectetur.
                                </li>
                                <li>
                                    <i className="ri-checkbox-circle-line text-sm font-bold mx-2"></i>
                                    Lorem ipsum dolor sit amet consectetur.
                                </li>
                                <li>
                                    <i className="ri-checkbox-circle-line text-sm font-bold mx-2"></i>
                                    Lorem ipsum dolor sit amet consectetur.
                                </li>
                            </ul>
                        </div>
                        <div id="rght" className=" rounded-md ">
                            <ul className="text-sm font-semibold border-2 border-gray-300 rounded-lg">
                                <li className="border-b-2 border-gray-300 p-3 ">
                                    <i className="ri-settings-3-line text-lg mx-2"></i>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className="border-b-2 border-gray-300 p-3 ">
                                    <i className="ri-git-repository-fill text-lg mx-2"></i>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className="border-b-2 border-gray-300 p-3 ">
                                    <i className="ri-gallery-fill text-lg mx-2"></i>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className=" border-gray-300 p-3 ">
                                    <i className="ri-thermometer-fill text-lg mx-2"></i>{' '}
                                    Lorem ipsum dolor sit amet.
                                </li>
                            </ul>
                            <div className="p-4">
                                <button className="mt-4 bg-gradient-to-r from-[#4695F0] to-[#FC42CE] px-6 py-3 md:py-1 md:px-10 md:text-md rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                                    Use this Solution{' '}
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Delivery;

