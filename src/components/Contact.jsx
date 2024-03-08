const Contact = () => {
    return (
        <div>
            <div
                id="contact"
                className="md:flex md:w-full md:h-[30vw] max-h-[200vw] md:px-[10vw] md:pt-[5vw] bg-gray-100"
            >
                <div
                    id="leftcontact"
                    className="md:w-[50%] md:p-[4vw] p-[10vw] md:mt-0 mt-[4vw] text-[#212121]"
                >
                    <h1 className="md:text-6xl text-5xl font-extrabold md:tracking-wide md:leading-tight">
                        Contact Us
                    </h1>
                    <p className="md:text-xl opacity-80 tracking-wide md:mt-[1vw] mt-[4vw]">
                        We&apos;re here to help. Get in touch with us!
                    </p>
                </div>
                <div
                    id="rightcontact"
                    className="md:w-[50%] md:p-[4vw] p-[10vw] md:flex items-center justify-center"
                >
                    <form className="md:w-[90%]">
                        <div className="mb-[2vw]">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="mb-[2vw]">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                        <div className="mb-[2vw]">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-400"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
