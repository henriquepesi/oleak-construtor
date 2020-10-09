import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPencilAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

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

export default function Procedimento() {
  const [showModal, setShowModal] = useState(false);

  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [selectText, setSelectText] = useState("");
  const [message, setMessage] = useState("");
  const [closeMessage, setCloseMessage] = useState(false);

  const filterItemsProduto = data.filter((item) => {
    return (
      item.NomeProcedimento &&
      item.ImagemProcedimento.toLowerCase().includes(search.toLowerCase())
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

  let thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <DragImage src={file.preview} />
      </div>
    </div>
  ));

  const handleSelectItem = (item) => {
    setSelectImg(item.ImagemProcedimento);
    setSelectText(item.NomeProcedimento);
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
        <BoxTitle>Procedimento</BoxTitle>

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
                      src={item.ImagemProcedimento}
                      alt={item.NomeProcedimento}
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
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {!hasImage && !thumbs.length ? (
            (console.log(thumbs),
            (<DragContainer>Enviar imagem</DragContainer>))
          ) : thumbs.length ? (
            (console.log(thumbs), (<div style={thumbsContainer}>{thumbs}</div>))
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
