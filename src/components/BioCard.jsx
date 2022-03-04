import React from "react";

const BioCard = (props) => {
  const { name, title, photo_url } = props.cardData;

  return (
    <div className="bio-card_wrapper">
      <img className="bio-image" src={photo_url} alt={name} />
      <div className="card-content_bottom">
        <div className="bio-heading_wrapper">
          <h3>{name}</h3>
          <h6>{title}</h6>
        </div>
        <span className="bio-link">View Bio</span>
      </div>
    </div>
  );
};

export default BioCard;
