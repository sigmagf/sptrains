import React from 'react';
import { IconType } from 'react-icons/lib';

import { DashboardCardContainer } from './styles';

interface IDashboardCardProps {
  icon: IconType;
  title: string;
  gridArea: 'S'|'L'|'O';
}

const DashboardCard: React.FC<IDashboardCardProps> = ({ icon: Icon, title, gridArea }) => (
  <DashboardCardContainer gridArea={gridArea}>
    <div className="icon">
      <Icon size={90} />
    </div>
    <div className="title">
      { title }
    </div>
  </DashboardCardContainer>
);

export { DashboardCard };
