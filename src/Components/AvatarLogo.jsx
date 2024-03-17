import React from 'react';
import Logo from '../assets/logo.png';
import { Avatar } from '@mui/material';

function AvatarLogo() {
    return (
        <Avatar alt="logo" src={Logo} sx={{ width: 100, height: 100 }} />
    );
}

export default AvatarLogo;