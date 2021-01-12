import styled from 'styled-components';

export const Container = styled.div`
  max-width: 780px;
  width: 100%;
  min-height: 528px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  h1 { color: #6c6c80; text-align: center; }

  form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    label { color: #6c6c80; margin-bottom: -5px; font-size: .9em; }
  }

`;
