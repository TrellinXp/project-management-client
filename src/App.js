import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
 
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import TaskDetails from './components/task/TaskDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
