import './erp.css';
import Data from '../../../textContent/servicesHeroContent/erp-next.json';
import FeaturesCard from '@/components/FeaturesCard';
import { Fragment } from 'react';
import Head from 'next/head';
import LogosMarquee from '@/components/LogosMarquee';
import Rocket from '@/components/Rocket';
import ScrollableIcons from '@/components/ScrollableIcons';
import ServicesHero from '@/components/ServicesHero';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/manufacturing/cardOne.json';
import featuresCardData from '@/textContent/products/erpnext/featuresCardData.json';
import logosData from '@/textContent/logos/logosData.json';
import rocketTextContent from '@/textContent/rocket/rocket3.json';
import scrollableIconsData from '@/textContent/products/erpnext/scrollableIconsData.json';

const page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <ServicesHero data={Data} />
            <ScrollableIcons data={scrollableIconsData} />
            <LogosMarquee data={logosData} />
            <div
                id="main"
                className="p-5 mt-14 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard
                    data={cardData}
                    bgColor="bg-[#D2E0FB] bg-opacity-40"
                    btnColor="bg-[#528ff6]"
                    borderColor=" border-[#528ff6]"
                />
            </div>
            <FeaturesCard data={featuresCardData} />
            <Rocket jsonData={rocketTextContent} />
        </Fragment>
    );
};

export default page;

export const metadata = {
    title: 'ERPNext Kerala: Open-source ERP Platform, Wahni IT Solutions',
    description:
        'ERPNext in Ernakulam, Kerala. Open-source, easy-to-use, budget-friendly ERP platform for trading, distribution, manufacturing & more. Frappe technologies',
    keyword: 'next in',
};
