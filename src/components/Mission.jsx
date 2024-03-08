const Mission = () => {
    return (
        <div>
            <div id="ourmission" className="md:flex md:p-32 p-3 ">
                <div id="leftmission" className=" p-2 md:w-1/2">
                    <p className="text-blue-700 font-semibold md:text-xs text-lg uppercase tracking-widest">
                        Mission
                    </p>
                    <h1 className="md:text-4xl text-3xl font-extrabold md:mt-2 mt-[4vw] text-[#292D34] tracking-wider">
                        Our Mission
                    </h1>
                    <div className="border-2 border-blue-500 rounded-3xl md:w-[5vw] w-[22vw] md:mt-[1vw] mt-[3vw]"></div>
                    <p className="md:mt-4 mt-[12vw] opacity-60 font-medium">
                        At Wahni IT Solutions, we&apos;re more than just a
                        technology company. We&apos;re passionate engineers,
                        creative problem-solvers, and trusted partners, driven
                        by a singular mission: to empower businesses with the
                        tools and expertise they need to thrive in today&apos;s
                        dynamic digital landscape.
                    </p>
                    <p className="md:mt-4 mt-[2vw] opacity-60 font-medium">
                        If you&apos;re a business looking to unlock your
                        potential, embrace the future, and make a positive
                        impact, we invite you to partner with Wahni IT
                        Solutions. Together, let&apos;s write a success story
                        powered by technology, innovation, and a shared vision
                        of a brighter tomorrow.
                    </p>
                </div>
                <div
                    id="rightmission"
                    className="  md:flex items-center justify-center px-5"
                >
                    <p className="p-5 bg-white shadow-xl hover:scale-105 transition duration-300 text-5xl rounded-lg font-extrabold select-none">
                        <span className="text-purple-500">
                            Save Peoples <br /> time{' '}
                        </span>
                        by making <br /> the world <br /> more productive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Mission;
