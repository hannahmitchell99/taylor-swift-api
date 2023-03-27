import React from 'react'
import Layout from '../../components/Layout/Layout'
import EraCardContainer from '../../containers/EraCardContainer/EraCardContainer'
import Nav from '../../containers/Nav/Nav'
import "../Home/Home.scss"

const Home = ({eras, handleInput,handleMasters, handleHighRating}) => {
  return (
    <div className='home-container'>
        <Nav handleInput = {handleInput} handleMasters={handleMasters} handleHighRating={handleHighRating}/>
        <Layout>
        <EraCardContainer eras={eras}/> 
        </Layout>
    </div>
  )
}

export default Home