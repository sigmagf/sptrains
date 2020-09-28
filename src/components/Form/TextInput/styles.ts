import { shade } from 'polished';
import styled from 'styled-components';

export const TextInputContainer = styled.div`
  position: relative;

  height: 45px;
  width: 100%;

  background: ${({ theme }) => shade(0.02, theme.colors.background)};
  border-radius: 6px;
  box-shadow: inset 0px 0px 2px 1px ${({ theme }) => theme.colors.shaddow};

  overflow: hidden;

  label {
    position: absolute;
    top: 0;
    left: 0;

    padding: 5px;

    font-size: 12px;
    opacity: .75;
  }

  input {
    height: calc(100% - 15px);
    width: 100%;

    margin-top: 15px;
    padding: 5px;

    background: none;
    border: none;
  }
`;
