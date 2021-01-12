import styled, { css } from 'styled-components';

export const CardsAtendimento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      color: #F0F0F5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;

      width: 15px;
      height: 15px;
      margin-left: 10px;
      border-radius: 50px;
      background: transparent;
      border: 2px solid #ccc;
    }

    width: 270px;
    height: 150px;
    list-style: none;
    margin-right: 10px;
    color: #6c6c80;
    border: 2px solid #ccc;
    border-radius: 7px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      border: 2px solid #008ae0;
    }


  }

  li.selected {
    border: 2px solid #008ae0;

    &::after {
      content: "\\2713";
    }

    &::after {
      background: #008ae0;
      border: 2px solid transparent;
    }
  }


`;
