import React from 'react'
import EraCardContainer from '../../containers/EraCardContainer/EraCardContainer'
import Nav from '../../containers/Nav/Nav'
import "../Home/Home.scss"

const Home = ({eras, handleInput}) => {
  return (
    <div className='home-container'>
        <Nav handleInput = {handleInput}/>
        <EraCardContainer eras={eras}/> 
    </div>
  )
}

export default Home