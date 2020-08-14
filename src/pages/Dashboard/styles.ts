import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 32px 0;

  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #ffede8;
    }

    a {
      text-decoration: none;
      strong {
        color: #ff9900;
      }
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 64px auto;

  display: flex;
`;

export const Schedule = styled.main`
  flex: 1;

  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: #f4ede8;
  }

  p {
    font-size: 16px;
    color: #ff9000;
    margin-top: 8px;

    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    font-size: 20px;
    color: #999591;
    font-weight: normal;
  }

  div {
    position: relative;

    padding: 16px 24px;
    background: #3e3b47;
    border-radius: 10px;

    margin-top: 24px;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;

      height: 70%;
      width: 2px;

      left: 0;
      top: 15%;

      background: #ff9000;
    }

    strong {
      font-size: 24px;
      color: #f4ede8;
    }

    img {
      width: 80px;
      height: 80px;

      border-radius: 50%;

      margin-right: 24px;
      object-fit: cover;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;

      font-size: 20px;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 12px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;

    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  div {
    padding: 16px 16px;
    background: #3e3b47;
    border-radius: 10px;

    margin-left: 24px;

    display: flex;
    align-items: center;
    flex: 1;

    strong {
      font-size: 20px;
      color: #f4ede8;
    }

    img {
      width: 56px;
      height: 56px;

      border-radius: 50%;

      margin-right: 16px;
      object-fit: cover;
    }
  }

  span {
    display: flex;
    align-items: center;

    font-size: 16px;
    color: #999591;

    width: 70px;

    svg {
      color: #ff9000;
      margin-right: 10px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
