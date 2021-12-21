import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import PropertiesList from './components/PropertiesList';
import TaskList from './components/TaskList'
import Home from './components/Home'
import MaintRequest from './components/MaintRequest';
import axios from 'axios'
import {useState, useEffect} from 'react';
// import logo from './logo.svg';


  
function App() {
  const [propertiesData, setPropertiesData]= useState([])
  const [taskData, setTaskData] = useState([]);

  // async function getTaskData () {
  //   const res = await axios.get("http://localhost:3001/api/tasks")
  //   console.log(res.data)
  //   // setTaskData(res.data.task)
  // }
  
  useEffect (()=> {
    async function getTaskData () {
      const res = await axios.get("http://localhost:3001/api/tasks")
      console.log(res.data)
      setTaskData(res.data)
    }
    async function getPropertiesData () {
      const res = await axios.get("http://localhost:3001/api/properties")
      console.log(res.data)
      setPropertiesData(res.data)
    }
    getPropertiesData()
    getTaskData()
  }, [])

  

  return (
    <div className="App">
    <header>
      <NavBar />
    </header>
    <main>
      {/* <button onClick={(getTaskData)}>getData</button> */}
        <Route exact path="/" component={Home} />
        <Route
          exact path="/Properties"
          component={(props) => <PropertiesList {...props} propertiesData={propertiesData} />}
        />
        <Route
          exact path="/maintrequests"
          component={(props) => <MaintRequest {...props} MaintRequest={MaintRequest} />}
        />
        <Route
          exact path="/todo"
          component={(props) => <TaskList {...props} 
          taskData={taskData} 
          // handleNewTask={handleNewTask}
          // addTask={addTask}
          />}
        />

          
      
    </main>
  </div>
  )
}

export default App;
