import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import AddProject from './AddProjects'; 
 
class ProjectList extends Component {
  state = { listOfProjects: [] }

  getAllProjects = () =>{
    axios.get(`http://localhost:5000/api/projects`)
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      })
    })
  }
 
  componentDidMount() {
    this.getAllProjects();
  }
 
  render(){
    return(
      <div>
        <div class="project-list">
          { this.state.listOfProjects.map( project => {
            return (
              <div key={project._id} className="project">
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
                <h3>Description: {project.description}</h3>
                <button>Delete Project</button>
              </div>
            )})
          }
        </div>
        <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
        
      </div>
    )
  }
}
 
export default ProjectList;