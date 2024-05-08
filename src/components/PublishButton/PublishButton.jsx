import React from "react";
import "./PublishButton.scss";

const PublishButton = () => {
  return (
    <div classname = "uploadhero">
      <button className="uploadhero__button uploadhero__button--publish">PUBLISH</button>
      <button className="uploadhero__button uploadhero__button--cancel"> CANCEL</button>
    </div>
  );
};

export default PublishButton;
