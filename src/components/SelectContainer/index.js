import React, { useState, useRef, useEffect } from "react";
import SelectComponent from "../SelectComponent";
import ReactToPrint from "react-to-print";

import data from "../../data/data";

import { Container, SelectContainerComponent, ToPrint } from "./styles";

const SelectContainer = () => {
  const [firstSelect, setFirstSelect] = useState("Selecione");
  const [product, setProduct] = useState("Selecione");
  const [procedure, setProcedure] = useState("Selecione");
  const [build, setBuild] = useState("Selecione");
  const [selectNumberOneValue, setSelectNumberOneValue] = useState("0");
  const [selectNumberTwoValue, setSelectNumberTwoValue] = useState("0");

  const [frequenceOne, setFrequenceOne] = useState("0");
  const [frequenceTwo, setFrequenceTwo] = useState("0");
  const [datas, setDatas] = useState([]);

  const componentRef = useRef();
  // useEffect(() => {
  //   const loadData = () => {
  //     setDatas(data);
  //   };
  //   loadData();
  //   console.log(data[0]["Nome Produtos"]);
  //   console.log(datas[0]["Nome Produtos"]);
  // }, [datas]);

  console.log(data.map((id) => console.log(id["Nome Produtos"])));

  function handleItem(item) {
    setFirstSelect(item.target.value);
  }

  function selectedProducts(item) {
    setProduct(item.target.value);
  }

  function selectedBuild(item) {
    setBuild(item.target.value);
  }

  function selectedProcedure(item) {
    setProcedure(item.target.value);
  }

  function handleDiluicaoNumberOne(item) {
    setSelectNumberOneValue(item.target.value);
  }

  function handleDiluicaoNumberTwo(item) {
    setSelectNumberTwoValue(item.target.value);
  }

  function handleFrequenceOne(item) {
    setFrequenceOne(item.target.value);
  }

  function handleFrequenceTwo(item) {
    setFrequenceTwo(item.target.value);
  }

  return (
    <Container>
      <SelectContainerComponent>
        <div>
          <h3>Ambiente Objeto</h3>
          <SelectComponent
            hasInput={true}
            selectedOption={firstSelect}
            selectOptions={data.map((id) => id["Nome Produtos"])}
            fcSelect={(item) => handleItem(item)}
          />
        </div>

        <div>
          <h3>Produto</h3>
          <SelectComponent
            selectedOption={product}
            selectOptions={data.map(
              (imgProduto) => imgProduto["Imagens Produtos"]
            )}
            fcSelect={(item) => selectedProducts(item)}
          />
        </div>

        <div>
          <h3>Preparo / Diluição</h3>
          <SelectComponent
            hasInput={true}
            selectedOption={build}
            selectOptions={["Preparo", "Prepato 1", "Preparo 2"]}
            fcSelect={(item) => selectedBuild(item)}
          />
        </div>
        <div>
          <h3>Procedimento</h3>
          <SelectComponent
            selectSize={true}
            selectNumberOne={selectNumberOneValue}
            selectNumberTwo={selectNumberTwoValue}
            selectOptions={["Para limpar", "Escola", "Escritório"]}
            selectSizeOne={(item) => {
              handleDiluicaoNumberOne(item);
            }}
            selectSizeTwo={(item) => {
              handleDiluicaoNumberTwo(item);
            }}
          />
        </div>

        <div>
          <h3>Frequência</h3>
          <SelectComponent
            hasInput={true}
            selectedOption={procedure}
            selectOptions={["Procedimento", "Procedimento 1", "Procedimento 2"]}
            fcSelect={(item) => selectedProcedure(item)}
          />
        </div>
        {/* <SelectComponent
          selectSize={true}
          selectNumberOne={frequenceOne}
          selectNumberTwo={frequenceTwo}
          selectOptions={["Frequência"]}
          selectSizeOne={(item) => {
            handleFrequenceOne(item);
          }}
          selectSizeTwo={(item) => {
            handleFrequenceTwo(item);
          }}
        /> */}
      </SelectContainerComponent>

      <ToPrint ref={componentRef}>
        <div>
          <h3>Para limpar</h3>
          <span>{firstSelect}</span>
        </div>
        <div>
          <h3>Produtos</h3>
          <span>{product}</span>
        </div>
        <div>
          <h3>Preparo</h3>
          <span>{build}</span>
        </div>
        <div>
          <h3>Diluição</h3>
          <span>
            {selectNumberOneValue} x {selectNumberTwoValue}
          </span>
        </div>
        <div>
          <h3>Procedimento</h3>
          <span>{procedure}</span>
        </div>
        <div>
          <h3>Frequência</h3>
          <span>
            {frequenceOne} x {frequenceTwo}
          </span>
        </div>
      </ToPrint>

      <ReactToPrint
        trigger={() => <button>Imprimir!</button>}
        content={() => componentRef.current}
      />
    </Container>
  );
};

export default SelectContainer;
