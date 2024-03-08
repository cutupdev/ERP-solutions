import './workflow.css';

import Card1Data from '../../../textContent/workflow/Card1Data.json';
import Card2Data from '../../../textContent/workflow/Card2Data.json';
import Card3Data from '../../../textContent/workflow/Card3Data.json';
import Card4Data from '../../../textContent/workflow/Card4Data.json';
import Data3 from '../../../textContent/servicesHeroContent/WorkFlow.json';

import { Fragment } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Rocket from '../../../components/Rocket';
import ServicesHero from '@/components/ServicesHero';
import VideoTextCard from '@/components/VideoTextCard';

import img from '../../../../public/images/blog2.webp';
import jsonData1 from '../../../textContent/rocket/rocket1.json';

export const metadata = {
    title: 'Workflow Automation — Wahni IT Solutions',
    description:
        'we are experienced in workflow automation in Kerala Legislative Assembly through ICFOSS a governmental agency supporting free and open-source software.',
    keyword: 'Workflow Automation,wahni it,erpnext',
};

const page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <div
                id="mainworkflow"
                className="w-full py-5 md:pt-6  pt-16 px-6 flex flex-col items-center justify-center "
            >
                <ServicesHero data={Data3} />
                <div
                    id="card"
                    className="bg-[#D2E0FB] w-full py-5 px-5 flex items-center  justify-center flex-col md:flex-row mt-20 md:mt-20 rounded-xl md:rounded-2xl md:w-[60%] md:py-20"
                >
                    <div className="md:hidden">
                        <Image
                            src={img}
                            alt="img"
                            height={100}
                            width={500}
                            className="my-5 rounded-lg"
                        />
                    </div>
                    <div className="text-center md:text-left  md:w-96">
                        <p className="text-blue-400 font-bold text-xl ">
                            ERPNext
                        </p>
                        <h1 className="text-3xl font-bold text-[#2e2e2e] pb-10 pt-5">
                            Imagine a world where tasks flow seamlessly,
                            deadlines are met effortlessly, and repetitive work
                            becomes a distant memory.
                        </h1>
                        <h3 className="text-xl font-semibold text-gray-900 text-opacity-90">
                            This isn&apos;t a utopian dream, it&apos;s the
                            reality of workflow automation with ERPNext, the
                            open-source enterprise resource planning platform
                            that&apos;s transforming businesses across
                            industries.
                        </h3>
                    </div>
                    <div id="imng" className="md:block hidden">
                        <Image
                            src={img}
                            alt="img"
                            height={100}
                            width={600}
                            className="my-5 rounded-lg"
                        />{' '}
                    </div>
                </div>
            </div>
            <div className=" px-4">
                <h1 className="md:text-4xl text-2xl font-bold md:pb-28 md:pt-20 pt-20 pb-10 text-center">
                    Let&apos;s dive deeper into how workflow automation <br />{' '}
                    with ERPNext can benefit specific departments:
                </h1>
                <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                    <VideoTextCard data={Card1Data} />
                </div>
                <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                    <VideoTextCard data={Card2Data} />
                </div>
                <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                    <VideoTextCard data={Card3Data} />
                </div>
                <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                    <VideoTextCard data={Card4Data} />
                </div>
            </div>
            <div id="iconss" className="flex items-center justify-center my-10">
                <Rocket jsonData={jsonData1} />
            </div>
        </Fragment>
    );
};

export default page;
