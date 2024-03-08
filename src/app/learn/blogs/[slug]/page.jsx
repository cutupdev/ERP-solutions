import './blog.css';
import React, { Fragment, Suspense } from 'react';
import BlogHero from '../../../../components/BlogHero';
import Link from 'next/link';
import { blogsData } from '@/textContent/blogs/blogsData';
import { notFound } from 'next/navigation';

let blogSlugs = [];
export async function generateStaticParams() {
    blogSlugs = blogsData.map((blog) => ({
        slug: String(blog.heading.toLowerCase().split(' ').join('-')),
    }));

    return blogSlugs;
}

export default function Page({ params }) {
    blogSlugs.map((slug) => {
        if (slug === params.slug) {
            notFound();
        }
    });

    const post = blogsData.filter(
        (blog) =>
            params.slug === blog.heading.toLowerCase().split(' ').join('-'),
    )[0];

    return (
        <Fragment>
            <BlogHero
                title={post.heading}
                tag={post.tag}
                date={post.date}
                image={post.image}
                author={{
                    name: post.profile.name,
                    designation: post.profile.designation,
                    image: post.profile.image,
                }}
                readTime={10}
            />
            <Suspense>
                {/* className="py-6 md:px-5 px-5 bg-[url('/Images/blog31.jpg')]" */}
                <div
                    className="py-6 md:px-5 px-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
            </Suspense>

            <div className="my-24 md:px-5 flex justify-center">
                <div className="px-2 py-4 md:px-6 md:py-8 md:w-2/3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 md:flex justify-between items-center">
                    <p className="text-xl md:text-3xl font-bold text-white pb-4">
                        Feeling inspired? Pass it on! <br />
                        Share this blog with your network
                    </p>
                    <div className="">
                        <Link
                            href={`/${params.slug}`}
                        >
                            <i className="ri-twitter-x-fill bg-white rounded-full mx-3 p-2 text-xl text-black hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                        <Link
                            href={`/${params.slug}`}
                        >
                            <i className="ri-whatsapp-fill bg-white rounded-full mx-3 p-2 text-xl text-green-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>
                        <Link
                            href={`https://www.linkedin.com/in/al-saif-a0400a287/${params.slug}`}
                        >
                            <i className="ri-linkedin-box-fill bg-white rounded-full mx-3 p-2 text-xl text-blue-400 hover:transition-all delay-50 duration-200 hover:shadow-lg"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}
