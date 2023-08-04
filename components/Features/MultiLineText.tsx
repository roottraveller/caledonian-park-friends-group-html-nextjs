// components/MultiLineText.js
import React from 'react';

const MultiLineText = ({paragraph}) => {
    const lines = paragraph.split("\n");

    return (
        <p className="text-base !leading-relaxed text-body-color md:text-lg text-justify">
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br/>
                </React.Fragment>
            ))}
        </p>
    );
};

export default MultiLineText;
