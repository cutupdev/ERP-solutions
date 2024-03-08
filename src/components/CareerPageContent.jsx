'use client';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { Option, Select } from '@material-tailwind/react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import JobCard from './JobCard';
import Link from 'next/link';
import { callServer } from '@/functions/api';
import { setJobRolesInSession } from '@/functions/utils';

function CareerPageContent() {
    const [jobOpenings, setJobOpenings] = useState(null);
    const [jobTitleFilter, setJobTitleFilter] = useState(null);
    const [jobLocationFilter, setJobLocationFilter] = useState(null);
    const [jobTypeFilter, setJobTypeFilter] = useState(null);
    const [filteredOpenings, setFilteredOpenings] = useState(jobOpenings);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [token, setToken] = useState(null);

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha('page_view');
        setToken(token);
    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    useEffect(() => {
        async function f() {
            if (!token) {
                return;
            }

            const jobOpeningData = await callServer(
                `get_job_openings?token=${token}`,
            );

            if (jobOpeningData.message) {
                const filteredData = jobOpeningData.message.data.filter(
                    (job) => job.status !== 'Closed',
                );
                setJobOpenings(filteredData);
                setFilteredOpenings(filteredData);
                setJobRolesInSession(
                    filteredData ? filteredData.map((i) => i.name) : {},
                );
            }
        }
        f();
    }, [token]);

    useEffect(() => {
        if (!jobOpenings) {
            return;
        }

        let filteredData = jobOpenings;

        if (jobTitleFilter) {
            filteredData = filteredData.filter(
                (job) => job.job_title === jobTitleFilter,
            );
        }

        if (jobLocationFilter) {
            filteredData = filteredData.filter(
                (job) => job.custom_location === jobLocationFilter,
            );
        }

        if (jobTypeFilter) {
            filteredData = filteredData.filter(
                (job) => job.custom_job_type === jobTypeFilter,
            );
        }

        setFilteredOpenings(filteredData);
    }, [jobOpenings, jobTitleFilter, jobLocationFilter, jobTypeFilter]);

    return (
        <>
            <div id="page-1" className="h-full bg-opacity-80 mb-52">
                <Image
                    width={1000}
                    height={100}
                    src="/images/rightimg.png"
                    autoPlay
                    muted
                    loop
                    alt="Image"
                    className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
                    id="top-image"
                />
                <div id="content">
                    <div className="w-full max-h-screen md:flex flex-col md:flex-row mt-[-5vw] ">
                        <div
                            id="left"
                            className="md:w-1/2 md:h-full md:pl-36 md:py-12 md:ml-10  md:pt-32"
                        >
                            <h1
                                className="text-3xl h-auto  md:h-auto md:text-6xl font-extrabold mt-[5vw] md:mt-[3vw] w-full text-gray-800"
                                id="maintext"
                            >
                                Unlock Your Potential with Our Thriving Team
                            </h1>
                            <p className="text-sm text-gray-600 pt-8">
                                We&apos;re not your average company, and neither
                                should your career be. Here, diversity thrives,
                                ideas ignite, and boundaries blur. We&apos;re
                                all about pushing limits, celebrating
                                differences, and building something
                                extraordinary together.
                            </p>

                            <Link href="/">
                                <button
                                    id="getquote"
                                    className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-[#57CCF9] rounded-md md:mt-[2vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                                >
                                    <span
                                        className="md:font-semibold font-extrabold text-[#f1f2f3]"
                                        id="getquote2"
                                    >
                                        Apply Now
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div
                            id="right"
                            className="hidden md:block w-[60%] h-full bg-transparent object-center md:pt-20"
                        >
                            <Image
                                src="/images/rightimg.png"
                                autoPlay
                                loop
                                muted
                                alt="Image"
                                width={1000}
                                height={100}
                                className="w-[100%] mt-14 pr-[10vw] transition-all delay-200 hover:scale-110"
                                id="bottom-Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-20 py-10 flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <Select
                        label="Job Title"
                        value={jobTitleFilter}
                        onChange={(x) => setJobTitleFilter(x)}
                    >
                        <Option value={null}>&nbsp;</Option>
                        {jobOpenings ? (
                            jobOpenings.map((x) => (
                                <Option key={x.job_title} value={x.job_title}>
                                    {x.job_title}
                                </Option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Select>

                    <Select
                        label="Location"
                        value={jobLocationFilter}
                        onChange={(x) => setJobLocationFilter(x)}
                    >
                        <Option value="">&nbsp;</Option>
                        {jobOpenings ? (
                            jobOpenings.map((x) => (
                                <Option
                                    key={x.custom_location}
                                    value={x.custom_location}
                                >
                                    {x.custom_location}
                                </Option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Select>

                    <Select
                        label="Job Type"
                        value={jobTypeFilter}
                        onChange={(x) => setJobTypeFilter(x)}
                    >
                        <Option value="">&nbsp;</Option>

                        {jobOpenings ? (
                            jobOpenings.map((x) => (
                                <Option
                                    key={x.custom_job_type}
                                    value={x.custom_job_type}
                                >
                                    {x.custom_job_type}
                                </Option>
                            ))
                        ) : (
                            <></>
                        )}
                    </Select>
                </div>
            </div>

            {filteredOpenings
                ? filteredOpenings.map((i) => (
                      <JobCard
                          key={i.name}
                          name={i.name}
                          jobTitle={i.job_title}
                          jobLocation={i.custom_location}
                          jobDescription={i.description}
                          jobType={i.custom_job_type}
                      />
                  ))
                : null}
        </>
    );
}

export default function Page() {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6Ld-QI0iAAAAAPW9CwclXHZYoX0H0QQLhqTuc2iQ"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            <CareerPageContent />
        </GoogleReCaptchaProvider>
    );
}
