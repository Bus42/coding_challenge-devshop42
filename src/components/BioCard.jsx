import React from "react";
import { Link } from "react-router-dom";

const BioCard = (props) => {
  const { name, title, photo_url, _id } = props.cardData;

  return (
    <div className="bio-card_wrapper">
      <img className="bio-image" src={photo_url} alt={name} />
      <div className="card-content_bottom">
        <div className="bio-heading_wrapper">
          <h3>{name}</h3>
          <h6>{title}</h6>
        </div>
        <Link to={`/detail/${_id}`} className="bio-link">
          View Bio
        </Link>
      </div>
    </div>
  );
};

export default BioCard;
