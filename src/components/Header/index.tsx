import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { favicon } from '~/assets';

import { HeaderContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  if(router.pathname === '/') {
    return <></>;
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <LogoContainer>
          <img src={favicon} alt="logo" />
        </LogoContainer>
      </Link>
    </HeaderContainer>
  );
};

export { Header };
