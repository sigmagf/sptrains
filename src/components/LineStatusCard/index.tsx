import React from 'react';

import { IStatusLine, ILineColor } from '~/interfaces';

import { LineStatusCardContainer } from './styles';

interface IDashboardStatusCard {
  line: IStatusLine;
  color: ILineColor;
}

const LineStatusCard: React.FC<IDashboardStatusCard> = ({ line, color }) => (
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

export { LineStatusCard };
