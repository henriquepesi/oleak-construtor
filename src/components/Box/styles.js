import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0.4rem 3rem rgba(22, 28, 45, 0.04);
  width: 230px;
`;

export const BoxHeader = styled.div`
  border-radius: 4px;
  box-shadow: 0 0.4rem 3rem rgba(22, 28, 45, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  color: #000;
`;

export const TextAreaBox = styled.textarea`
  font-family: sans-serif;
  font-size: 15px;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  padding: 10px;
  border: solid 2px #d7d9db;
  margin-bottom: 0 !important;
  border-radius: 4px;
  height: 85px;
`;
