import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup';
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Task = ({ e, setCurrentTask, currentTask  }) => {
  const [secondForm, setSecondForm] = useState({
    comments: ''
  })
const getThisID = () => {
  setCurrentTask(e._id)
}

console.log(currentTask)
////////// popupstuff ///
  const handleOtherSubmit = 
  async (e) => {
    (e).preventDefault()
    setSecondForm(secondForm)
    const res = await axios.put(`http://localhost:3001/api/tasks/${currentTask}`, secondForm);
    console.log(secondForm)
    console.log("above is secondForm, below is currentTask(ID TO Pass)")
    console.log(currentTask)

    
  }

///// popup////
  return (
    <div className="task-card" >
      
    <h4>Name: {e.name}</h4>
    <p>Apt Number: {e.AptNumber}</p>
    <p>Issue to Address: {e.issueToAddress}</p>
    <p>Enter Without Tenant?: {e.enterTenant}</p>
    <p>Dog?: {e.dog}</p>
    <p>Other Comments: {e.comments}</p>
    {/* <p><button><Link to='/edit'>Edit Comment</Link></button></p> */}
    <p><button onClick={getThisID}>Close Request</button></p>

    <Popup trigger={<button onClick={getThisID}> Edit Comment</button>} position="top center">
    <div className="popBox">
    <h3>Edit comment</h3>
    {/* /////// form /////// */}
  <form onSubmit={handleOtherSubmit} >
  <input
      type="text-area"
      value={secondForm.comments}
      onChange={(e)=>{
        setSecondForm({...secondForm, comments: e.target.value})
      }}
      name={"comments"}
      placeholder={"New Comment"}
    />
    <button>Submit Request</button>
    </form>
    {/* ////// form /////// */}
      </div>
  </Popup>


  </div>

  )

}

export default Task;