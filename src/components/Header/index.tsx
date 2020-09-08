import React from 'react';

import { favicon } from '~/assets';

import { Grid } from '../Grid';
import { HeaderContainer, HeaderActionButtons } from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <Grid>
      <div className="logo">
        <img src={favicon} alt="logo" />
      </div>
      <HeaderActionButtons />
    </Grid>
  </HeaderContainer>
);

export { Header };
