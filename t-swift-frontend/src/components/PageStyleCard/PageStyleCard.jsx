import React from 'react'
import "../PageStyleCard/PageStyleCard.scss"

const PageStyleCard = ({styleImage, name, colour, keyPieces, styleDescription}) => {
  return (
    <div className='style-card'>
        <div className='style-card__image-container'>
        <img className="style-card__image-container--collage" src={styleImage} alt={name} />
        </div>
        <div className='style-card__info'>
        <div className="style-card__info--colour">
            <p>Era Colours: {colour.join(", ")}</p>
          </div>
          <div className="style-card__info--key-pieces">
            <p>Key Pieces: {keyPieces.join(", ")}</p>
          </div>
          <div className="style-card__info--description">
            <p>Her style could be defined as {styleDescription.join(", ")}</p>
          </div>
        </div>
    </div>
  )
}

export default PageStyleCard