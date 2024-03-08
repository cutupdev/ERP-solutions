'use client';
import React, { useState } from 'react';
import Layout from '../../layout';
const JobApplicationPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the job application, e.g., send data to a server
        console.log('Job application submitted:', {
            fullName,
            email,
            resume,
            phone,
            linkedin,
            portfolio,
            coverLetter,
            additionalInfo,
        });
    };

    return (
        <>
            <Layout showBackgroundImage={true}>
                <div
                    className="flex flex-col md:flex-row container mx-auto p-8 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("your-background-image.jpg")',
                    }}
                >
                    <div className="md:w-2/3 bg-black bg-opacity-50 text-white rounded-lg shadow-lg p-8 mb-8 md:mb-0 md:mr-8">
                        <h1 className="text-4xl font-semibold mb-6">
                            {' '}
                            Job Application Form
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto"
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="resume"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Upload Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        setResume(e.target.files[0])
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="linkedin"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    LinkedIn Profile
                                </label>
                                <input
                                    type="text"
                                    id="linkedin"
                                    name="linkedin"
                                    value={linkedin}
                                    onChange={(e) =>
                                        setLinkedin(e.target.value)
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="portfolio"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Portfolio Website
                                </label>
                                <input
                                    type="text"
                                    id="portfolio"
                                    name="portfolio"
                                    value={portfolio}
                                    onChange={(e) =>
                                        setPortfolio(e.target.value)
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="coverLetter"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Cover Letter
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={coverLetter}
                                    onChange={(e) =>
                                        setCoverLetter(e.target.value)
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    rows="4"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="additionalInfo"
                                    className="block text-gray-200 text-sm mb-2"
                                >
                                    Additional Information
                                </label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={additionalInfo}
                                    onChange={(e) =>
                                        setAdditionalInfo(e.target.value)
                                    }
                                    className="w-full bg-white bg-opacity-50 border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
                            >
                                Apply Now
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/3 p-8 bg-white text-black rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">
                            Job Details
                        </h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed euismod augue ut leo venenatis feugiat.
                        </p>
                        {/* You can add more details or advertisements in the sidebar */}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default JobApplicationPage;
