import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 50px;

  padding: 5px;
  margin-bottom: 10px;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
`;

export const LogoContainer = styled.a`
  margin-right: 5px;
  height: 40px;

  img {
    height: 40px;
  }
`;
