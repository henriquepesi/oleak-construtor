import React, { useState } from "react";
import { useModal } from "../../hooks/Modal";

import {
  ContainerModal,
  ContainerModalSearch,
  ContainerModalItem,
  ContainerModalImage,
  ContainerModalTitle,
  ContainerModalItens,
  ContainerMainModal,
} from "./styles";

import data from "../../data/data";

function Modal() {
  const { showModal, setShowModal } = useModal();
  const [search, setSearch] = useState("");

  const filterItems = data.filter((item) => {
    return item["Nome Produtos"].toLowerCase().includes(search.toLowerCase());
  });

  const handleSelectItem = (item) => {
    setShowModal(false);
  };

  return (
    <ContainerMainModal
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
            <ContainerModalItem onClick={() => handleSelectItem(item)}>
              <ContainerModalImage
                src={item["Imagens Produtos"]}
                alt={item["Nome Produtos"]}
              />
              <ContainerModalTitle>{item["Nome Produtos"]}</ContainerModalTitle>
            </ContainerModalItem>
          ))}
        </ContainerModalItens>
      </ContainerModal>
    </ContainerMainModal>
  );
}

export default Modal;
