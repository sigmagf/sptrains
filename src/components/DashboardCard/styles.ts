import styled from 'styled-components';

interface IDashboardCardContainerStyledProps {
  gridArea: string;
}

export const DashboardCardContainer = styled.div<IDashboardCardContainerStyledProps>`
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  overflow: hidden;
  border-radius: 15px;

  grid-area: ${({ gridArea }) => gridArea};
  transition: 250ms ease;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 160px;

    background: ${({ theme }) => theme.colors.background};

    * {
      color: ${({ theme }) => theme.colors.text};
    }
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
