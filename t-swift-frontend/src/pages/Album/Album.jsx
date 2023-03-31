import React from 'react'
import { useParams } from 'react-router-dom'
import { PageAlbumCardContainer } from '../../containers/PageAlbumCardContainer/PageAlbumCardContainer';

const Album = ({eras}) => {
    const {eraID} = useParams();
    const eraArr = eras.filter((era) => {
        if (era.eraID === eraID) {
          return true;
        } else {
          return false;
        }
      });
      const targetObj = eraArr[0];
  return (
        <div className="album-card">
          <h2 className="album-card__name">{targetObj.albumOfEra.name}</h2>
          <div className="album-card__info">
            <div className="album-card__info--rating">
              Pitchfork rating: {targetObj.albumOfEra.rating}
            </div>
            <div className="album-card__info--date">Date Released: {targetObj.albumOfEra.dateReleased}</div>
            <div className="album-card__info--chart">
              Peak Billboard Position: {targetObj.albumOfEra.peakChartPosition}
            </div>
            <div className="album-card__info--songs">
              Number of Songs: {targetObj.albumOfEra.numOfSongs}
            </div>
            <div className="album-card__info--genre">Genre: {targetObj.albumOfEra.genre}</div>
          </div>
          <div className="album-card__cover">
            <img className="album-card__cover--image" src={targetObj.albumOfEra.cover} alt={targetObj.albumOfEra.name}/>
          </div>
        </div>
      );
    };


export default Album