import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documents } from "../data";
import Home from "./Home";
import parse from "html-react-parser";

const BioDetail = () => {
  const { id } = useParams();
  const [bioCard, setBioCard] = useState({});
  useLayoutEffect(() => {
    const bioCard = documents.find((doc) => doc._id === id);
    console.log(bioCard.bio);
    setBioCard(bioCard);
    
  }, [id]);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <>
      <Home />
      <div id="screen" />
      <div id="bio-detail">
        {bioCard ? (
          <div className="bio-detail_wrapper">
            <span className="bio-detail_close-button" onClick={handleClick}>
              X
            </span>
            <img
              className="bio-detail_image"
              src={bioCard.photo_url}
              alt={bioCard.name}
            />
            <div className="bio-detail_content">
              <div className="bio-detail_top">
                <h2>{bioCard.name}</h2>
                <h6>{bioCard.title}</h6>
              </div>
              <div className="bio-detail_bottom">
                {bioCard.bio && parse(bioCard.bio)}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default BioDetail;
