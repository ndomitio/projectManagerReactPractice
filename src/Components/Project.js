import React, { Component } from 'react';
import Projectitem from './Projectitem'
import PropTypes from 'prop-types';

class Projects extends Component {
deleteProject(id){
  this.props.onDelete(id);
}


  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(project =>{
return      (
<Projectitem onDelete={this.deleteProject.bind(this)} key={Projects.title} project = {project} />
);
});
        }
  return (
      <div className="Projects">
      <h3>Latest Projects</h3>
{projectitems}      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Projects;
