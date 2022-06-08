import Popup from 'reactjs-popup';
import React, { useState } from 'react'
import axios from 'axios'


const Task = ({ task, setCurrentTask, currentTask }) => {
  const [secondForm, setSecondForm] = useState({
    comments: ''
  })
  const getThisID = () => {
    setCurrentTask(task._id)
  }

  const [otherTask, setOtherTask] = useState('')
  
  const getThatID = () => {
    setOtherTask(task._id)
    window.location.reload()
  }

  ////////// popupstuff ///
  const handleOtherSubmit =
    async (e) => {
      e.preventDefault()
      // setSecondForm(secondForm)
      const res = await axios.put(`http://localhost:3001/api/tasks/${otherTask}`, secondForm);
      // window.location.reload()
    }

  ///// popup////
  return (
    <div className="task-card" >

      <h4>Name: {task.name}</h4>
      <p>Apt Number: {task.AptNumber}</p>
      <p>Issue to Address: {task.issueToAddress}</p>
      <p>Enter Without Tenant?: {task.enterTenant}</p>
      <p>Dog?: {task.dog}</p>
      <p>Other Comments: {task.comments}</p>
      
      <p><button onClick={getThisID}>Close Request</button></p>

      <Popup trigger={<button onClick={getThisID}> Edit Comment</button>} position="top center">
        <div className="popBox">
          <h3>Edit comment</h3>
          {/* /////// form /////// */}
          <form onSubmit={handleOtherSubmit} >
            <input
              type="text-area"
              value={secondForm.comments}
              onChange={(e) => {
                setSecondForm({ ...secondForm, comments: e.target.value })
              }}
              name={"comments"}
              placeholder={"New Comment"}
            />
            <button onClick={getThatID}>Send New Comment</button>
          </form>
          {/* ////// form /////// */}
        </div>
      </Popup>


    </div>

  )

}

export default Task;