'use client'
import React, { useEffect, useState } from 'react';

function ChangeText(props) {
    const [displayText, setDisplayText] = useState(props.animTextContent[0]);

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            if (idx === props.animTextContent.length) {
                idx = 0;
            }
            setDisplayText(props.animTextContent[idx]);
            idx += 1;
        }, props.interval);

        return () => {
            clearTimeout(interval);
        };
    }, [props.animTextContent, props.interval]); // Include props.animTextContent and props.interval in the dependency array

    return (
        <div className="">
            <p className={`${props.staticTextClass}`}>
                {props.staticText}&nbsp;
                <span className={`${props.animTextClass}`}>{displayText}</span>
            </p>
        </div>
    );
}

export default ChangeText;
