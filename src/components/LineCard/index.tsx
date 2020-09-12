import React, { useCallback } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { useDate } from '~/hooks/useDate';

import { metro, cptm, viamobilidade, viaquatro } from '~/assets';
import { ILine } from '~/interfaces';

import { LineCardContainer, LineNumber, LineTitle, LineInfo, LineStatus, LineUpdatedAt } from './styles';

interface ILineCardProps {
  line: ILine;
}

const LineCard: React.FC<ILineCardProps> = ({ line }) => {
  const date = useDate();

  const handleImage = useCallback(() => {
    switch(line.operator) {
      default:
      case 'M': return metro;
      case 'C': return cptm;
      case '4': return viaquatro;
      case '5': return viamobilidade;
    }
  }, []);

  return (
    <LineCardContainer color={line.color.color} textColor={line.color.text}>
      <LineNumber>
        <div>
          <img src={handleImage()} alt="metro" />
        </div>
      </LineNumber>
      <LineTitle>{ line.name }</LineTitle>
      <LineInfo>
        <LineStatus borderColor={line.color.color}>{ line.status }</LineStatus>
      </LineInfo>
      <LineUpdatedAt>{ date.fixDate(line.updatedAt, true, 'Atualizado em') }</LineUpdatedAt>
    </LineCardContainer>
  );
};

export { LineCard };
