import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card1Data from '../../../textContent/realestate/card1Data.json';
import card2Data from '../../../textContent/realestate/card2Data.json';

export const metadata = {
    title: 'ERP Solutions For Real Estate Industry in India',
    description:
        'Streamline property management. Track rentals, vacancies, renewals, and more. Take control of your real estate assets with our ERP solutions.',
    keywords:
        'best real estate brokerage software,real estate software company',
};

const page = () => {
    const heroTextContent = {
        heading: 'Manage Properties Like a Pro',
        caption:
            ' Manage your entire portfolio, from listings to leases, effortlessly. Track maintenance schedules, monitor tenant activity, and generate detailed reports - all in one centralized platform. ',
        image: '/images/hero/accounts.png',
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
