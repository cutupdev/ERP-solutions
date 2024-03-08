import './page.css';
import { Fragment } from 'react';
import Image from 'next/image';
import greenicon from '../../../public/images/green-icon.webp';
import topicon from '../../../public/images/top-icon.webp';

const page = () => {
    return (
        <Fragment>
            <div
                id="main-submit"
                className="  bg-[#5CA4CA] px-3 py-10  h-screen flex items-center justify-center"
            >
                <div className="bg-white rounded-lg p-5 md:flex  items-center">
                    <div id="top-icon" className="p-2">
                        <Image
                            height={100}
                            width={900}
                            src={topicon}
                            alt="img"
                            className="w-full md:w-96"
                        />
                    </div>
                    <div id="bottom-content">
                        <Image
                            width={50}
                            height={100}
                            src={greenicon}
                            alt="img"
                        />
                        <h1 className="text-5xl text-green-400 font-bold my-3">
                            Thank You
                        </h1>
                        <p className="text-md text-green-400 font-semibold  mt-6 mb-10">
                            We have received your message, our team will get
                            back to you soon
                        </p>

                        <div>
                            <p className="italic">
                                taking you to{' '}
                                <a
                                    href="https://www.wahni.io"
                                    className="text-blue-400 font-semibold hover:underline"
                                >
                                    wahni.io
                                </a>
                            </p>
                            <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium my-5">
                                <div
                                    className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-blue-500 rounded-full animate-fillProgressBar"
                                    style={{ animationDuration: '2s' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default page;
