import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { faCheckCircle, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
  InputIcon,
  TextAreaBoxCheck,
  TextAreaContainer,
} from "./styles";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

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

export default function Ambiente() {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [selectText, setSelectText] = useState("");
  const [message, setMessage] = useState("");
  const [closeMessage, setCloseMessage] = useState(false);

  const filterItemsAmbient = data.filter((item) => {
    return (
      item.NomeAmbiente &&
      item["NomeAmbiente"].toLowerCase().includes(search.toLowerCase())
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

  let thumbs = files.map((file, index) => (
    <div key={index} style={thumb}>
      <div style={thumbInner}>
        <DragImage src={file.preview} />
      </div>
    </div>
  ));

  const handleSelectItem = (item) => {
    setSelectImg(item["ImagemAmbiente"]);
    setShowModal(false);
    setHasImage(true);
    setSelectText(item["NomeAmbiente"]);
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
        <BoxTitle>Ambiente / Objeto</BoxTitle>

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
            {filterItemsAmbient.map(
              (item, index) =>
                item.NomeAmbiente && (
                  <ContainerModalItem
                    key={index}
                    onClick={() => handleSelectItem(item)}
                  >
                    <ContainerModalImage
                      src={item["ImagemAmbiente"]}
                      alt={item["NomeAmbiente"]}
                    />
                    <ContainerModalTitle>
                      {item["NomeAmbiente"]}
                    </ContainerModalTitle>
                  </ContainerModalItem>
                )
            )}
          </ContainerModalItens>
        </ContainerModal>
      </ContainerMainModal>

      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {!hasImage && !thumbs.length ? (
            <DragContainer>Enviar imagem</DragContainer>
          ) : thumbs.length ? (
            <div style={thumbsContainer}>{thumbs}</div>
          ) : (
            <div style={thumb}>
              <div style={thumbInner}>
                <DragImage src={selectImg} />
              </div>
            </div>
          )}
          {selectText !== "" && !thumbs.length && (
            <ModalNameOption>
              <span>{selectText}</span>
            </ModalNameOption>
          )}
        </div>
      </section>

      {!closeMessage ? (
        <TextAreaContainer>
          <TextAreaBox
            value={message}
            placeholder="Instruções"
            onChange={(e) => setMessage(e.target.value)}
          />
          {message !== "" && (
            <InputIcon
              onClick={() => setCloseMessage(!closeMessage)}
              icon={faCheckCircle}
              color="#19db79"
            />
          )}
        </TextAreaContainer>
      ) : (
        <TextAreaBoxCheck>
          {message}{" "}
          <InputIcon
            onClick={() => setCloseMessage(!closeMessage)}
            icon={faPencilAlt}
            color="#a7a9ab"
          />
        </TextAreaBoxCheck>
      )}
    </ContainerBox>
  );
}
