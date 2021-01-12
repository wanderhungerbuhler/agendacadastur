import styled from 'styled-components';
import { shade } from 'polished';

export const Calendar = styled.div`
  width: 100%;
  margin:0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #F0F0F5;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    color: #008ae0;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #008ae0 !important;
    border-radius: 10px;
    color: #F0F0F5 !important;
    font-weight: bold;
  }

  section {
    width: 100%;
    height: 440px;
    overflow-y: scroll;
    padding: 20px;

    article {
      padding: 10px 20px;
      margin-bottom: 5px;
      background: #F0F0F5;
      border-radius: 7px;
      border: 1px solid #ccc;
      h3 { font-size: .9em; color: #3e3b47; margin-bottom: 5px; }
      p { font-size: .7em; color: #3e3b47; }
      span { color: #006631; border-radius: 50px; padding: 3px 10px; background: #00e06c;
        font-size: .7em; }
    }
  }

`;

export const Hour = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;

  span {
    padding: 10px;
    background: #3e3b47;
    color: #F0F0F5;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 3px;

    &:hover {
      cursor: pointer;
    }
  }

  span.selected {
    background: #008ae0;
  }

  
`;
