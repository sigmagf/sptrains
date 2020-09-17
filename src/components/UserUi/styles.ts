import { shade } from 'polished';
import styled, { css } from 'styled-components';

const mustCommonUserButtonsStyle = css`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  box-shadow: 0 2px 8px 0 ${({ theme }) => theme.colors.shaddow};

  transition: 250ms ease;
  cursor: pointer;
`;

const commonUserButtonStyle = css`
  ${mustCommonUserButtonsStyle}

  height: 30px;
  width: 30px;
  border-radius: 15px;
  z-index: 90;

  :hover {
    height: 40px;
    width: 40px;
  }

  svg {
    color: #FFFFFF;
  }
`;

export const UserUiAvatar = styled.button`
  ${mustCommonUserButtonsStyle}

  height: 50px;
  width: 50px;
  border-radius: 25px;
  z-index: 100;

  img {
    height: 40px;
    border-radius: 25px;
    pointer-events: none;
    transition: 250ms ease;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: 250ms ease;

    > svg {
      color: #FFFFFF;
    }
  }

  :hover {
    img {
      filter: grayscale(100%);
    }

    div {
      opacity: 1;
    }
  }
`;

export const UserUiSettings = styled.button`
  ${commonUserButtonStyle}

  background: ${({ theme }) => shade(0.5, theme.colors.background)};
`;

export const UserUiUsers = styled.button`
  ${commonUserButtonStyle}

  background: ${({ theme }) => shade(0.2, theme.colors.success)};
`;

export const UserUiLogout = styled.button`
  ${commonUserButtonStyle}

  background: ${({ theme }) => theme.colors.danger};
`;

export const UserUiContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;

  width: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  > * { flex-shrink: 0; }

  :not(:hover) {
    height: 50px;

    ${UserUiSettings} {
      transform: translateY(-50px);
    }

    ${UserUiUsers} {
      transform: translateY(-80px);
    }

    ${UserUiLogout} {
      transform: translateY(-120px);
    }
  }
`;
