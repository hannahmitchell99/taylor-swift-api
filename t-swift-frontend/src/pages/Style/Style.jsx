import React from "react";
import "../Style/Style.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Style = ({ eras }) => {
  const { eraID } = useParams();
  const eraArr = eras.filter((era) => {
    if (era.eraID == eraID) {
      return era;
    }
  });
  const targetObj = eraArr[0];
  return (
    <div className="style-card">
      <div className="style-card__image-container">
        <img
          className="style-card__image-container--collage"
          src={targetObj.eraStyle.image}
          alt={targetObj.eraName}
        />
      </div>
      <div className="style-card__info">
        <Link to={`/`}>
          <button className="style-card__button">Home</button>
        </Link>
        <div className="style-card__info--colour">
          <p>Era Colours: {targetObj.eraColorScheme}</p>
        </div>
        <div className="style-card__info--key-pieces">
          <p>Key Pieces: {targetObj.eraStyle.keyPieces}</p>
        </div>
        <div className="style-card__info--description">
          <p>
            Her style could be defined as:
            {targetObj.eraStyle.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Style;
