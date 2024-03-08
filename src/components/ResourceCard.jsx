import { Fragment } from 'react';
import Image from 'next/image';
import image from '../../public/images/blog3.jpg';
const ResourceCard = () => {
    return (
        <Fragment>
            <div className="max-w-[20rem] mb-10  bg-white shadow-lg rounded-md overflow-hidden m-4 mt-20 hover:shadow-2xl transition duration-300">
                <Image
                    height={100}
                    width={1000}
                    src={image}
                    alt="Blog Image"
                    className="w-full max-h-96 object-cover "
                />
                <div className="p-4">
                    <h1 className="text-xl font-bold mb-2 text-[#3f3e3e]">
                        Lorem ipsum dolor sit amet . Lorem ipsum dolor sit.
                    </h1>
                    <div className="flex items-center justify-start mt-4 gap-2">
                        <Image
                            height={100}
                            width={1000}
                            src={image}
                            alt="Profile Image"
                            className="w-8 h-8 rounded-full"
                        />
                        <p className="font-semibold pr-10 text-[#3f3e3e]">
                            saif
                        </p>
                    </div>
                    <div className="ml-2 flex items-center justify-center gap-2 text-[#3f3e3e]">
                        <button>
                            Read more <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ResourceCard;
