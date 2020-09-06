import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: -1em;
  position: relative;

  button {
    margin: 0;
    background: #fff;
    height: 45px;
    padding: 0;
    font-size: 0.8em;
    font-weight: 600;
    color: #3e3e3e;
    margin-bottom: 0.5em;
  }

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
  font-family: "Open Sans", sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectComponentImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  height: 300px;
  overflow-y: scroll;
  background: #e4e4e4;
  border-radius: 5px;
  top: 60px;
  z-index: 10;

  img {
    width: 200px;
    height: auto;
    padding: 10px;
  }
`;
