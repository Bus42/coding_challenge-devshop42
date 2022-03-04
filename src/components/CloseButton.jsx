import React from "react";

const CloseButton = (props) => {
  const { handleClose } = props;

  const handleClick = () => {
    handleClose();
  };

  return (
    <span className="close-button" onClick={handleClick}>
      x
    </span>
  );
};

export default CloseButton;
