import BlogCard from '@/components/Blogs';
import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const page = () => {
    return (
        <Fragment>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>

            <div className=" md:p-0 p-1">
                <div id="page-1" className="  bg-opacity-80 pb-20">
                    <Image
                        width={1000}
                        height={100}
                        src="/images/company-vector.png"
                        alt="video"
                        className="md:hidden  md:mt-[1vw]  md:mx-auto"
                    />
                    <div id="content">
                        <div className="w-full max-h-screen flex flex-col  md:flex-row mt-[-5vw] md:mt-[-2vw] ">
                            <div
                                id="left"
                                className="md:w-1/2 md:h-full md:px-28 md:py-28 md:ml-10 "
                            >
                                <h1
                                    className="text-3xl h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw]  text-gray-800"
                                    id="maintext"
                                >
                                    Dive into Captivating Stories and Articles.
                                </h1>
                                <p className="font-semibold my-5 text-gray-600">
                                    Discover how this open-source ERP empowers
                                    your business to streamline operations,
                                    boost efficiency, and drive profitability.
                                </p>
                            </div>
                            <div
                                id="right"
                                className="hidden md:block w-[60%] h-full bg-transparent object-center"
                            >
                                <Image
                                    src="/images/company-vector.png"
                                    alt="img/"
                                    width={500}
                                    height={100}
                                    className="w-[100%] mt-14 pr-[10vw]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 md:p-0">
                <BlogCard />
            </div>
        </Fragment>
    );
};

export default page;

export const metadata = {
    title: 'Best ERP software blogs from Wahni IT Solutions',
    description:
        'Read about cloud ERP, software, setup, integration, business solutions, and related topics on our blog, along with the most recent business news.',
    keyword: 'wahni it blogs,Best ERP software,erp,erpnext',
};
