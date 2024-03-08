import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card2Data from '@/textContent/solutions/distribution/card2Data.json';
import card3Data from '@/textContent/solutions/distribution/card3Data.json';
import cardData from '@/textContent/solutions/distribution/cardData.json';

export const metadata = {
    title: 'The best erp distribution system in India',
    description:
        'Efficiently manage supply chains, inventory, and more. Transform your distribution business with user-friendly, cost-effective open source solutions.',
    keywords:
        'Distribution,The best erp distribution system in India,wahni it,erpnext',
};

const page = () => {
    const heroTextContent = {
        heading: "The Distribution Powerhouse You've Been Waiting For",
        caption:
            'Simplify your supply chain. ERPNext streamlines processes and eliminates bottlenecks, so your operations flow smoothly.',
        image: '/images/hero/stock.png',
        buttonText: 'Talk to Sales',
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

            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]">
                <VideoTextCard data={cardData} />
            </div>

            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]">
                <VideoTextCard data={card2Data} />
            </div>

            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]">
                <VideoTextCard data={card3Data} />
            </div>
        </Fragment>
    );
};

export default page;
