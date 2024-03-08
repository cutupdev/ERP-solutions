'use client';

import {
    IconButton,
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    SpeedDialHandler,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

const SpeedDialComponent = () => {
    return (
        <div>
            <SpeedDial className="">
                <SpeedDialHandler>
                    <IconButton
                        size="lg"
                        className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    >
                        <Image
                            src="/images/rocket.png"
                            width={100}
                            height={100}
                            alt="rocket"
                            style={{ transform: `scaleX(-1)` }}
                        />
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                    <SpeedDialAction>
                        <Link
                            href={`https://api.whatsapp.com/send?phone=919005768830&text=Hi, I'm [Your Name] from [Your Location]. I'm interested in learning more about your [Product/Service Name] and exploring how it can benefit my [Company/Personal Needs]. If possible, I'd appreciate a call back to discuss my requirements further. I'm available at [Your Phone Number] on [Your Preferred Days and Times for a Call].`}

                        >
                            <i className="ri-whatsapp-fill p-1 text-2xl text-[#63cfb6]"></i>
                        </Link>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <Link href={`tel:919005768830`}>
                            <i className="ri-phone-fill p-1 text-2xl text-blue-400"></i>
                        </Link>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <Link href={`/contact-sales`}>
                            <i className="ri-mail-send-fill p-1 text-2xl text-purple-300"></i>
                        </Link>
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
        </div>
    );
};

export default SpeedDialComponent;
