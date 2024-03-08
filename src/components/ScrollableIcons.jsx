'use client';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';

const ScrollableIcons = ({ data }) => {
    const keys = Object.keys(data);
    const [activeTab, setActiveTab] = useState(keys[0]);
    return (
        <Fragment>
            <div className="flex gap-6 justify-center items-start p-5 overflow-x-auto">
                {keys.map((elm, idx) => (
                    <div
                        key={idx}
                        className={`cursor-pointer ${activeTab === elm
                            ? 'text-[#2e2e2e] font-bold px-6 py-4 border-gray-300 rounded-lg shadow-lg shadow-blue-50  transition duration-300'
                            : 'font-medium text-gray-400 shadow-sm p-6 rounded-lg transition duration-300  hover:scale-95 '
                            }`}
                        onClick={() => setActiveTab(elm)}
                    >
                        <div className="text-center mb-2">
                            <i className={`ri-${data[elm].icon} text-3xl`}></i>
                        </div>
                        <p>{elm}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center md:pt-1 md:pb-5 gap-3 p-5 md:p-0 md:py-20 ">
                <div className="px-10 py-20">
                    <Image
                        src={data[activeTab].image}
                        alt={`Location ${activeTab}`}
                        width={1000}
                        height={100}
                        className="icon-image rounded-lg shadow-purple-100 shadow-2xl"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ScrollableIcons;
