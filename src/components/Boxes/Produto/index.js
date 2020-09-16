import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  DragContainer,
  DragImage,
  ContainerModal,
  ContainerModalSearch,
  ContainerModalItem,
  ContainerModalImage,
  ContainerModalTitle,
  ContainerModalItens,
  ContainerMainModal,
  ContainerBox,
  BoxHeader,
  BoxTitle,
  TextAreaBox,
  ModalNameOption,
} from "./styles";

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  height: "auto",
  maxWidth: "100%",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

export default function Produto() {
  const [showModal, setShowModal] = useState(false);

  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [selectText, setSelectText] = useState("");

  const filterItemsProduto = data.filter((item) => {
    return (
      item.NomeProduto &&
      item.NomeProduto.toLowerCase().includes(search.toLowerCase())
    );
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleSelectItem = (item) => {
    setSelectImg(item.ImagemProduto);
    setSelectText(item.NomeProduto);

    setShowModal(false);
    setHasImage(true);
    setFiles([]);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <ContainerBox>
      <BoxHeader onClick={() => setShowModal(!showModal)}>
        <BoxTitle>Produto</BoxTitle>

        <FontAwesomeIcon icon={faSearch} color="rgba(219, 25, 67)" />
      </BoxHeader>
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
            {filterItemsProduto.map(
              (item) =>
                item.NomeProduto && (
                  <ContainerModalItem onClick={() => handleSelectItem(item)}>
                    <ContainerModalImage
                      src={item.ImagemProduto}
                      alt={item.NomeProduto}
                    />
                    <ContainerModalTitle>
                      {item.NomeProduto}
                    </ContainerModalTitle>
                  </ContainerModalItem>
                )
            )}
          </ContainerModalItens>
        </ContainerModal>
      </ContainerMainModal>
      <section className="container">
        <div>
          <input {...getInputProps()} />
          {!hasImage ? (
            <DragContainer>Produto</DragContainer>
          ) : (
            <div style={thumb}>
              <div style={thumbInner}>
                <DragImage src={selectImg} />
              </div>
            </div>
          )}
          {selectText !== "" && (
            <ModalNameOption>
              <span>{selectText}</span>
            </ModalNameOption>
          )}
        </div>
      </section>
      <TextAreaBox placeholder="Instruções" />
    </ContainerBox>
  );
}
