import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  svg {
    margin-right: 16px;

  }

  input {
    background: transparent;
    border: 0;
    flex: 1;
    padding: 16px 0;

    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
    margin-left: 16px;
  }

  span {
    color: #d0d0d0;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
