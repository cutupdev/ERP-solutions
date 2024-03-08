'use client';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';

const JobCard = ({ jobTitle, jobLocation, jobDescription, jobType, name }) => {
    const [showPopup, setShowPopup] = useState(false);

    const jobIcons = {
        manager: 'speak-line',
        consultant: 'presentation-line',
        developer: 'code-s-slash-line',
        accountant: 'money-rupee-circle-line',
        socialMedia: 'smartphone-line',
        sales: 'customer-service-2-line',
        briefcase: 'briefcase-line',
    };

    function getIcon(jobTitle) {
        if (jobTitle.includes('Manager')) {
            return jobIcons.manager;
        } else if (jobTitle.includes('Consultant')) {
            return jobIcons.consultant;
        } else if (jobTitle.includes('Developer')) {
            return jobIcons.developer;
        } else if (jobTitle.includes('Social Media')) {
            return jobIcons.socialMedia;
        } else if (jobTitle.includes('Sales')) {
            return jobIcons.sales;
        } else {
            return jobIcons.briefcase;
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <Fragment>
            <div className="md:px-20 px-5 py-5 md:py-4 flex flex-col items-center">
                <div className="w-full rounded-lg md:max-w-[70%] border border-gray-300 mt-5 py-5 md:px-10 px-4">
                    <div
                        id="upper"
                        className="w-full flex flex-col md:flex-row gap- items-center justify-between"
                    >
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
                            <i
                                className={`ri-${getIcon(
                                    jobTitle,
                                )} text-3xl text-[#535353]`}
                            ></i>
                            <h1 className="text-2xl font-extrabold text-[#535353]">
                                {jobTitle}
                            </h1>
                        </div>
                        <p className="flex items-center text-xl font-bold mt-4 md:mt-0 text-[#535353]">
                            <i className="ri-map-pin-line text-xl "></i>
                            {jobLocation}
                        </p>
                    </div>
                    <div
                        id="lower"
                        className="w-full pt-6 md:pt-14 flex flex-col md:flex-row items-center justify-between"
                    >
                        <div
                            id="btns"
                            className="flex flex-col md:flex-row gap-5 font-bold"
                        >
                            <button className="bg-gray-100 text-gray-600 py-2 px-5 rounded-lg">
                                {jobType}
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href={{
                                    pathname: '/apply-job',
                                    query: { jobId: name },
                                }}
                            >
                                <button className="mt-4 md:mt-0 md:py-3 md:px-6 py-2 px-4 bg-blue-400 text-white text-sm font-bold rounded-lg">
                                    Apply Now
                                </button>
                            </Link>
                            <button
                                onClick={togglePopup}
                                className="mt-4 md:mt-0 py-3 px-6 bg-gray-200 text-[#2e2e2e] text-sm font-bold rounded-lg"
                            >
                                {showPopup ? (
                                    <i className="ri-arrow-up-s-line"></i>
                                ) : (
                                    <i className="ri-arrow-down-s-line"></i>
                                )}
                                &nbsp;Read Description
                            </button>
                        </div>
                    </div>
                    {showPopup && (
                        <div className="page-dim-overlay  md:py-10  pt-10">
                            <div className="popup-content  md:p-5  rounded-md">
                                <div
                                    className=" w-full"
                                    dangerouslySetInnerHTML={{
                                        __html: jobDescription,
                                    }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default JobCard;
