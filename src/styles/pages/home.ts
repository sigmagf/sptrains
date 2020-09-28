import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-top: 15px;

  max-width: 576px;
`;
