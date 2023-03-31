import React from 'react'
import Description from '../../components/Description/Description'
import Layout from '../../components/Layout/Layout'
import Nav from '../../containers/Nav/Nav'
import { PageAlbumCardContainer } from '../../containers/PageAlbumCardContainer/PageAlbumCardContainer'

const AllAlbum = ({eras, handleHighRating, handleInput, handleMasters, type}) => {
  return (
    <div className='all-album-container'>
        <Nav handleInput = {handleInput} handleMasters={handleMasters} handleHighRating={handleHighRating}/>
        <Layout>
            <Description type={"album"}/>
            <PageAlbumCardContainer eras={eras} />
        </Layout>
    </div>
  )
}

export default AllAlbum