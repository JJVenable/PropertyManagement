// import React from "react";
// import axios from "axios";
// import {useState, useEffect} from 'react'
// import Task from './Task'

// function Edit(props) {
// ///////////

// ///////////
// const [currentTask, setCurrentTask] = useState('')
// const [editForm, setEditForm] = useState({
//   comments:''
// })
// const handleSubmit2 = 
// async (e) => {
//   (e).preventDefault()
//   setEditForm(editForm)
//   const res = await axios.put(`http://localhost:3001/api/properties/${currentTask}`);
  
//   console.log(editForm)
//   // window.location.reload()    TAKE THEM BACK TO ALL TASKS
//   console.log("working")
// }


//   return (
    
//     <div className='editPage'>
//       <h1>Edit comment below:</h1>
//       <form onSubmit={handleSubmit2} >
//     <input
//       type="text-area"
//       value={editForm.comments}
//       onChange={(e)=>{
//         setEditForm({...editForm, comments: e.target.value})
//       }}
//       comments={"comments"}
//       placeholder={"NEW COMMENT"}
//     />
//       <button>Submit Comment Edit</button>
//       </form>
//     </div>
//   )
// }

// export default Edit;

