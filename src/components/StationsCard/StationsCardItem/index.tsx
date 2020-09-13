import React from 'react';

import { StationsCardItemContainer } from './styles';

interface IStationsCardItemProps {
  displayName: string;
  remove(): void;
}

const StationsCardItem: React.FC<IStationsCardItemProps> = ({ displayName, remove }) => (
  <StationsCardItemContainer>
    <button type="button" onClick={remove}>
      <div />
      <div />
    </button>
    {displayName}
  </StationsCardItemContainer>
);

export { StationsCardItem };
