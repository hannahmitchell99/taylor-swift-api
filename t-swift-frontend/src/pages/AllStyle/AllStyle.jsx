import React from 'react'
import Layout from '../../components/Layout/Layout'
import Nav from '../../containers/Nav/Nav'
import { PageStyleCardContainer } from '../../containers/PageStyleCardContainer/PageStyleCardContainer'
import Description from '../../components/Description/Description'

const AllStyle = ({eras, handleHighRating, handleInput, handleMasters, type}) => {

  return (
    <div className='all-style-container'>
        <Nav handleInput = {handleInput} handleMasters={handleMasters} handleHighRating={handleHighRating}/>
        <Layout>
            <Description type={"style"}/>
            <PageStyleCardContainer eras = {eras}/>
        </Layout>
    </div>
  )
}

export default AllStyle