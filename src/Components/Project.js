import React, { Component } from 'react';
import Projectitem from './Projectitem'
class Projects extends Component {



  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(project =>{
return      (
<Projectitem key={Projects.title} project = {project} />
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

export default Projects;
