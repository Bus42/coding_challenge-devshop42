import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documents } from "../data";
import Home from "./Home";

const BioDetail = () => {
  const { id } = useParams();
  const [bioCard, setBioCard] = useState({});
  useLayoutEffect(() => {
    setBioCard(documents.find((card) => card._id === id));
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
          <div className="bio-detail_wrapper" onClick={handleClick}>
            <img
              className="bioDetail-image"
              src={bioCard.photo_url}
              alt={bioCard.name}
            />
            <div className="bio-detail_content">
              <div className="bio-detail_top">
                <h3>{bioCard.name}</h3>
                <h6>{bioCard.title}</h6>
              </div>
              <div className="bio-detail_bottom">
                <p>{bioCard.bio?.replace(/(<p>)/, "").replace(/<\/p>/, "")}</p>
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
