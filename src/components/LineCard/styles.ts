import styled from 'styled-components';

interface ILineCardContainerStyledProps {
  color: string;
  textColor: string;
}

export const LineCardContainer = styled.div<ILineCardContainerStyledProps>`
  position: relative;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  border-radius: 50px;

  background: ${({ color }) => color};
  color: ${({ textColor }) => textColor};

  height: 50px;

  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;

  grid-template-areas: 'ID NM';
`;

export const LineNumber = styled.div`
  grid-area: ID;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #222222;

  > div {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: white;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
    }
  }
`;

export const LineTitle = styled.div`
  grid-area: NM;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-weight: 800;
  font-size: 14px;
`;

export const LineStatus = styled.div`
  position: absolute;
  bottom: -10px;
  right: 20px;

  height: 10px;
  padding: 10px;
  border-radius: 10px;

  font-weight: 800;
  font-size: 10px;

  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.successText};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
