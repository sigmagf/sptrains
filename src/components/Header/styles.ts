import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 50px;

  margin-bottom: 15px;
  padding: 0 15px;

  box-shadow: 0 4px 8px 1px ${({ theme }) => theme.colors.shaddow};
  background: ${({ theme }) => theme.colors.primary};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    .logo {
      img {
        height: 40px;
      }
    }
  }
`;

export const HeaderActionButtons = styled.div`

`;
