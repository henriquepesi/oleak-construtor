import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  margin: 20px auto 50px;
`;

export const DragImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 22px 0 50px;
`;

export const ContainerMainModal = styled.div`
  position: fixed;
  z-index: 10;
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
  display: flex;
  justify-content: space-around;
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

export const ContainerBox = styled.div`
  background: white;
  padding: 20px 10px;
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

export const ModalInput = styled.input`
  width: 150px;
  font-size: 17px;
  letter-spacing: 0.02em;
  box-sizing: border-box;
  height: 45px;
  padding: 0 16px;
  margin-bottom: 30px;
  border: 0;
  border-radius: 4px;
  background: #f2f4f6;
  margin-bottom: 0;
`;

export const ContainerModalValues = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerModalValuesTitle = styled.span`
  padding-bottom: 0.5em;
`;

export const ButtonModal = styled.button`
  width: 100%;
`;

export const ModalNameOption = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 109px;
  width: 90%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.85em;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;

  > * {
    margin: 0 5px;
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0;
  top: -5px;
  cursor: pointer;

  @media print {
    display: none;
  }
`;

export const TextAreaBoxCheck = styled.div`
  height: 90px;
  position: relative;
  padding: 10px;
`;

export const TextAreaContainer = styled.div`
  position: relative;
`;
