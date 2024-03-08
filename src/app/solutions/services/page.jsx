import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card1Data from '../../../textContent/services/card1Data.json';
import card2Data from '../../../textContent/services/card2Data.json';

export const metadata = {
    title: 'Wahni provides simple-to-use ERP software solutions in India',
    description:
        'Transform your service business with our comprehensive ERP solutions. Streamline operations, enhance communication, and boost efficiency.',
    keyword: 'erp software solutions,wahni it,erpnext',
};
const page = () => {
    const heroTextContent = {
        heading: 'The All-in-One Powerhouse for Service Businesses',
        caption:
            'Track progress, manage resources, and collaborate seamlessly across teams. Real-time insights keep you ahead of schedule and ensure client satisfaction.',
        image: '/images/hero/projects.png',
        buttonText: 'Contact Sales',
        buttonLink: 'Contact Sales',
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
