import React from 'react';
import AvatarLogo from './AvatarLogo';
import HeaderTitle from './HeaderTitle';
import ToggleButton from './LoginSignupButton';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <AvatarLogo />
      </div>
      <div className="header-content">
        <HeaderTitle style={{ marginTop: '1rem' }} />
      </div>
      {/* <ToggleButton /> */}
    </header>
  );
}

export default Header;