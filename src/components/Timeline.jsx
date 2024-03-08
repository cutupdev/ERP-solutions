'use client';
import {
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from '@material-tailwind/react';
import { Chip } from '@material-tailwind/react';
function TimelineWithIcon() {
    return (
        <Timeline className="md:w-[50rem] text-[#3f3e3e]">
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-4 rounded-full bg-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="#ffffff"
                                d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                            />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Consulting
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography
                        color="gary"
                        className="font-normal text-gray-700"
                    >
                        The foundation of every successful ERP implementation is
                        understanding your unique operations. Our experienced
                        consultants work with you to map your processes, define
                        roles and user permissions, and document the flow for
                        smooth implementation.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-4 bg-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#ffffff"
                                d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z"
                            />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Customisation & Implementation
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography
                        color="gary"
                        className="font-normal text-gray-700"
                    >
                        Building upon the insights gained in consultation, we
                        transition to implementation, where we expertly merge
                        your unique needs with the ERP &apos; s capabilities.
                        Standard features and modules are our first choice, but
                        for exceptional cases, we design and integrate
                        plug-and-play customizations that ensure seamless future
                        upgrades.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-4 rounded-full bg-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="#ffffff"
                                d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                            />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        The Implementation Journey
                    </Typography>
                </TimelineHeader>
                <TimelineBody>
                    <Typography
                        color="gary"
                        className="font-normal text-gray-700"
                    >
                        <ul className="flex flex-col gap-4 list-outside">
                            <li>
                                <span className=" flex items-center ">
                                    <Chip
                                        value="1"
                                        className="flex items-center justify-center px-2 py-1 rounded-full mx-2 bg-blue-300"
                                    />
                                    <strong> Discovery:</strong>{' '}
                                </span>
                                <span className="ml-10">
                                    Define project scope, milestones,
                                    customizations, and expected outcomes.
                                </span>
                            </li>

                            <li>
                                <span className=" flex items-center ">
                                    <Chip
                                        value="2"
                                        className="flex items-center justify-center px-2 py-1 rounded-full mx-2 bg-blue-300"
                                    />
                                    <strong>Planning:</strong>
                                </span>
                                <span className="ml-10">
                                    Develop a comprehensive strategy for smooth
                                    implementation and progress tracking.
                                </span>
                            </li>

                            <li>
                                <span className=" flex items-center ">
                                    <Chip
                                        value="3"
                                        className="flex items-center justify-center px-2 py-1 rounded-full mx-2 bg-blue-300"
                                    />
                                    <strong>Analysis & Configuration:</strong>{' '}
                                </span>
                                <span className="ml-10">
                                    Install and configure the system to mirror
                                    your specific processes.
                                </span>
                            </li>
                            <li>
                                <span className="flex items-center">
                                    <Chip
                                        value="4"
                                        className="flex items-center justify-center px-2 py-1 rounded-full mx-2 bg-blue-300"
                                    />
                                    <strong>Migration & Verification:</strong>
                                </span>{' '}
                                <span className="ml-10">
                                    Migrate data, map it accurately, and perform
                                    thorough verification checks.
                                </span>
                            </li>
                            <li>
                                <span className=" flex items-center ">
                                    <Chip
                                        value="5"
                                        className="flex items-center justify-center px-2 py-1 rounded-full mx-2 bg-blue-300"
                                    />
                                    <strong>Testing & Validation:</strong>
                                </span>{' '}
                                <span className="ml-10">
                                    Test the system across all functionalities,
                                    ensuring seamless quote-to-cash flow.
                                </span>
                            </li>
                        </ul>
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-4 rounded-full bg-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 640 512"
                        >
                            <path
                                fill="#ffffff"
                                d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                            />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Training & Deployment
                    </Typography>
                </TimelineHeader>
                <TimelineBody>
                    <Typography
                        color="gary"
                        className="font-normal text-gray-700"
                    >
                        Our comprehensive training equips users to navigate the
                        new ecosystem with confidence. Through interactive
                        sessions and a &apos;train-the-trainer&apos; approach,
                        we empower employees to self-sustain and operate the ERP
                        software independently. With a smooth transition to the
                        live environment, your team will unlock the full
                        potential of the system, driving efficiency and success.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineHeader>
                    <TimelineIcon className="p-4 rounded-full bg-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#ffffff"
                                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                            />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Ongoing Support
                    </Typography>
                </TimelineHeader>
                <TimelineBody>
                    <Typography
                        color="gary"
                        className="font-normal text-gray-700"
                    >
                        Go live worry-free! Our round-the-clock support puts our
                        15-year ERP expertise at your fingertips. Our dedicated
                        support team will craft a roadmap tailored to your
                        evolving needs, ensuring your software keeps pace with
                        your success.
                    </Typography>
                </TimelineBody>
            </TimelineItem>
        </Timeline>
    );
}
export default TimelineWithIcon;
