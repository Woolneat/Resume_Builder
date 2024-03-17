import React, { useState, useEffect } from 'react';

function HeaderTitle() {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const text = 'Resume Builder';
        let index = 0;

        const typeText = () => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
            }
        };

        const intervalId = setInterval(typeText, 300);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="header-title">
            <h1>{displayText}</h1>
        </div>
    );
}

export default HeaderTitle;