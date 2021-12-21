import React from 'react'


function TaskList(props) {
  // console.log(props.taskData);

  return (
    <div className='taskPage'>
      { props.taskData.map((taskData, index) => ( 
    <div key={index} className="task-card" >
      
    <h4>{taskData.name}</h4>
    <p>{taskData.aptNumber}</p>
    <p>{taskData.issueToAddress}</p>
    <p>{taskData.enterTenant}</p>
    <p>{taskData.dog}</p>
    <p>{taskData.comments}</p>

  </div>
  ))} 



    </div>
  )
}

export default TaskList;