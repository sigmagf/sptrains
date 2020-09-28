import { shade, lighten } from 'polished';
import styled, { css } from 'styled-components';

import { useColorToneByTheme } from '~/hooks';

interface IInputContainerStyledProps {
  haveError: boolean;
}

export const InputOutContainer = styled.div`
  margin: 10px 0;
`;

export const InputErrorAlert = styled.span`
  color: ${({ theme }) => theme.colors.danger};
`;

export const InputIconContainer = styled.div`
  order: -1;
  background: ${() => useColorToneByTheme(0.1, 0.5, 'background', 'dark', true)};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  z-index: 20;
  transition: transform 250ms ease;

  svg {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputContainer = styled.div<IInputContainerStyledProps>`
  background: ${() => useColorToneByTheme(0.05, 0.05, 'background', 'light', true)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  border: 2px solid transparent;

  cursor: text;

  :focus-within {
    border: 2px solid ${({ theme }) => shade(1, theme.colors.background)};
  }

  input {
    border: none;
    background: none;
    font-size: 0.9rem;
    margin-left: 8px;
    width: 100%;
    transition: padding 250ms ease;

    color: ${({ theme }) => theme.colors.text};

    :focus {
      padding-left: 5px;
      padding-right: 0;
    }
  }

  ${({ theme, haveError }) => haveError && css`
    border-color: ${theme.colors.danger};

    :focus-within, :hover {
      border-color: ${lighten(0.1, theme.colors.danger)};
    }

    ${InputIconContainer} {
      background: ${theme.colors.danger};
      svg {
        color: ${theme.colors.dangerText};
      }
    }
  `}
`;
