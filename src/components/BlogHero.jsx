'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const BlogHero = ({ tag, title, author, date, readTime, image }) => {
    const pathname = usePathname();
    return (
        <Fragment>
            <div className="w-full md:flex py-8 md:py-12 items-center justify-center backdrop-blur-3xl shadow-inner bg-gradient-to-r from-deep-purple-400/20 via-blue-400/20 to-pink-500/20 ">
                <div className="md:py-4 overflow-hidden px-5 py-10">
                    <Image
                        src={image}
                        height={500}
                        width={500}
                        alt="img"
                        className=" rounded-xl"
                    />
                </div>
                <div className="w-full md:w-1/3 md:py-4 md:px-0 px-6 ml-4">
                    <div id="text">
                        <p className="uppercase text-sm font-extrabold text-blue-500 ">
                            {tag}
                        </p>
                        <p className="md:text-4xl text-3xl font-bold text-[#2e2e2e] my-2">
                            {title}
                        </p>
                        <div
                            id="name"
                            className=" my-10 flex items-center justify-between w-full  p-3"
                        >
                            <div className="flex gap-2 items-center mr-5">
                                <Image
                                    src={author.image}
                                    height={100}
                                    width={25}
                                    alt="img"
                                    className=" rounded-full"
                                />
                                <div className="leading-none ">
                                    <h1 className="font-semibold">
                                        {author.name}
                                    </h1>
                                </div>
                            </div>
                            <div className="items-center px-3 border-l border-gray-400">
                                <span className="">{`${new Date(
                                    date,
                                ).toLocaleString('default', {
                                    month: 'long',
                                })} ${new Date(date).getDate()}, ${new Date(
                                    date,
                                ).getFullYear()}`}</span>
                            </div>
                            <div className="border-l pl-2 border-gray-400">
                                <span className="">{readTime}min read</span>
                            </div>
                        </div>
                        <div>
                            <Link
                                href={`https://twitter.com/intent/tweet?url=https://wahni.io${pathname}`}
                            >
                                <i className="ri-twitter-x-fill bg-white rounded-full mx-3 p-2 text-xl text-black hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                            </Link>
                            <Link
                                href={`https://wa.me/?text=https://wahni.io${pathname}`}
                            >
                                <i className="ri-whatsapp-fill bg-white rounded-full mx-3 p-2 text-xl text-green-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                            </Link>
                            <Link
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wahni.io${pathname}&title=${title}`}
                            >
                                <i className="ri-linkedin-box-fill bg-white rounded-full mx-3 p-2 text-xl text-blue-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                            </Link>
                            <Link
                                href={`https://www.facebook.com/sharer/sharer.php?u=https://wahni.io${pathname}`}
                            >
                                <i className="ri-facebook-circle-fill bg-white rounded-full mx-3 p-2 text-2xl text-blue-500 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BlogHero;
