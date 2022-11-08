import React from 'react';
import { logoUrl } from '../../constants';

const HeaderLogo = () => {
  return (
    <div>
      <img src={logoUrl} style={{ width: '100px', borderRadius: '50%' }}alt="Beesknees logo" />
    </div>
  );
};

export default HeaderLogo;
