import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useModal } from "../../hooks/Modal";
import data from "../../data/data";

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

export default function DragDrop({ message, width, height, imgSelected }) {
  const [files, setFiles] = useState([]);
  const { showModal, setShowModal } = useModal();
  const [search, setSearch] = useState("");
  const [selectImg, setSelectImg] = useState("");
  const [hasImage, setHasImage] = useState(false);

  const filterItems = data.filter((item) => {
    return item["Nome Produtos"].toLowerCase().includes(search.toLowerCase());
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
    setSelectImg(item["Imagens Produtos"]);
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
    <>
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
                <ContainerModalTitle>
                  {item["Nome Produtos"]}
                </ContainerModalTitle>
              </ContainerModalItem>
            ))}
          </ContainerModalItens>
        </ContainerModal>
      </ContainerMainModal>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {!hasImage && !thumbs.length ? (
            (console.log(thumbs), (<DragContainer>{message}</DragContainer>))
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
        <aside style={thumbsContainer}></aside>
      </section>
    </>
  );
}
