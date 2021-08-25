import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
 
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import TaskDetails from './components/task/TaskDetails';
import Login from './components/auth/Login';
import authService from './services/auth/auth-service';

class App extends Component {

  state = {
    isLoggedIn: false,
    user: null
  }

  getTheUser = (userObj, loggedIn) => {
    this.setState({
      user: userObj,
      isLoggedIn: loggedIn
    });
  };

  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then(data => {
          this.setState({
            user: data,
            isLoggedIn: true
          });
        })
        .catch(err => {
          this.setState({
            user: null,
            isLoggedIn: false
          });
        });
    }
  };
 
  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar userIsLoggedIn={this.state.isLoggedIn} userData={this.state.user} getUser={this.getTheUser}/>
        <Switch>
        <Route exact path="/" render={props => <Login {...props} getUser={this.getTheUser} />} />
          <Route exact path="/signup" render={props => <Signup {...props} getUser={this.getTheUser} />} />
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
