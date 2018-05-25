import React, { Component } from 'react';

class Projects extends Component {



  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(Project =>{
        console.log(Project);
      });
        }
    console.log(this.props);
    return (
      <div className="Projects">
    My Projects
      </div>
    );
  }
}

export default Projects;
