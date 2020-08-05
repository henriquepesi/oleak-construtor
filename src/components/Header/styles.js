import styled from 'styled-components';

export const HeaderComponente = styled.header`
  padding: 1em 2em;
  display: flex;
  background: #fff;
  margin-bottom: 2em;
`;

export const InputGroup = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2em 2em;

  input {
    background: #f2f4f6;
    border: none;
    padding: 0.5em;
    border-radius: 4px;
  }

  input + input {
    margin-top: 0.5em;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
