import React from 'react';
import Logo from '../assets/logo.png';

function AnimatedLogo() {
    return (
        <div className="logo-container">
            <img className="logo-initial" src={Logo} alt="logo" />
        </div>
    )
}

export default AnimatedLogo;