/* eslint-disable indent */
import styled from 'styled-components';

interface ILineStatusCardContainerStyledProps {
  color: string;
  text: string;
  status: string;
}

export const LineStatusCardContainer = styled.button<ILineStatusCardContainerStyledProps>`
  :focus { height: 80px; }
  :not(:focus) { height: 40px; }
  width: 100%;

  border: none;
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;

  display: grid;
  grid-template-areas: 'I N S' 'D D D';
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 40px 1fr;
  align-items: center;

  transition: 250ms ease;
  cursor: pointer;

  .extended {
    grid-area: D;
    transition: 250ms ease;

    span {
      font-weight: 800;
      color: ${({ theme, status }) => {
      switch(status) {
        case 'Operação Normal':
          return theme.colors.success;
        case 'Paralisada':
          return theme.colors.danger;
        case 'Operação Encerrada':
        case 'Operações Encerradas':
          return '#A3A3A3';
        default:
          return theme.colors.warning;
        }
      }};
    }
  }
  :focus .extended { opacity: 1; }
  :not(:focus) .extended { opacity: 0 }

  .number {
    grid-area: I;

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

  .status-circle {
    background: ${({ theme, status }) => {
    switch(status) {
      case 'Operação Normal':
        return theme.colors.success;
      case 'Paralisada':
        return theme.colors.danger;
      case 'Operação Encerrada':
      case 'Operações Encerradas':
        return '#A3A3A3';
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
  }
`;
