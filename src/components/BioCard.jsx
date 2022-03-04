import React, { useState } from "react";
import CloseButton from "./CloseButton";

const BioCard = (props) => {
  const { name, title, bio, photo_url } = props.cardData;
  const { gridAreaId } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  console.log(gridAreaId);

  return (
    <div className="bio-card_wrapper">
      {isExpanded && (
        <CloseButton className="close-button" handleClose={handleClose} />
      )}
      <img className="bio-image" src={photo_url} alt={name} />
      <div className="card-content_bottom">
        <div className="bio-heading_wrapper">
          <h3>{name}</h3>
          <h6>{title}</h6>
        </div>
        {isExpanded ? (
          <p>{bio.replace(/(<p>)/, "").replace(/<\/p>/, "")}</p>
        ) : (
          <span className="bio-link" onClick={handleClick}>
            View Bio
          </span>
        )}
      </div>
    </div>
  );
};

export default BioCard;
