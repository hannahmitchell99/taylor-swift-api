import React from 'react'
import "../PageAlbumCardContainer/PageAlbumCardContainer.scss"
import PageAlbumCard from '../../components/PageAlbumCard/PageAlbumCard'



export const PageAlbumCardContainer = ({eras}) => {
    const albumsJSX = eras.map((era) => {
        return <PageAlbumCard  name = {era.albumOfEra.name}  albumCover = {era.albumOfEra.cover} genre = {era.albumOfEra.genre} rating = {era.albumOfEra.rating} date={era.albumOfEra.dateReleased} chart = {era.albumOfEra.peakChartPosition} numOfSongs={era.albumOfEra.numOfSongs} key = {era.eraID}/>
    })

  return (
    <div className='album-card-container'>
    <div className="album-card-container__display">{albumsJSX}</div>
    </div>

  )
}
