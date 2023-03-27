import React from 'react'
import "../NavCheckBox/NavCheckBox.scss"

const NavCheckBox = ({handleMasters, handleHighRating}) => {
  return (
    <div className='nav-check'>
        <input onChange={handleMasters} type="checkbox" id="masters" />
        <label for="masters">Owns Masters</label> <br/>
        <input onChange={handleHighRating} type="checkbox" id="highest"/>
        <label for="highest">Highly Rated Eras</label> <br/>
    </div>
  )
};

export default NavCheckBox

