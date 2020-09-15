import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  margin: 0 auto;

  /* XS */
  @media (max-width: 576px) {
    padding: 0 15px;
  }

  /* SM */
  @media (min-width: 576px) {
    max-width: 540px;
  }

  /* MD */
  @media (min-width: 768px) {
    max-width: 720px;
  }

  /* LG */
  @media (min-width: 992px) {
    max-width: 960px;
  }

  /* LX */
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
