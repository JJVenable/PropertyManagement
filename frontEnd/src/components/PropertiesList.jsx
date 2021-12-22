import React from 'react'
// import {useState} from 'react'

function PropertiesList(props) {


return (
  
  <div className='PListPage'>
    
  { props.propertiesData.map((propertiesData, index) => ( 
    <div key={index} className="property-card" >
      
    <p>Location: {propertiesData.location}</p>
    <p>Owner: {propertiesData.owner}</p>
    <p>Current Tenant: {propertiesData.currentTenant}</p>
    <p>Comments: {propertiesData.comments}</p>
  </div>
  ))} 



</div>
  )
}
export default PropertiesList
