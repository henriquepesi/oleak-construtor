import React from "react";
import data from "../../../../data/data";

import {
  ContainerModalItem,
  ContainerModalImage,
  ContainerModalTitle,
} from "./styles";

const active = {
  outlineColor: "rgb(219, 25, 67)",
  outlineWidth: 2,
  outlineStyle: "solid",
};

function PrepatList({ srcImg, altImg, itemName, click, status }) {
  return (
    <ContainerModalItem>
      <ContainerModalImage
        style={status ? active : null}
        onClick={click}
        src={srcImg}
        alt={altImg}
      />
      <ContainerModalTitle>{itemName}</ContainerModalTitle>
    </ContainerModalItem>
  );
}

export default PrepatList;
