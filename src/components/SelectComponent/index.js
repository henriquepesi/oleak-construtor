import React from "react";
import {
  Container,
  SelectComponentDiv,
  ContainerCall,
  SelectSize,
} from "./styles";

const SelectComponent = ({
  fcSelect,
  selectOptions,
  selectedOption,
  selectSize,
  selectNumberOne,
  selectNumberTwo,
  selectSizeOne,
  selectSizeTwo,
  hasInput,
}) => {
  return (
    <Container>
      <SelectComponentDiv onChange={fcSelect}>
        {selectOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </SelectComponentDiv>

      {selectSize ? (
        <>
          <ContainerCall>
            <p>
              {selectNumberOne} x {selectNumberTwo}
            </p>
          </ContainerCall>
          <SelectSize>
            <input type="text" placeholder="0" onChange={selectSizeOne} />
            x
            <input type="text" placeholder="0" onChange={selectSizeTwo} />
          </SelectSize>
        </>
      ) : (
        <>
          <ContainerCall>
            <p>{selectedOption}</p>
          </ContainerCall>
          {hasInput && (
            <input
              type="text"
              placeholder="Instrução personalizada..."
              onChange={fcSelect}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default SelectComponent;
