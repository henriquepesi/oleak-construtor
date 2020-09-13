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
  const [search, setSearch] = useState("");

  // let imgItem = item["Imagens Produtos"]
  const handleSelectProducct = (item) => {
    console.log(item["Imagens Produtos"]);
  };

  const filterItems = data.filter((item) => {
    return item["Nome Produtos"].toLowerCase().includes(search.toLowerCase());
  });

  const handleSelectItem = (item) => {
    console.log(item["Imagens Produtos"]);
    setShowModal(false);
  };

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target === e.currentTarget) {
          setShowModal(!showModal);
        }
      }}
      showModal={showModal}
    >
      <ContainerModal>
        <ContainerModalSearch
          type="search"
          placeholder="Buscar ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <ContainerModalItens>
          {filterItems.map((item) => (
            <ContainerModalItem
              onClick={
                (() => handleSelectProducct(item), () => handleSelectItem(item))
              }
            >
              <ContainerModalImage
                src={item["Imagens Produtos"]}
                alt={item["Nome Produtos"]}
              />
              <ContainerModalTitle>{item["Nome Produtos"]}</ContainerModalTitle>
            </ContainerModalItem>
          ))}
        </ContainerModalItens>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
