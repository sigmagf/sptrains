import styled from 'styled-components';

export const DashboardContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  overflow: scroll;

  padding: 5px;

  gap: 15px;

  > * {
    flex-shrink: 0;
  }
`;
