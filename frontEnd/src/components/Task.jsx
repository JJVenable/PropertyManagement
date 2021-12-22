import React from 'react'
import {Link} from 'react-router-dom'

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
const Task = ({ e, setCurrentTask }) => {

const getThisID = () => {
  setCurrentTask(e._id)
}

  return (
    <div className="task-card" >
      
    <h4>Name: {e.name}</h4>
    <p>Apt Number: {e.AptNumber}</p>
    <p>Issue to Address: {e.issueToAddress}</p>
    <p>Enter Without Tenant?: {e.enterTenant}</p>
    <p>Dog?: {e.dog}</p>
    <p>Other Comments: {e.comments}</p>
    <p><button><Link to='/edit'>Edit Comment</Link></button></p>
    <p><button onClick={getThisID}>Close Request</button></p>
  </div>

  )

}

export default Task;