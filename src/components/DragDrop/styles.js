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
  margin: 20px 0;
`;

export const ContainerMainModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.showModal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 30px;
  width: 80%;
  max-height: 70%;
  max-width: 1120px;
  border-radius: 4px;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 5;
`;

export const ContainerModalSearch = styled.input`
  width: 100%;
  font-size: 17px;
  letter-spacing: 0.02em;
  box-sizing: border-box;
  height: 45px;
  padding: 0 16px;
  margin-bottom: 30px;
  border: 0;
  border-radius: 4px;
  background: #f2f4f6;
`;

export const ContainerModalItens = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 10px;
  text-align: center;
`;

export const ContainerModalItem = styled.div`
  background: none;
  border: none;
  padding: 0 0 20px;
  line-height: 1.4;
  border-radius: 3px;
  box-shadow: 0 0.2rem 1.5rem rgba(22, 28, 45, 0.04);
  cursor: pointer;
`;

export const ContainerModalImage = styled.img`
  max-width: 100%;
  height: 100px;
`;

export const ContainerModalTitle = styled.h3`
  font-size: 12px;
`;
