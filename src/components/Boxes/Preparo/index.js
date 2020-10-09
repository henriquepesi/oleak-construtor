import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPencilAlt,
  faSearch,
  faTimes,
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
  ModalInput,
  ContainerModalValues,
  ContainerModalValuesTitle,
  ModalNameOption,
  ButtonModal,
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

const selectClickImg = {
  outlineColor: "rgb(219, 25, 67)",
  outlineWidth: 2,
  outlineStyle: "solid",
};

export default function Preparo() {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [select, setSelect] = useState();
  const [produto, setProduto] = useState("");
  const [agua, setAgua] = useState("");
  const [message, setMessage] = useState("");
  const [closeMessage, setCloseMessage] = useState(false);

  const filterItemsAmbient = data.filter((item) => {
    return (
      item.NomePreparo &&
      item["NomePreparo"].toLowerCase().includes(search.toLowerCase())
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

  const handleSelectItem = (item, key, status) => {
    setSelectImg(item["ImagemPreparo"]);
    console.log(status === key);
    setSelect(key);
    // setShowModal(false);
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
        <BoxTitle>Preparo / Diluição</BoxTitle>

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
          <div>
            <ContainerModalValues>
              <ContainerModalValuesTitle>
                Porção Produto
              </ContainerModalValuesTitle>
              <ModalInput
                type="text"
                placeholder="0"
                onChange={(e) => setProduto(e.target.value)}
              />
            </ContainerModalValues>
            <FontAwesomeIcon
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: ".8em",
                marginBottom: ".5em",
                display: "block",
              }}
              icon={faTimes}
              color="rgba(219, 25, 67)"
              size="2x"
            />

            <ContainerModalValues>
              <ContainerModalValuesTitle>Porção Água</ContainerModalValuesTitle>
              <ModalInput
                type="text"
                placeholder="0"
                onChange={(e) => setAgua(e.target.value)}
              />
            </ContainerModalValues>
            <ButtonModal
              className="mainButton"
              onClick={() => setShowModal(!showModal)}
            >
              Salvar
            </ButtonModal>
          </div>
          <div style={{ width: "70%" }}>
            <ContainerModalSearch
              type="search"
              placeholder="Buscar ..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <ContainerModalItens>
              {filterItemsAmbient.map(
                (item, key) =>
                  item.NomePreparo && (
                    <ContainerModalItem
                      key={key}
                      onClick={() => handleSelectItem(item, key)}
                      status={select === key}
                    >
                      <ContainerModalImage
                        style={select === key ? selectClickImg : null}
                        src={item["ImagemProcedimento"]}
                        alt={item["NomePreparo"]}
                      />
                      <ContainerModalTitle>
                        {item["NomePreparo"]}
                      </ContainerModalTitle>
                    </ContainerModalItem>
                  )
              )}
            </ContainerModalItens>
          </div>
        </ContainerModal>
      </ContainerMainModal>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {!hasImage && !thumbs.length ? (
            <>
              <DragContainer
                hastext={agua.length !== 0 || produto.length !== 0}
              >
                Enviar imagem
              </DragContainer>
            </>
          ) : thumbs.length ? (
            <div style={thumbsContainer}>
              <>{thumbs}</>
            </div>
          ) : (
            <div style={thumb}>
              <div style={thumbInner}>
                <DragImage src={selectImg} />
              </div>
            </div>
          )}
          {(agua || produto) !== "" && !thumbs.length && (
            <ModalNameOption>
              <span>{produto} Produto</span>
              <FontAwesomeIcon icon={faTimes} color="rgba(219, 25, 67)" />
              <span>{agua} Água</span>
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
