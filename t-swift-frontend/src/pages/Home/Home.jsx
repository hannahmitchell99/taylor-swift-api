import React from 'react'
import EraCardContainer from '../../containers/EraCardContainer/EraCardContainer'
import Nav from '../../containers/Nav/Nav'
import "../Home/Home.scss"

const Home = ({eras, handleInput,handleMasters, handleHighRating}) => {
  return (
    <div className='home-container'>
        <Nav handleInput = {handleInput} handleMasters={handleMasters} handleHighRating={handleHighRating}/>
        <EraCardContainer eras={eras}/> 
    </div>
  )
}

export default Home