import React from "react";

const CloseButton = (props) => {
  const { closeModal, index } = props;

  const handleClick = () => {
    closeModal(index);
  };

  return (
    <span className="close-button" onClick={handleClick}>
      x
    </span>
  );
};

export default CloseButton;
