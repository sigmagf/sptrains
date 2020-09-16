import { shade } from 'polished';
import styled, { css } from 'styled-components';

const commonUserButtonStyle = css`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 30px;

  border: none;
  border-radius: 15px;
  box-shadow: 0 2px 8px 0 ${({ theme }) => theme.colors.shaddow};

  transition: 250ms ease;
  cursor: pointer;
  z-index: 90;

  :hover {
    height: 40px;
    width: 40px;
  }

  svg {
    color: #FFFFFF;
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeContainer = styled.main`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;

  padding-top: 15px;

  max-width: 576px;
`;

export const UserContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;

  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const UserAvatar = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;

  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 8px 0 ${({ theme }) => theme.colors.shaddow};

  cursor: pointer;
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

export const UserSettings = styled.button`
  ${commonUserButtonStyle}

  background: ${({ theme }) => shade(0.5, theme.colors.background)};
`;

export const UserLogout = styled.button`
  ${commonUserButtonStyle}

  background: ${({ theme }) => theme.colors.danger};
`;
