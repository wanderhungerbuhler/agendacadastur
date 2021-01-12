import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #FFF;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Container = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    label { color: #6c6c80; margin-bottom: -5px; font-size: .9em; }
  }

`;
