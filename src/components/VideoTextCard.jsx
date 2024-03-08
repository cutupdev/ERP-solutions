'use client';
import './VideoTextCard.css';
import React, { Suspense, useMemo, useState } from 'react';
import { Chip } from '@material-tailwind/react';
import Image from 'next/image';
import videoTextCardColors from '../theme/videoTextCardColors';
const randInt = () => Math.floor(Math.random() * videoTextCardColors.length);

function VideoTextCard({ data }) {
    const tabs = Object.keys(data);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const theme = useMemo(() => videoTextCardColors[randInt()], []);

    if (!data[selectedTab]) {
        return <Suspense />;
    }



    return (
        <div
            id="Videotextcard"
            style={{ backgroundColor: theme.primary }}
            className={`text-[#3d3d3d]   md:mt-3 md:mb-0 mt-28 py-10 px-5 rounded-3xl  md:px-8`}
        >
            {data[selectedTab].top ? (
                <p
                    style={{ color: theme.secondary }}
                    className={`text-2xl font-extrabold`}
                >
                    {data[selectedTab].top}
                </p>
            ) : (
                ''
            )}
            <div className="md:mt-4 flex overflow-x-auto gap-x-6">
                {tabs.length > 0 ? (
                    tabs.map((tab) => (
                        <p
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            style={{
                                borderColor:
                                    selectedTab === tab
                                        ? theme.secondary
                                        : 'transparent',
                            }}
                            className={`text-lg font-bold whitespace-nowrap cursor-pointer  capitalize transition duration-300 ${selectedTab === tab ? `border-b-4` : ''
                                }`}
                        >
                            {tab}
                        </p>
                    ))
                ) : (
                    <div id="tab" className="mb-[-3rem]"></div>
                )}
            </div>
            <div className="md:my-22 w-full">
                <div className="mt-10 flex flex-col md:flex-row md:justify-between">
                    <div className="order-2 md:order-1 mt-12 md:mt-0">
                        <div id="title" className="">
                            <p className="text-4xl font-bold">
                                {data[selectedTab].heading}
                            </p>
                        </div>
                        <div
                            id="text"
                            className="p-2 mt-2 rounded-3xl text-lg font-semibold leading-6"
                        >
                            {data[selectedTab].body &&
                                data[selectedTab].body
                                    .split('\n')
                                    .map((i, index) => (
                                        <p key={index} className="mt-4">
                                            {i}
                                        </p>
                                    ))}

                            {data[selectedTab].points
                                ? data[selectedTab].points.map((i, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start py-2"
                                    >
                                        <div className="mr-2">
                                            <Chip
                                                className="px-2.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                                value={idx + 1}
                                            />
                                        </div>
                                        <p className="w-full">{i}</p>
                                    </div>
                                ))
                                : null}
                        </div>
                    </div>

                    <div className="order-1 md:order-2 md:pb-10 md:px-16">
                        {!data[selectedTab].image && data[selectedTab].video ? (
                            <video
                                src={data[selectedTab].video}
                                alt="img"
                                autoPlay
                                loop
                                muted
                                width={3500}
                                height={2160}
                                className="w-auto md:max-w-[35rem] rounded-lg"
                                id="bottom-video"
                            />
                        ) : null}

                        {!data[selectedTab].video && data[selectedTab].image ? (
                            <Image
                                src={data[selectedTab].image}
                                alt={data[selectedTab].heading}
                                width={100}
                                height={100}
                                className="w-screen md:min-w-[35rem] rounded-xl"
                            />
                        ) : null}

                        {!data[selectedTab].image &&
                            !data[selectedTab].video ? (
                            <video
                                src="/images/work-order.webm"
                                alt="img"
                                autoPlay
                                loop
                                muted
                                width={3500}
                                height={2160}
                                className="w-auto md:max-w-[35rem] rounded-lg"
                            />
                        ) : null}
                    </div>
                    {/* <div
                        id="btns"
                        className="flex items-center justify-center md:block p-3"
                    >
                        <button
                            style={{ backgroundColor: theme.secondary }}
                            className={`py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white`}
                        >
                            Dummybtn
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default VideoTextCard;
