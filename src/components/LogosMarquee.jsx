import React, { Suspense } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function LogosMarquee({ data }) {
    if (!data) {
        return <Suspense></Suspense>;
    }
    return (
        <div className="md:my-24">
            <p className="text-sm md:text-xl text-center text-gray-600">
                Join our 50+ Successful Implementation stories
            </p>
            <Marquee
                pauseOnHover
                direction="left"
                className="max-w-xs md:max-w-screen-2xl"
            >
                <div className="flex items-center pt-12">
                    {data.map((logo, index) => (
                        <a
                            href={logo.link}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            className="px-12"
                        >
                            <Image
                                width={100}
                                height={90}
                                className="grayscale"
                                src={`/images/${logo.src}`}
                                alt={`${logo.name} logo`}
                            />
                        </a>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}
