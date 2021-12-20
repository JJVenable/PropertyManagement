import React from 'react'
import {Link} from 'react-router-dom'

// function justShowMe () {
// return (
//   <p2>something</p2>
// )
// }
// export default justShowMe
function PropertiesList(props) {

  const showProperty = (propertiesData) => {
    props.history.push(`/property/${propertiesData.id}`)
  }


return (
      <div>

    {props.propertyData.map((propertiesData) => ( 
        
    <div className="property-card" >
      <h3>{propertiesData.location}</h3>
    </div>
  ))}



// </div>
  )
}
export default PropertiesList
