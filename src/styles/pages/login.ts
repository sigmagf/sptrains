import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginTitle = styled.div`
  height: 40px;

  font-weight: 800;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  ::after, ::before {
    margin: 0 10px;
    content: "";
    background: ${({ theme }) => theme.colors.text};
    height: 2px;
    width: 100px;
    border-radius: 2px;
  }
`;

export const LoginCard = styled.div`
  width: 400px;
  max-width: 100%;

  border-radius: 10px;
  box-shadow: 0 0 8px 2px ${({ theme }) => theme.colors.shaddow};
  padding: 10px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      height: 40px;

      box-shadow: 1px 2px 4px ${({ theme }) => theme.colors.shaddow};
      border-radius: 6px;
      border: none;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primaryText};

      cursor: pointer;
    }
  }
`;
