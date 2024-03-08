'use client';

import { Fragment } from 'react';
import party from 'party-js';

export function triggerConfetti(e) {
    party.confetti(e.target, {
        count: party.variation.range(20, 40),
    });
}

const Frappe = () => {
    return (
        <Fragment>
            <p className='flex gap-3 justify-start items-center'>
                <i
                    onMouseOver={triggerConfetti}
                    className="ri-trophy-fill text-yellow-300 text-2xl "
                ></i>
                <a
                    href="https://frappe.io/partner-certification/PARTCRTF00018"
                    className="text-md text-gray-600"
                >
                    Frappe Certified Partner
                </a>
            </p>
        </Fragment>
    );
};

export default Frappe;
