import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'NEUpos',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    keyword: 'lorem ipsum dolor sit amet, consect',
};
const page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero />
        </Fragment>
    );
};

export default page;
