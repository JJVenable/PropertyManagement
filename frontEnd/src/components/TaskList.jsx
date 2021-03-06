import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'


function TaskList(props) {
  const [currentTask, setCurrentTask] = useState('')



  useEffect(() => {
    if (currentTask) {
      const deleteReq = async (e) => {
        const res = await axios.delete(`http://localhost:3001/api/tasks/${currentTask}`);
      }
      deleteReq()
      window.location.reload()
    } else {
      return null;
    }

  }, [currentTask])

  return (
    <div className='taskPage'>
      {props.taskData.map((taskk, index) => (
        <Task task={taskk} key={index} setCurrentTask={setCurrentTask} />
      ))
      }

    </div>
  )
}

export default TaskList;