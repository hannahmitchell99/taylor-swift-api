import React from 'react'
import "../PageStyleCardContainer/PageStyleCardContainer.scss"
import PageStyleCard from '../../components/PageStyleCard/PageStyleCard'

export const PageStyleCardContainer = ({eras}) => {
    
    const stylesJSX = eras.map((era) => {
      return <PageStyleCard styleImage = {era.eraStyle.image} name={era.eraName} colour={era.eraColorScheme} keyPieces={era.eraStyle.keyPieces} styleDescription = {era.eraStyle.description}key = {era.eraId}/>
  })

  return (
  <div className='styles-card-container'>
  <div className="styles-card-container__display">{stylesJSX}</div>
  </div>

  )
}

