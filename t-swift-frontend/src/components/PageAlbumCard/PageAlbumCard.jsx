import React from 'react'
import "../PageAlbumCard/PageAlbumCard.scss"

const PageAlbumCard = ({name, rating, date, chart, numOfSongs, genre, albumCover}) => {
  return (
    <div className='album-card'>
        <h2 className='album-card__name'>{name}</h2>
        <div className='album-card__info'>
            <div className='album-card__info--rating'>Pitchfork rating: {rating}</div>
            <div className='album-card__info--date'>Date Released: {date}</div>
            <div className='album-card__info--chart'>Peak Billboard Position: {chart}</div>
            <div className='album-card__info--songs'>Number of Songs: {numOfSongs}</div>
            <div className='album-card__info--genre'>Genre: {genre}</div>
        </div>
        <div className='album-card__cover'>
        <img className="album-card__cover--image" src={albumCover} alt={name} />
        </div>
    </div>
  )
}

export default PageAlbumCard