import React from 'react'


function PropertiesList(props) {

//   const showProperty = (propertiesData) => {
//     props.history.push(`/property/${propertiesData.id}`)
//   }
// console.log(props.PropertiesData)
console.log(props.propertiesData[0].comments)

return (
  
  <div>
        <p>test</p>
        
        <p></p>
        <p>{props.propertiesData[0].comments}</p>
        <p>{props.propertiesData}</p>
        {/* <p>{propertiesData.property}</p> */}

  {/* { props.propertiesData.map((propertiesData) => ( 
    <div className="property-card" >
      
    <h3>{propertiesData.location}</h3>
  </div>
  ))} */}
 


</div>
  )
}
export default PropertiesList
