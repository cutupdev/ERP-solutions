'use client';
import { Fragment } from 'react';
import Frappe from './Frappe';
import Link from 'next/link';

const ServicesHero = ({ data }) => {
    const { title, subtitle, buttonText } = data.maintext;

    const renderLines = (text) => {
        return text.split('\n').map((line, index) => (
            <Fragment key={index}>
                {line}
                <br />
            </Fragment>
        ));
    };
    return (
        <div
            id="maintext2"
            className=" pt-8  w-full flex flex-col items-center md:py-32 gap-6  h-screen"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold text-center gradient-text">
                {renderLines(title)}
            </h1>
            <p className="text-base text-center md:text-xl text-[#3f3e3e]">
                {' '}
                <strong>{renderLines(subtitle)}</strong>
            </p>
            <Link href="/contact-sales">
                <button className="mt-4 bg-gradient-to-r from-[#4695F0]  to-[#FC42CE]  px-6 py-3 md:py-3 md:px-6 md:text-lg rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                    {buttonText} <i className="ri-arrow-right-line"></i>
                </button>
            </Link>
            <Frappe />
        </div>
    );
};

export default ServicesHero;
