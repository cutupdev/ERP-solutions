import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card2Data from '../../../textContent/manufacturing/cardTwo.json';
import card3Data from '../../../textContent/manufacturing/cardThree.json';
import cardData from '../../../textContent/manufacturing/cardOne.json';

export const metadata = {
    title: 'Manufacturing ERP Providers in Kochi Kerala, Wahni',
    description:
        'Top Manufacturing ERP Providers in Kochi, Kerala - Wahni IT Solutions. Optimize processes, cut costs, and drive strategic decisions with our ERP solution.',
    keywords:
        'Manufacturing,erp for manufacturing industry in india,wahni it,erpnext',
};

const Page = () => {
    const heroTextContent = {
        heading: 'Quality, Efficiency, Growth',
        caption:
            ' ERPNext lets you create, manage, and track multi-level BOMs for all your products. Ensure accurate costing, eliminate production delays, and optimize material usage',
        image: '/images/hero/manufacturing.png',
        buttonText: 'Contact Sales',
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
            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard
                    data={card3Data}
                    bgColor="bg-[#ccf4c7] bg-opacity-40"
                    btnColor="bg-[#52d34d]"
                />
            </div>

            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard
                    data={cardData}
                    bgColor="bg-[#D2E0FB] bg-opacity-40"
                    btnColor="bg-[#528ff6]"
                    borderColor=" border-[#528ff6]"
                />
            </div>

            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard
                    data={card2Data}
                    bgColor="bg-[#E5E0FF] bg-opacity-40"
                    btnColor="bg-[#313bb2]"
                    borderColor=" border-[#313bb2]"
                />
            </div>
        </Fragment>
    );
};

export default Page;
