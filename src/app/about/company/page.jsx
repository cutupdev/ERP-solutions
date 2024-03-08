import './company.css';
import Core from '@/components/Core';
import CoreData from '@/textContent/cores/Data.json';
import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
export const metadata = {
    title: 'About Wahni ERP Softwares - Best ERP Softwares in India',
    description:
        'Best ERP software in India. Our Open Source ERP Software services revolve around FOSS products. From implementation to training and support, we cover it all.',
    keyword: 'wahni it,erpnext,best accounting software in kerala',
};

const Page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero
                image="/images/company-vector.png"
                showShadowOnImage={false}
                heading="Beyond code, beyond expectations. Wahni IT Solutions"
                caption="Beyond the code, beyond expectations. We're Wahni IT Solutions, where innovation meets expertise to fuel your business transformation."
            />
            <Mission />
            <Core data={CoreData} />
        </Fragment>
    );
};

export default Page;
