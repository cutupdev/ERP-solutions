import FeaturesCard from '@/components/FeaturesCard';
import { Fragment } from 'react';
import Head from 'next/head';
import MainContent from '@/components/MainContent';
import ScrollableIcons from '@/components/ScrollableIcons';
import featuresCardData from '@/textContent/index/featuresCardData.json';
import scrollableIconsData from '@/textContent/index/scrollableIconsData.json';

export const metadata = {
    title: 'Best ERP Software in Kerala, ERP Companies in Kochi, Wahni',
    description:
        'Wahni IT Solutions offers Top ERP Software in Kochi Kerala for Retail, Healthcare, Education, Manufacturing, Real Estate, Distribution & Agriculture.',
    keyword:
        'erp solutions, best erp software in india, erp for schools india, erp software solutions',
    icons: {
        icon: '/images/favicon1.png',
        apple: '/images/apple-icon.png',
    },
};
export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <MainContent />
            <ScrollableIcons data={scrollableIconsData} />
            <FeaturesCard data={featuresCardData} />
        </Fragment>
    );
}
