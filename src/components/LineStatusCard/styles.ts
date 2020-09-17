import { shade } from 'polished';
/* eslint-disable indent */
import styled from 'styled-components';

interface ILineStatusCommon {
  color: string;
  text: string;
}

interface ILineStatusCommonExpanded {
  expanded: boolean;
}

interface ILineStatusContainerStyledProps extends ILineStatusCommonExpanded, ILineStatusCommon {
  expandedHeight: number;
}

interface ILineStatusCircleStyledProps extends Partial<ILineStatusCommon> {
  status: string;
}

interface ILineStatusTextStyledProps extends ILineStatusCommonExpanded, Partial<ILineStatusCommon> {
  status: string;
}

export const LineStatusContainer = styled.div<ILineStatusContainerStyledProps>`
  position: relative;

  display: grid;
  grid-template-areas: 'I N S' 'T T T' 'D D D';
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 30px 20px 1fr;
  gap: 5px;

  justify-items: center;
  align-items: center;

  height: ${({ expanded, expandedHeight }) => (expanded ? expandedHeight : 40)}px;
  width: 100%;

  padding: 5px;

  border: none;
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;

  transition: 250ms ease;
  cursor: pointer;
`;

export const LineStatusHandler = styled.div<ILineStatusCommonExpanded>`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);

  height: 4px;
  width: ${({ expanded }) => (expanded ? 100 : 30)}px;

  border-radius: 4px;

  background: ${({ theme }) => shade(0.2, theme.colors.background)};
  transition: 250ms ease;
`;

export const LineStatusNumber = styled.div<ILineStatusCommon>`
  grid-area: I;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;

  border-radius: 30px;
  height: 30px;
  width: 30px;

  background: ${({ color }) => color};
  color: ${({ text }) => text};
`;

export const LineStatusName = styled.div`
  grid-area: N;
`;

export const LineStatusCircle = styled.div<ILineStatusCircleStyledProps>`
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

  grid-area: S;

  border-radius: 20px;
  height: 20px;
  width: 20px;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
`;

export const LineStatusText = styled.div<ILineStatusTextStyledProps>`
  grid-area: T;

  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  pointer-events: none;

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
`;

export const LineStatusDetails = styled.div<ILineStatusCommonExpanded>`
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  pointer-events: none;

  grid-area: D;

  padding: 0 20px;
`;
