import React from 'react';

import useLineColor from '~/hooks/useLineColor';

import { IStatusAPIResponse } from '~/interfaces';

import { DashboardStatusCardContainer, DashboardStatusCardStatus } from './styles';

interface IDashboardStatusCard {
  line: IStatusAPIResponse
}

const DashboardStatusCard: React.FC<IDashboardStatusCard> = ({ line }) => {
  const colors = useLineColor();

  return (
    <DashboardStatusCardContainer color={colors[line.id].color} text={colors[line.id].text}>
      <div className="number">
        { line.id }
      </div>
      <div className="name">
        { line.name }
      </div>
      <DashboardStatusCardStatus status={line.status} />
    </DashboardStatusCardContainer>
  );
};

export { DashboardStatusCard };
