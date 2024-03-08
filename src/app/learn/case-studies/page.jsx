import CaseStudies from '../../../components/CaseStudies.jsx';
import { Fragment } from 'react';
import Head from 'next/head.js';
import Hero from '@/components/Hero.jsx';

export const metadata = {
    title: 'Read the Case Studies of  Wahni IT Solutions',
    description:
        'Read about cloud ERP, software, setup, integration, business solutions, and related topics on our case studies, along with the most recent business news.',
    keyword: 'wahni it blogs,Best ERP software,erp,erpnext',
};

const page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <div id="page-1" className="max-h-full  mt-3 bg-opacity-80 mb-52">
                <Hero
                    heading="Wahni's Playbook: Strategies for Success, Uncovered"
                    caption="Don't just take our word for it. Experience
                        real-world transformations firsthand. Dive into
                        compelling case studies where businesses just like yours
                        unlocked explosive growth, and streamlined operations."
                    showShadowOnImage={false}
                    image="/images/company-vector.png"
                />
            </div>
            <div className=" p-10 md:p-0">
                <CaseStudies />
            </div>
        </Fragment>
    );
};

export default page;
