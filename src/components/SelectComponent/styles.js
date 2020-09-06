import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: -1em;

  input {
    border: none;
    padding: 1em;
    font-size: 0.8em;
    height: 100px;
  }
  input[type="text"] {
    padding-bottom: 70px;
  }
`;

export const ContainerCall = styled.div`
  height: 100px;
  margin: 0.5em 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4e4e4;

  p {
    font-size: 1.2em;
    color: #929292;
    padding: 10px;
    text-align: center;
  }
`;

export const SelectSize = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 60px;
  }
`;

export const SelectComponentDiv = styled.select`
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 1em;
  background: #fff;
  margin-bottom: 0.5em;
  color: #3e3e3e;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
