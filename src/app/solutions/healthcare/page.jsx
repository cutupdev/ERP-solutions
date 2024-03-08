import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card1Data from '../../../textContent/healthcare/card1Data.json';
import card2Data from '../../../textContent/healthcare/card2Data.json';

export const metadata = {
    title: 'Wahni Healthcare ERP Software - For Healthcare Sector',
    description:
        'ERP software is a best solution for hospitals, clinics, and health systems because it is healthcare-focused. Better patient care, Reduced operational costs.',
    keyword:
        'best real estate brokerage software,best healthcare software,erp system for hospitals',
};

const page = () => {
    const heroTextContent = {
        heading: 'Ditch paperwork, automate tasks, focus on patients',
        caption:
            'ERPNext centralizes patient records, appointments, billing, and inventory management, reducing manual tasks and streamlining workflows.',
        image: '/images/hero/patient-appointment.png',
        buttonText: 'Contact Sales',
        buttonLink: '/contact-sales',
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
