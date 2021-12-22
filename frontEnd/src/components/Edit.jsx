import React from "react";
import axios from "axios";
import {useState} from 'react'

function Edit(props) {

const [editForm, setEditForm] = useState({
  comments:''
})
// const handleSubmit = 
// async (e) => {
//   (e).preventDefault()
//   setEditForm(editForm)
//   const res = await axios.put('http://localhost:3001/api/properties/IDPULLED', editForm);
  
//   console.log(logForm)
//   // window.location.reload() 
//   console.log("working")
// }


  return (
    <div className='editPage'>
      <h1>Edit comment below:</h1>
      <form onSubmit={handleSubmit2} >
    <input
      type="text-area"
      value={editForm.comments}
      onChange={(e)=>{
        setEditForm({...editForm, name: e.target.value})
      }}
      comments={"New Comment Text"}
      placeholder={"NEED TO PULL DATA AND ENTER TO BE AWESOME"}
    />
      <button>Submit Comment Edit</button>
      </form>
    </div>
  )
}

export default Edit;

