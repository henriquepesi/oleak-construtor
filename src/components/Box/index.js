import React from "react";

import { useModal } from "../../hooks/Modal";

import { Container, BoxHeader, BoxTitle, TextAreaBox } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DragDrop from "../DragDrop";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Box() {
  const { showModal, setShowModal } = useModal();

  return (
    <Container>
      <BoxHeader onClick={() => setShowModal(!showModal)}>
        <BoxTitle>Ambiente / Objeto</BoxTitle>
        <FontAwesomeIcon icon={faSearch} color="rgba(219, 25, 67)" />
      </BoxHeader>
      <DragDrop width="150px" height="150px" message="Enviar Imagem" />
      <TextAreaBox placeholder="Instruções" />
    </Container>
  );
}

export default Box;
