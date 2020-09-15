import React from 'react';

import useLineColor from '~/hooks/useLineColor';

import { IStatusAPIResponse } from '~/interfaces';

import { LineStatusCardContainer } from './styles';

interface IDashboardStatusCard {
  line: IStatusAPIResponse
}

const LineStatusCard: React.FC<IDashboardStatusCard> = ({ line }) => {
  const color = useLineColor(line.id);

  return (
    <LineStatusCardContainer
      color={color.background}
      text={color.text}
      status={line.status}
    >
      <div className="number">
        { line.id }
      </div>
      <div className="name">
        { line.name }
      </div>
      <div className="extended">
        Status: <span>{ line.status }</span>
      </div>
      <div className="status-circle" />
    </LineStatusCardContainer>
  );
};

export { LineStatusCard };
