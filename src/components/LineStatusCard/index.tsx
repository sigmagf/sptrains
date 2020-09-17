import React, { useState } from 'react';

import { IStatusLine, ILineColor } from '~/interfaces';

import {
  LineStatusContainer,
  LineStatusHandler,
  LineStatusNumber,
  LineStatusName,
  LineStatusCircle,
  LineStatusText,
  LineStatusDetails,
} from './styles';

interface IDashboardStatusCard {
  line: IStatusLine;
  color: ILineColor;
  showDetails?: boolean;
}

const LineStatusCard: React.FC<IDashboardStatusCard> = ({ line, color, showDetails = true }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LineStatusContainer
      color={color.background}
      text={color.text}
      expanded={expanded}
      expandedHeight={(showDetails && line.details) ? 140 : 70}
      onClick={() => setExpanded((old) => !old)}
    >
      <LineStatusHandler expanded={expanded} />
      <LineStatusNumber color={color.background} text={color.text}>
        { line.id }
      </LineStatusNumber>
      <LineStatusName>
        { line.name }
      </LineStatusName>
      <LineStatusCircle status={line.status} />

      <LineStatusText status={line.status} expanded={expanded}>
        Status: <span>{ line.status }</span>
      </LineStatusText>
      {(showDetails && line.details) && (
        <LineStatusDetails expanded={expanded}>
          { line.details }
        </LineStatusDetails>
      )}
    </LineStatusContainer>
  );
};

export { LineStatusCard };
