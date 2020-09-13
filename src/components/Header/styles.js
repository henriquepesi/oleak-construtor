import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 2fr 1fr 1fr 1fr;
  grid-gap: 0 30px;
  align-items: center;
  padding: 10px 20px 10px 20px;
  background: white;
  box-shadow: 0 0.4rem 3rem rgba(22, 28, 45, 0.04);
`;

export const HeaderItemOne = styled.h1`
  font-size: 1.85em;
  text-align: center;
  max-width: 150px;
  padding: 0 !important;
  margin: 0 !important;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Slogan = styled.div`
  display: flex;
  align-items: center;
  padding-left: 9%;

  img {
    max-width: 120px;
    margin-right: 20px;
  }

  p {
    font-size: 1.05em;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1.45;
    padding-right: 12%;
    color: #383d5c;
  }
`;

export const InputElement = styled.input`
  font-family: sans-serif;
  font-size: 15px;
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 10px;
  border: solid 2px #d7d9db;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const InputFile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  height: 90px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f5f7f9;
  font-size: 15px;
  color: #a7a9ab;
  letter-spacing: 0.02em;
  text-align: center;
  border: dashed 2px #c7c9cb;
`;
