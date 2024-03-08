'use client';

import Image from 'next/image';
import Link from 'next/link';
import data from '../textContent/case-studies/cardData.json';

const CaseStudies = ({ image, heading, bodyText, profile }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden m-4">
            <Link
                href={
                    '/learn/case-studies/' +
                    heading.toLowerCase().split(' ').join('-')
                }
            >
                <Image
                    height={100}
                    width={1000}
                    src={image}
                    alt="Blog Image"
                    className="w-full max-h-96 object-cover"
                />
                <div className="p-4">
                    <h1 className="text-xl font-bold mb-2">{heading}</h1>
                    <p className="text-gray-600">{bodyText}</p>
                    <div className="flex items-center mt-4">
                        <Image
                            height={100}
                            width={100}
                            src={profile.image}
                            alt="Profile Image"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-2">
                            <p className="font-semibold">{profile.name}</p>
                            <p className="text-gray-500">{profile.date}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const caseStudy = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {data.map((card, index) => (
                <CaseStudies key={index} {...card} />
            ))}
        </div>
    );
};

export default caseStudy;
