import styled from 'styled-components';

export const Container = styled.div`
  max-width: 580px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40vh auto;
  color: #008ae0;

  button {
    padding: 10px 20px;
    background: #008ae0;
    margin-top: 20px;
    color: #F0F0F5;
    font-weight: bold;
    font-size: 1em;
    border: 0;
    border-radius: 50px;
  }
`;