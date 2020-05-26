import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'error' | 'success' | 'info';
}

const toastTypeVariation = {
  info: css`
    color: #ebf8ff;
    background: #3172b7;
  `,
  success: css`
    color: #e6fffa;
    background: #2e656a;
  `,
  error: css`
    color: #fddede;
    background: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;

  padding: 16px 30px 16px 16px;
  width: 360px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${(props) => toastTypeVariation[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    border: 0;
    background: transparent;
    color: inherit;
    opacity: 0.6;

    position: absolute;
    top: 19px;
    right: 16px;
  }
`;
