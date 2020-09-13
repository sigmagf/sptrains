import styled from 'styled-components';

interface IStationCardGenericStyledProps {
  color: string;
  text: string
}

export const StationsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  > * {
    flex-shrink: 0
  }

  > div.stations-container {
    max-height: calc(100% - 75px);
    overflow-y: auto;
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.shaddow};

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    ::-webkit-scrollbar {
      width: 2px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const StationsCardHeader = styled.div<IStationCardGenericStyledProps>`
  background: ${({ color }) => color};
  color: ${({ text }) => text};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
`;

export const StationsCardSelect = styled.div<IStationCardGenericStyledProps>`
  background: ${({ color }) => color};

  height: 50px;

  padding: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    width: 100%;
  }
`;
