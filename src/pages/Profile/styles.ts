import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    background: #28262e;
    height: 144px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      flex: 1;

      max-width: 1120px;
      svg {
        color: #999591;
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  margin-top: -150px;

  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    margin: 60px 0;
    width: 340px;

    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;

  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;

    object-fit: cover;
  }

  label {
    cursor: pointer;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    bottom: 0;
    right: 0;

    border: 0;
    background: #ff9000;
    border-radius: 50%;
    width: 48px;
    height: 48px;

    transition: background-color 0.2s;

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;
