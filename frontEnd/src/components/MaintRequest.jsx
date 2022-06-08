import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const MaintRequest = (props) => {

  const [logForm, setLogForm] = useState({
    name: '',
    aptNumber: '',
    issueToAddress: '',
    enterTenant: '',
    dog: '',
    comments: ''
  })

  const handleSubmit =
    async (e) => {
      (e).preventDefault()
      setLogForm(logForm)
      const res = await axios.post('http://localhost:3001/api/tasks', logForm);
      console.log(res)
      console.log(logForm)
      window.location.reload()
      console.log("working")
    }


  return (
    <div className='requestPage'>
      <h1>Put in a request/Add a task</h1>
      <form onSubmit={handleSubmit} className='formOne' >
        <input
          type="text-area"
          value={logForm.name}
          onChange={(e) => {
            setLogForm({ ...logForm, name: e.target.value })
          }}
          name={"name"}
          placeholder={"Name"}
        />
        <input
          type="text-area"
          value={logForm.AptNumber}
          onChange={(e) => {
            setLogForm({ ...logForm, AptNumber: e.target.value })
          }}
          name={"aptNumber"}
          placeholder={"Apartment"}
        />
        <input
          type="text-area"
          value={logForm.issueToAddress}
          onChange={(e) => {
            setLogForm({ ...logForm, issueToAddress: e.target.value })
          }}
          name={"issuetoAddress"}
          placeholder={"Main Issue"}
        />
        <input
          type="text-area"
          value={logForm.enterTenant}
          onChange={(e) => {
            setLogForm({ ...logForm, enterTenant: e.target.value })
          }}
          name={"enterTenant"}
          placeholder={"Enter without tenant?"}
        />
        <input
          type="text-area"
          value={logForm.dog}
          onChange={(e) => {
            setLogForm({ ...logForm, dog: e.target.value })
          }}
          name={"dog"}
          placeholder={"Is there a dog on site?"}
        />
        <input
          type="text-area"
          value={logForm.comments}
          onChange={(e) => {
            setLogForm({ ...logForm, comments: e.target.value })
          }}
          name={"comments"}
          placeholder={"Other comments/info"}
        />
        <button>Submit Request</button>
      </form>
    </div>
  )
}

export default MaintRequest