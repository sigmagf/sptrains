import styled from 'styled-components';

interface IDashboardStatusContainerStyledProps {
  active: boolean
}

interface IDashboardCardStyledProps {
  gridArea: string;
}

export const DashboardContainer = styled.main`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .cards-group {
    display: grid;
    grid-gap: 10px;

    grid-template-areas: 'ST LN OP';

    grid-template-rows: 150px;
    grid-template-columns: 150px 150px 150px;
  }
`;

export const DashboardCard = styled.div<IDashboardCardStyledProps>`
  box-shadow: 0 1px 8px 0 ${({ theme }) => theme.colors.shaddow};
  overflow: hidden;
  border-radius: 15px;

  grid-area: ${({ gridArea }) => gridArea};
  transition: 250ms ease;
  cursor: pointer;

  :hover { transform: scale(1.05); }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background: ${({ theme }) => theme.colors.background};
    * { color: ${({ theme }) => theme.colors.text}; }
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 800;
  }
`;

export const DashboardStatusContainer = styled.div<IDashboardStatusContainerStyledProps>`
  z-index: 100;

  min-height: 50px;
  width: 260px;

  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%) ${({ active }) => !active && 'translateX(-100%)'};

  padding: 10px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 3px 3px 4px 0 ${({ theme }) => theme.colors.shaddow};

  border: 1px solid ${({ theme }) => theme.colors.shaddow};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: all 250ms ease;

  .handler {
    position: fixed;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);

    height: 50px;
    width: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.shaddow};
    border-right: 1px solid ${({ theme }) => theme.colors.shaddow};
    border-bottom: 1px solid ${({ theme }) => theme.colors.shaddow};
    border-left: none;
    box-shadow: 3px 3px 4px 0 ${({ theme }) => theme.colors.shaddow};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    button {
      height: 100%;
      width: 100%;

      background: none;
      border: none;

      cursor: pointer;
    }
  }
`;
