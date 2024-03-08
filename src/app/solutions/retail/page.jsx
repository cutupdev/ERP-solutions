import { Fragment } from 'react';
import Hero from '@/components/Hero';
import VideoTextCard from '@/components/VideoTextCard';
import card2Data from '../../../textContent/retail/cardTwo.json';
import card3Data from '../../../textContent/retail/cardThree.json';
import cardData from '../../../textContent/retail/cardOne.json';

export const metadata = {
    title: ' Cloud-based easy-to-use ERP software for the retail industry ',
    description:
        'Cloud-based easy-to-use ERP software solutions to scale business operations from one showroom or branch to multiple showrooms or branches at any location.',
    keyword: 'best accounting software in kerala,wahni it,erpnext',
};

const Page = () => {
    const heroText = {
        heading: 'From Retail Chaos to Cashflow Nirvana',
        caption:
            'No matter your retail size or specialty, We have the tools to unleash your inner beast and turn your business into a cashflow symphony.',
        buttonText: 'Talk To Sales',
        buttonLink: '/contact-sales',
        image: '/images/hero/sales-dash.png',
    };

    return (
        <Fragment>
            <Hero {...heroText} />

            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard data={cardData} />
            </div>
            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center  md:px-[12vw]"
            >
                <VideoTextCard data={card2Data} />
            </div>
            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center  md:px-[12vw]"
            >
                <VideoTextCard data={card3Data} />
            </div>
        </Fragment>
    );
};

export default Page;
