import './ecommerce.css';
import Card1Data from '../../../textContent/e-commerce/Card1Data.json';
import Card2Data from '../../../textContent/e-commerce/Card2Data.json';
import Data2 from '../../../textContent/servicesHeroContent/e-commerce';

import { Fragment } from 'react';
import Rocket from '../../../components/Rocket';
import ServicesHero from '@/components/ServicesHero';
import VideoTextCard from '@/components/VideoTextCard';

import jsonData2 from '../../../textContent/rocket/rocket2.json';

export const metadata = {
    title: 'E-Commerce — Wahni IT Solutions',
    description:
        'We provide setting up of E-commerce sites and integrating the same with all the payment with all backend operations also integrated with ERPNext',
    keyword: 'ECommerce, E-Commerce, ecommerce,wahni it',
};

const page = () => {
    return (
        <Fragment>
            <div>
                <div
                    id="mainecommerce"
                    className="w-full py-5 md:pt-6  pt-16 px-6 flex flex-col items-center justify-center "
                >
                    <ServicesHero data={Data2} />
                </div>
                <div className=" px-4 md:pt-20 pt-1">
                    <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                        <VideoTextCard data={Card1Data} />
                    </div>
                    <div className="p-1 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                        <VideoTextCard data={Card2Data} />
                    </div>
                </div>
                <div
                    id="rocket"
                    className="flex items-center justify-center my-10"
                >
                    <Rocket jsonData={jsonData2} />
                </div>
            </div>
        </Fragment>
    );
};

export default page;
