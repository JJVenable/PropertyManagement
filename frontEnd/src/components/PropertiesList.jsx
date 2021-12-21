import React from 'react'
// import {useState} from 'react'

function PropertiesList(props) {

//   const showProperty = (propertiesData) => {
//     props.history.push(`/property/${propertiesData.id}`)
//   }

return (
  
  <div>
    
  { props.propertiesData.map((propertiesData, index) => ( 
    <div key={index} className="property-card" >
      
    <p>{propertiesData.location}</p>
    <p>{propertiesData.owner}</p>
    <p>{propertiesData.currentTenant}</p>
    <p>{propertiesData.comments}</p>
    
  </div>
  ))} 



</div>
  )
}
export default PropertiesList
