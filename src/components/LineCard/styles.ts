import styled from 'styled-components';

interface ILineCardContainerStyledProps {
  color: string;
  textColor: string;
}

interface ILineInfoStyledProps {
  borderColor: string;
}

export const LineCardContainer = styled.div<ILineCardContainerStyledProps>`
  position: relative;

  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shaddow};
  border-radius: 50px;

  background: ${({ color }) => color};
  > *, svg {
    color: ${({ textColor }) => textColor};
  }

  height: 50px;

  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  grid-template-rows: 1fr;

  grid-template-areas: 'ID NM IF';
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

export const LineInfo = styled.div`
  grid-area: IF;
  height: 50px;
  padding-right: 15px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LineStatus = styled.div<ILineInfoStyledProps>`
  border-radius: 20px;
  padding: 10px;

  font-weight: 800;
  font-size: 10px;

  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.successText};
  box-shadow: 0 0 4px 5px ${({ theme }) => theme.colors.shaddow};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineUpdatedAt = styled.div`
  position: absolute;
  bottom: -10px;
  left: 45px;

  height: 10px;
  padding: 10px;
  border-radius: 10px;

  font-weight: 800;
  font-size: 10px;

  background: #333333;
  color: #F5F5F5;

  display: flex;
  justify-content: center;
  align-items: center;
`;
