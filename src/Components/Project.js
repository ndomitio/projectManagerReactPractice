import React, { Component } from 'react';
import Projectitem from './Projectitem'
class Projects extends Component {



  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(project =>{
return      (
<Projectitem project = {project} />
);
});
        }
  return (
      <div className="Projects">
{projectitems}      </div>
    );
  }
}

export default Projects;
