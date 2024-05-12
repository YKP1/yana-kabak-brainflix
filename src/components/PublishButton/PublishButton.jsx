import React from "react";
import "./PublishButton.scss";

const PublishButton = () => {
  return (
    <div className = "upload">
      <button className="upload__button upload__button--publish">PUBLISH</button>
      <button className="upload__button upload__button--cancel"> CANCEL</button>
    </div>
  );
};

export default PublishButton;
