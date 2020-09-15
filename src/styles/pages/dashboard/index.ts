import styled from 'styled-components';

interface IDashboardStatusContainerStyledProps {
  active: boolean
}

export const DashboardContainer = styled.main`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 60px);

  .cards-group {
    width: 100%;
    display: grid;
    grid-gap: 15px;

    /* XS */
    @media (max-width: 576px) {
      grid-template-areas: 'S'
                           'L'
                           'O';
      grid-template-columns: 1fr;
      grid-template-rows: 190px 190px 190px;
    }

    /* MD */
    @media (min-width: 768px) {
      grid-template-areas: 'S L'
                           'O O';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 190px 190px;
    }

    /* LG */
    @media (min-width: 992px) {
      grid-template-areas: 'S L O';
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 190px;
    }
  }
`;

export const DashboardStatusContainer = styled.div<IDashboardStatusContainerStyledProps>`
  z-index: 100;

  width: 250px;

  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%) ${({ active }) => !active && 'translateX(-100%)'};

  padding: 5px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 3px 3px 4px 0 ${({ theme }) => theme.colors.shaddow};

  border: 1px solid ${({ theme }) => theme.colors.shaddow};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

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
      background: none;
      border: none;

      cursor: pointer;
    }
  }
`;
