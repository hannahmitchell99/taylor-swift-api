import React from 'react'
import "../PageAlbumCard/PageAlbumCard.scss"

const PageAlbumCard = ({name, rating, date, chart, numOfSongs, genre, ownsMasters, albumCover}) => {
  return (
    <div className='album-card'>
        <div className='album-card__name'>{name}</div>
        <div className='album-card__info'>
            <div className='album-card__info--rating'>{rating}</div>
            <div className='album-card__info--date'>{date}</div>
            <div className='album-card__info--chart'>{chart}</div>
            <div className='album-card__info--songs'>{numOfSongs}</div>
            <div className='album-card__info--genre'>{genre}</div>
            <div className='album-card__info--masters'>{ownsMasters}</div>
        </div>
        <div className='album-card__cover'>
        <img className="album-card__cover--image" src={albumCover} alt={name} />
        </div>
    </div>
  )
}

export default PageAlbumCard