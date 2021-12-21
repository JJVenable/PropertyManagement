import React from 'react'
import axios from 'axios'

function TaskList(props) {
  console.log(props.taskData.id);
  
  // const deleteReq = {
  // async (e) => {
  //   (e).preventDefault()
  //   // GET TARGET ID SET TO ${}
  //   const res = await axios.delete('http://localhost:3001/api/tasks/**ID**', CARDTARGET);
  //   console.log(res)
    
  //   console.log("working")
  // }


  return (
    <div className='taskPage'>
      { props.taskData.map((taskData, index) => ( 
    <div key={index} className="task-card" >
      
    <h4>Name: {taskData.name}</h4>
    <p>Apt Number: {taskData.aptNumber}</p>
    <p>Issue to Address: {taskData.issueToAddress}</p>
    <p>Enter Without Tenant?: {taskData.enterTenant}</p>
    <p>Dog?: {taskData.dog}</p>
    <p>Other Comments: {taskData.comments}</p>
    <button>Close Request</button>
  </div>
  ))} 



    </div>
  )
}

export default TaskList;