import React from 'react'
import {useState} from 'react'

function AddTask(props) {

const handleSubmit = (e) => {
  setLogForm.addTask(e)
  setLogForm.history.push('/tasks')

}

// const newTask = props.newTask;
const [logForm, setLogForm] = useState({name: '', aptNumber: '', issueToAddress:'', enterTenant:'', dog:'', comments:''})

// console.log(newTask)
return (
  <div>
  <h1>Put in a request/Add a task</h1>
  <form onSubmit={handleSubmit}>
    <input
      type="text-area"
      value={logForm.name}
      onChange={(e)=>{
        setLogForm(e.target.value)
      }}
      name={"name"}
      placeholder={"name"}
    />
    <input
      type="text-area"
        value={logForm.aptNumber}
        onChange={(e)=>{
          setLogForm(e.target.value)
        }}
        name={"aptNumber"}
        placeholder={"Apartment"}
    />
    <input
      type="text-area"
      value={logForm.issueToAddress}
      onChange={(e)=>{
        setLogForm(e.target.value)
      }}
      name={"issuetoAddress"}
      placeholder={"Main Issue"}
    />
    <input
      type="text-area"
      value={logForm.enterTenant}
      onChange={(e)=>{
        setLogForm(e.target.value)
      }}
      name={"enterTenant"}
      placeholder={"Can Enter without tenant?"}
    />
    <input
      type="text-area"
      value={logForm.dog}
      onChange={(e)=>{
        setLogForm(e.target.value)
      }}
      name={"dog"}
      placeholder={"Is there a dog on site?"}
    />
    <input
      type="text-area"
      value={logForm.comments}
      onChange={(e)=>{
        setLogForm(e.target.value)
      }}
      name={"comments"}
      placeholder={"Other comments/info"}
    />
    <button>Submit Request</button>
    </form>
    </div>
  )
}

export default AddTask