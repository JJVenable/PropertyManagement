import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import '.styles/App.css';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom';
import MaintRequests from './components/MaintRequests';
import NavBar from './components/NavBar';
import PropertiesList from './components/PropertiesList';
import TaskList from './components/TaskList'


function App() {


  return (
    <div className="App">
    <header>
      <NavBar />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/Properties"
          component={(props) => <PropertiesList {...props} properties={properties} />}
        />
        <Route
          path="/maintrequests"
          component={(props) => <PropertyDetails {...props} tasks={tasks} />}
        />
        
          
      </Switch>
    </main>
  </div>
  )
}

export default App;
