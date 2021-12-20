import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function PropertiesList(props) {
  const [selectedProperty, setProperty] = useState('')
  
  useEffect(()=> {
    let selectedProperty= props.propertyData.find(
      (property) => property.id === parseInt(props.match.params.id)
    )
    setProperty(selectedProperty)
  }, [])
  return selectedProperty ? (
    <div className='PListPage'>
    <div className='propertyCard'>
      <div className='cardInfo'>
        <h2>Location: {selectedProperty.location}</h2>
        <h2>Location: {selectedProperty.owner}</h2>
        <h2>Location: {selectedProperty.currentTenant}</h2>
        <h2>Location: {selectedProperty.comments}</h2>
        
      </div>
    <Link to= '/Home'>
      <button style={{background:'gray'}}>Return Home</button>
    </Link>
    </div>


    </div>
  ) : null;
}

export default PropertiesList;