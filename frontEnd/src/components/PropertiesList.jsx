import React from 'react'
import {Link} from 'react-router-dom'


function PropertiesList(props) {

  const showProperty = (propertiesData) => {
    props.history.push(`/property/${propertiesData.id}`)
  }
console.log(props.PropertiesData)


// return (
//   // showProperty()
//   <div>
        
//   { props.propertiesData.map((propertiesData) => ( 
//     <div className="property-card" >
      
//     <h3>{propertiesData}</h3>
//   </div>
//   ))}



// </div>
//   )
// }
export default PropertiesList
