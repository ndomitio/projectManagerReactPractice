import React, { Component } from 'react';
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
  title:'Business Website',
  category: 'Web Design'
},{
  title:'Social App',
  category: 'Mobile Development'
},{
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

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects = { this.state.projects }/>
      </div>
    );
  }
}

export default App;
