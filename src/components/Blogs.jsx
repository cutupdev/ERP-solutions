'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogsData } from '@/textContent/blogs/blogsData';

const BlogCard = ({ image, heading, bodyText, profile }) => {
    const getSlug = (heading) => heading.toLowerCase().split(' ').join('-');
    return (
        <div className="max-w-[30rem] mb-10 mx-auto bg-white shadow-lg rounded-md overflow-hidden m-4 mt-20 hover:shadow-2xl transition duration-300">
            <Link href={`/learn/blogs/${getSlug(heading)}`}>
                <Image
                    height={100}
                    width={1000}
                    src={image}
                    alt="Blog Image"
                    className="w-full  object-cover "
                />
                <div className="p-4">
                    <h1 className="text-xl font-bold mb-2">{heading}</h1>
                    <p className="text-gray-600">{bodyText}</p>
                    <div className="flex items-center justify-start mt-4 gap-2">
                       
                        <p className="font-semibold pr-10">{profile.name}</p>
                        <div className="ml-2 flex items-center gap-2">
                            <i className="ri-time-line text-2xl text-gray-400"></i>
                            <p className="text-gray-500 text-md">
                                Max 10min read
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const BlogCardList = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {blogsData.map((card, index) => (
                <BlogCard key={index} {...card} />
            ))}
        </div>
    );
};

export default BlogCardList;
