import React from 'react'
import {useState} from 'react'

function PropertiesList(props) {

//   const showProperty = (propertiesData) => {
//     props.history.push(`/property/${propertiesData.id}`)
//   }
// console.log(props.propertiesData)
// console.log(props.propertiesData[0])
// console.log(props)
return (
  
  <div>
        <p>test</p>
        
        <p></p>
        {/* <p>{props.propertiesData.owner}</p> */}
        {/* <p>{props.propertiesData[0].owner}</p> */}
        

        {/* <p>{props.propertiesData}</p> */}
        {/* <p>{propertiesData.owner}</p> */}

  { props.propertiesData.map((propertiesData, index) => ( 
    <div key={index} className="property-card" >
      
    <h3>{propertiesData.location}</h3>
    <h3>{propertiesData.owner}</h3>
  </div>
  ))} 



</div>
  )
}
export default PropertiesList
