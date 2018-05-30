import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Project';
import AddProject from './Components/AddProject';


import './App.css';

class App extends Component {
constructor(){
  super();
  this.state ={
    projects:[]
  }
}

componentWillMount(){
//lifecycle method
//better implementation than putting data in constructor
//ajax and outside api
this.setState({projects:[{
  id:uuid.v4(),
  title:'Business Website',
  category: 'Web Design'
},{
  id:uuid.v4(),
  title:'Social App',
  category: 'Mobile Development'
},{
  id:uuid.v4(),
  title:'Ecommerce Shopping Cart',
  category: 'Web Development'
}
]});
}

handleAddProject(project){
  //console.log(project);
  //in react the state is immutable
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}

handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects = { this.state.projects } onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
