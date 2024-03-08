import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card1Data from '../../../textContent/education/card1Data.json';
import card2Data from '../../../textContent/education/card2Data.json';

export const metadata = {
    title: 'Educational ERP Software for Schools in India - Wahni IT',
    description:
        'ERPnext is an educational software that streamlines and manages student data effectively. For your school, find the best education ERP system.',
    keyword: 'Education,educational erp software india,erpnext',
};

const page = () => {
    const heroTextContent = {
        heading: 'Educate Brighter, Manage Smoother',
        caption:
            'Analyze student performance, track course effectiveness, and identify areas for improvement. These insights empower data-driven decisions.',
        image: '/images/hero/education.png',
        buttonText: 'Talk to Sales',
        buttonLink: 'contact-sales',
    };
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero {...heroTextContent} />
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                <VideoTextCard data={card1Data} />
            </div>
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                <VideoTextCard data={card2Data} />
            </div>
        </Fragment>
    );
};

export default page;
