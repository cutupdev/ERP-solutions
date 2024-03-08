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

export default function BusinessConsultTimeline() {
    return (
        <Timeline className="md:w-[50rem] text-[#3f3e3e]">
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-2 rounded-full bg-[#528ff6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="#fff"
                            viewBox="0 0 576 512"
                        >
                            <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Untangle Your Tax Knots
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography
                        color="gary"
                        className="font-normal text-gray-600"
                    >
                        <ul className="flex flex-col gap-4 list-inside list-disc">
                            <li>
                                Tax filing made easy
                                <p>
                                    Let our seasoned Chartered Accountants
                                    expertly handle your tax filings, ensuring
                                    flawless compliance and maximizing your
                                    deductions.
                                </p>
                            </li>
                            <li>
                                Tax worries be gone
                                <p>
                                    Say goodbye to late-night tax stress.
                                    We&apos;ll be your proactive guide, keeping
                                    you informed and optimized throughout the
                                    year
                                </p>
                            </li>
                        </ul>
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-2 bg-[#528ff6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="#fff"
                            viewBox="0 0 384 512"
                        >
                            <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z" />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Reshape Your Organization
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography
                        color="gary"
                        className="font-normal text-gray-600"
                    >
                        <ul className="flex flex-col gap-4 list-inside list-disc">
                            <li>
                                Breakthrough the bottlenecks
                                <p>
                                    Our expert management consultants will
                                    analyze your workflows, identify roadblocks,
                                    and create bespoke solutions to boost
                                    efficiency and agility.
                                </p>
                            </li>
                            <li>
                                Structure for success
                                <p>
                                    We&apos;ll help you restructure your
                                    organization for optimal performance,
                                    ensuring alignment with your strategic
                                    goals.
                                </p>
                            </li>
                        </ul>
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="p-2 rounded-full bg-[#528ff6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            viewBox="0 0 384 512"
                            fill="#fff"
                        >
                            <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z" />
                        </svg>{' '}
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                        Embrace the Power of Automation
                    </Typography>
                </TimelineHeader>
                <TimelineBody>
                    <Typography
                        color="gary"
                        className="font-normal text-gray-600"
                    >
                        <ul className="flex flex-col gap-4 list-inside list-disc">
                            <li>
                                Say hello to smooth-sailing processes
                                <p>
                                    We&apos;ll automate your financial workflows
                                    with cutting-edge ERP solutions, minimizing
                                    manual tasks and human error.
                                </p>
                            </li>
                            <li>
                                Unlock data-driven insights
                                <p>
                                    Real-time data access and analysis empower
                                    you to make informed decisions and stay
                                    ahead of the curve.
                                </p>
                            </li>
                        </ul>
                    </Typography>
                </TimelineBody>
            </TimelineItem>
        </Timeline>
    );
}
