import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

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
