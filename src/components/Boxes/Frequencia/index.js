import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import data from "../../../data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckCircle,
  faPencilAlt,
  faSearch,
  faCalendarCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  DragContainer,
  ContainerModal,
  ContainerMainModal,
  ContainerBox,
  BoxHeader,
  BoxTitle,
  TextAreaBox,
  ModalNameOption,
  ModalInput,
  ButtonModal,
  SelectOption,
  Calendar,
  InputIcon,
  TextAreaBoxCheck,
  TextAreaContainer,
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
  const [quantidade, setQuantidade] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [message, setMessage] = useState("");
  const [closeMessage, setCloseMessage] = useState(false);

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
        <BoxTitle>Frequência</BoxTitle>

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
          <ModalInput
            type="text"
            placeholder="0"
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <SelectOption onChange={(e) => setFrequencia(e.target.value)}>
            <option value="">Selecione</option>

            <option value="Minuto">Minuto</option>
            <option value="Hora">Hora</option>
            <option value="Semana">Semana</option>
            <option value="Mês">Mês</option>
            <option value="Bimestre">Bimestre</option>
            <option value="Trimestre">Trimestre</option>
            <option value="Semestre">Semestre</option>
            <option value="Ano">Ano</option>
          </SelectOption>
          <ButtonModal
            className="mainButton"
            onClick={() => setShowModal(!showModal)}
          >
            Salvar
          </ButtonModal>
        </ContainerModal>
      </ContainerMainModal>
      <section className="container">
        <div>
          <input {...getInputProps()} />
          {(quantidade || frequencia) === "" ? (
            <DragContainer onClick={() => setShowModal(!showModal)}>
              Frequência
            </DragContainer>
          ) : (
            <Calendar onClick={() => setShowModal(!showModal)}>
              <FontAwesomeIcon icon={faCalendarCheck} size="5x" />
            </Calendar>
          )}
          {(quantidade || frequencia) !== "" && (
            <ModalNameOption>
              <span>{quantidade}</span>
              <FontAwesomeIcon icon={faTimes} color="rgba(219, 25, 67)" />
              <span>{frequencia}</span>
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
