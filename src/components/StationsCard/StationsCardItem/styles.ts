import { transparentize, shade } from 'polished';
import styled from 'styled-components';

export const StationsCardItemContainer = styled.div`
  position: relative;

  height: 40px;


  display: flex;
  justify-content: flex-start;
  align-items: center;

  :not(:first-child) {
    border-top: 1px solid ${({ theme }) => transparentize(0.6, shade(0.3, theme.colors.background))}
  }

  > button {
    position: relative;

    border: none;
    background: none;
    margin: 10px;

    height: 20px;
    width: 20px;
    border-radius: 100%;

    cursor: pointer;

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: ${({ theme }) => transparentize(0.75, theme.colors.secondary)};
      height: 20px;
      width: 20px;
      border-radius: 20px;
      transition: all 250ms ease;
    }

    :hover {
      div {
        width: 5px;
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.danger};
        :nth-child(1) { transform: translate(-50%, -50%) rotate(45deg); }
        :nth-child(2) { transform: translate(-50%, -50%) rotate(-45deg); }
      }
    }
  }
`;
