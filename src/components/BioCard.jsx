import React, { useState } from "react";

const BioCard = (props) => {
  const { name, title, bio, photo_url } = props.cardData;
  const { gridAreaId } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(gridAreaId);

  return (
    <div
      className={
        isExpanded ? "bio-card_wrapper bio-card_expanded" : "bio-card_wrapper"
      }
    >
      <h2>{name}</h2>
      <h3>{title}</h3>
      <img src={photo_url} alt={name} />
      <span className="bio-link" onClick={handleClick}>
        View Bio
      </span>
      {isExpanded && <p>{bio}</p>}
    </div>
  );
};

export default BioCard;
