import React from "react";
import "./PublishButton.scss";

const PublishButton = ({onCancel}) => {
  return (
    <div className = "upload">
      <button type = "submit" className="upload__button upload__button--publish">PUBLISH</button>
      <button type = "button" className="upload__button upload__button--cancel" onClick = {onCancel}> CANCEL</button>
    </div>
  );
};

export default PublishButton;
