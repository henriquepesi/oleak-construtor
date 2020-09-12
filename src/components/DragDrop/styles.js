import styled from "styled-components";

export const DragContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  height: 170px;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f5f7f9;
  font-size: 15px;
  color: #a7a9ab;
  letter-spacing: 0.02em;
  text-align: center;
  border: dashed 2px #c7c9cb;
  margin: 20px 0;
`;

export const DragImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
