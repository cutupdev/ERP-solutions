import Contact from '@/components/Contact';
import Head from 'next/head';
import Layout from '../../layout';

export const metadata = {
    title: 'Contact Wahni - Best ERP Software Providers in Kerala',
    description:
        'Have questions or ready to transform your business with open-source ERP solutions? Reach out to Wahni ERP for expert guidance and unparalleled support. ',
    keyword:
        'wahni it,top erp software in kerala, erp software companies in kerala',
};

const page = () => {
    return (
        <div>
            <Layout showBackgroundImage={false}>
                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta name="keywords" content={metadata.keyword} />
                </Head>
                <Contact />
            </Layout>
        </div>
    );
};

export default page;
