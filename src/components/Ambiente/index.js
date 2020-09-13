import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../data/data";

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

  let thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <DragImage src={file.preview} />
      </div>
    </div>
  ));

  const handleSelectItem = (item) => {
    setSelectImg(item["ImagemAmbiente"]);
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
              (item) =>
                item.NomeAmbiente && (
                  <ContainerModalItem onClick={() => handleSelectItem(item)}>
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
            (console.log(thumbs),
            (<DragContainer>colocar imagem</DragContainer>))
          ) : thumbs.length ? (
            (console.log(thumbs), (<div style={thumbsContainer}>{thumbs}</div>))
          ) : (
            <div style={thumb}>
              <div style={thumbInner}>
                <DragImage src={selectImg} />
              </div>
            </div>
          )}
        </div>
      </section>
      <TextAreaBox placeholder="Instruções" />
    </ContainerBox>
  );
}
