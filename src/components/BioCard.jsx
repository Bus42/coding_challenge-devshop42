import React, { useState } from "react";

const BioCard = (props) => {
  const { image, alt, name, title, bio } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={
        isExpanded ? "bio-card_wrapper bio-card_expanded" : "bio-card_wrapper"
      }
    >
      <h2>{name}</h2>
      <h3>{title}</h3>
      <img src={image} alt={alt} />
      <span className="bio-link" onClick={handleClick}>
        View Bio
      </span>
      {isExpanded && <p>{bio}</p>}
    </div>
  );
};

export default BioCard;
