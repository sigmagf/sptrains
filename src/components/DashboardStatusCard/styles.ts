import { css } from 'react-select/src/components/Control';

import styled from 'styled-components';

interface IDashboardStatusCardContainerStyledProps {
  color: string;
  text: string;
}

interface IDashboardStatusCardStatusStyledProps {
  status: string;
}

export const DashboardStatusCardContainer = styled.div<IDashboardStatusCardContainerStyledProps>`
  height: 40px;
  width: 200px;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;

  display: grid;
  grid-template-areas: 'I N S';
  grid-template-columns: 50px 1fr 40px;
  align-items: center;

  .number {
    box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 800;

    border-radius: 30px;
    height: 30px;
    width: 30px;

    margin: 5px;

    background: ${({ color }) => color};
    color: ${({ text }) => text};
  }
`;

export const DashboardStatusCardStatus = styled.div<IDashboardStatusCardStatusStyledProps>`
  background: ${({ theme, status }) => {
    switch(status) {
      case 'Operação Normal':
        return theme.colors.success;
      case 'Operação Encerrada':
      case 'Operações Encerradas':
        return theme.colors.danger;
      default:
        return theme.colors.warning;
    }
  }};

  margin: 10px;

  grid-area: S;

  border-radius: 20px;
  height: 20px;
  width: 20px;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
`;
