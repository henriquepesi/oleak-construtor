import React from "react";

import { UploadLaneComponent } from "./styles";

const UploadLane = ({ userText }) => {
  return (
    <UploadLaneComponent>
      <h4>{userText}</h4>
      <span>upload</span>
    </UploadLaneComponent>
  );
};

export default UploadLane;
