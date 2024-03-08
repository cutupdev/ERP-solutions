import Image from 'next/image';

export default function Hero({
    heading = 'zz',
    caption = 'zz',
    buttonText,
    buttonLink,
    image = '/images/team.jpg',
    showShadowOnImage = true,
}) {
    return (
        <div id="page-1" className="bg-opacity-80 md: pb-40 ">
            <Image
                width={1000}
                height={100}
                src={image}
                alt={heading}
                className="md:hidden mt-[4vw] w-[70%] mx-auto"
                id="top-image"
            />
            <div id="content" className="mt-5">
                <div className="w-full flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]">
                    <div
                        id="left"
                        className="md:w-1/2 md:px-12 md:pt-32 md:ml-10"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mt-[5vw] md:mt-[3vw] text-gray-800">
                            {heading}
                        </h1>
                        <p className="my-5 text-gray-600 text-lg font-semibold">
                            {caption}
                        </p>
                        {buttonLink && buttonText ? (
                            <a href={buttonLink}>
                                <button className="md:py-2 md:px-8 py-4 px-14 bg-blue-500 rounded-md md:mt-0 mt-6 shadow-xl hover:shadow-none transition duration-300">
                                    <span className="font-bold text-white">
                                        {buttonText}
                                    </span>
                                </button>
                            </a>
                        ) : null}
                    </div>
                    <div className="hidden md:block flex self-end">
                        <Image
                            src={image}
                            alt={heading}
                            width={5000}
                            height={5000}
                            className={`w-2/3 rounded-lg ${showShadowOnImage ? 'shadow-xl' : null
                                } mx-auto transition duration-500 cursor-pointer hover:scale-105`}
                            id="bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
