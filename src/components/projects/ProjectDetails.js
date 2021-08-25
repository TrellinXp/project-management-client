// components/projects/ProjectDetails.js
 
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './EditProjects'; 
import AddTask from '../task/AddTask';
 
class ProjectDetails extends Component {
  state = {}
 
  componentDidMount(){
      this.getSingleProject();
  }
 
  getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/projects/${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  
  renderEditForm = () => {
    if(this.state.title){
      return <EditProject theProject={this.state} getTheProject={this.getSingleProject} />
    } 
  } 

  renderAddTaskForm = () => {
    if(!this.state.title){
        this.getSingleProject();
      } else {     
        return <AddTask theProject={this.state} getTheProject={this.getSingleProject} />
      }
  }

  // DELETE PROJECT:
  deleteProject = () => {
    const { params } = this.props.match;
    console.log("Delete Before");
    axios.delete(`http://localhost:5000/api/projects/${params.id}`)
    .then( () =>{
        console.log("Delete");
        this.props.history.push('/projects'); //        
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        { this.state.tasks && this.state.tasks.map((task, index) => {
            return(
                <div key={ index }>
                {/* ... make each task's title a link that goes to the task details page */}
                    <Link to={`/projects/${this.state._id}/tasks/${task._id}`}> 
                        { task.title }
                    </Link>
                </div>
            )            
        }) }
        <div>{this.renderEditForm()} </div>
        <br />
        <button onClick={() => this.deleteProject()}>Delete project</button>
        <br/>
        <div>{this.renderAddTaskForm()} </div>
        <br/><br/><br/><br/><br/>  
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}
 
export default ProjectDetails;