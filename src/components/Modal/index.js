import React, { useState } from "react";
import { useModal } from "../../hooks/Modal";

import {
  Container,
  ContainerModal,
  ContainerModalSearch,
  ContainerModalItem,
  ContainerModalImage,
  ContainerModalTitle,
  ContainerModalItens,
} from "./styles";

import data from "../../data/data";

function Modal() {
  console.log(data);
  const { showModal, setShowModal } = useModal();

  const handleSelectProducct = (item) => {
    console.log(item["Imagens Produtos"]);
  };

  // const handleOpenModal = () => {
  //   setShowModal(!showModal);
  //   console.log(showModal);
  // };

  return (
    <Container
      onClick={() => {
        setShowModal(!showModal);
      }}
      showModal={showModal}
    >
      <ContainerModal>
        <ContainerModalSearch type="search" placeholder="Buscar ..." />
        <ContainerModalItens>
          {data.map((item) => (
            <ContainerModalItem onClick={() => handleSelectProducct(item)}>
              <ContainerModalImage src={item["Imagens Produtos"]} alt="oi" />
              <ContainerModalTitle>{item["Nome Produtos"]}</ContainerModalTitle>
            </ContainerModalItem>
          ))}
        </ContainerModalItens>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
