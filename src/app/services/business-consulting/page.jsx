import './business.css';
import BusinessConsultTimeline from '@/components/BusinessConsultTimeline';
import Data4 from '../../../textContent/servicesHeroContent/Business';
import { Fragment } from 'react';
import Rocket from '../../../components/Rocket';
import ServicesHero from '@/components/ServicesHero';

import rocket3 from '../../../textContent/rocket/rocket3.json';

export const metadata = {
    title: 'Business Consulting — Wahni IT Solutions',
    description:
        'Facing tax or accounting issues? Our skilled Chartered Accountants provide expert consultation and ensure seamless tax filings.',
    keyword: 'Business Consulting,Business Consulting wahni it,wahni it',
};

const Page = () => {
    return (
        <Fragment>
            <ServicesHero data={Data4} />
            <div
                id="ourmission"
                className="md:flex md:w-full md:py-[5vw] md:pl-[10vw] "
            >
                <div
                    id="leftmission"
                    className=" md:p-[0vw] p-[8vw] md:max-w-[40%]"
                >
                    <p className="text-blue-700 font-semibold md:text-xs text-lg uppercase tracking-widest">
                        Mission
                    </p>
                    <h1 className="md:text-4xl text-3xl font-extrabold md:mt-2 mt-[4vw] text-[#292D34] tracking-wider">
                        {' '}
                        Feeling overwhelmed by accounting headaches ?{' '}
                    </h1>
                    <div className="border-2 border-blue-500 rounded-3xl md:w-[5vw] w-[22vw] md:mt-[1vw] mt-[3vw]"></div>
                    <p className="md:mt-4 mt-[12vw] opacity-60">
                        You&apos;re not alone. At Wahni IT Solutions , we
                        understand the challenges businesses face in navigating
                        the ever-changing financial landscape. That&apos;s why
                        we offer a comprehensive suite of services to streamline
                        your operations, optimize your finances, and ensure your
                        compliance.
                    </p>
                </div>
                <div
                    id="rightmission"
                    className="md:w-[50%] md:flex items-center justify-center "
                >
                    <h1 className="text-5xl font-bold bg-white rounded-2xl p-10 shadow-2xl hover:scale-105 transition duration-500">
                        {' '}
                        Improve <br />{' '}
                        <span className="text-purple-600 font-extrabold">
                            financial
                        </span>{' '}
                        <br /> accuracy <br /> and{' '}
                        <span className="text-purple-600 font-extrabold">
                            transparency
                        </span>
                    </h1>
                </div>
            </div>
            <div
                id="timeline"
                className="flex flex-col items-center justify-center px-5"
            >
                <h1 className="md:text-4xl text-2xl font-bold md:pb-28 md:pt-0 pt-20 pb-10 text-center">
                    Unveiling our blueprint for <br /> successful ERP
                    implementation.
                </h1>
                <BusinessConsultTimeline />
            </div>
            <div id="iconss" className="flex items-center justify-center my-10">
                <Rocket jsonData={rocket3} />
            </div>
        </Fragment>
    );
};

export default Page;
