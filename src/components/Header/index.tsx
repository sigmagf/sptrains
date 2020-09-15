import { useRouter } from 'next/router';
import React from 'react';

import { favicon } from '~/assets';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  if(router.pathname === '/') {
    return <></>;
  }

  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src={favicon} alt="logo" />
      </div>
    </HeaderContainer>
  );
};

export { Header };
