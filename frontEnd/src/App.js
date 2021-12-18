import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import PropertiesList from './components/PropertiesList';
import TaskList from './components/TaskList'
import Home from './components/Home'
import MaintRequest from './components/MaintRequest';
function App() {


  return (
    <div className="App">
    <header>
      <NavBar />
    </header>
    <main>
       
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/Properties"
          component={(props) => <PropertiesList {...props} PropertiesList={PropertiesList} />}
        />
        <Route
          path="/maintrequests"
          component={(props) => <MaintRequest {...props} MaintRequest={MaintRequest} />}
        />
        <Route
          path="/todo"
          component={(props) => <TaskList {...props} TaskList={TaskList} />}
        />
        
          
      
    </main>
  </div>
  )
}

export default App;
