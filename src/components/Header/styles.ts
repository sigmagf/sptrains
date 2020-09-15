import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 50px;

  padding: 5px;
  margin-bottom: 10px;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};

  .logo-container {
    img {
      height: 40px;
    }
  }
`;
