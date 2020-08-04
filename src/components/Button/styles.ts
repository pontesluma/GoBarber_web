import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border: none;
  border-radius: 10px;
  color: #312e38;

  font-weight: 500;

  padding: 0 16px;
  height: 56px;
  width: 100%;

  margin-top: 16px;

  transition: background-color 0.2s ease;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const Loading = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;

    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    animation: spin 3s linear infinite;
    -webkit-animation: spin 3s linear infinite;
  }
`;
