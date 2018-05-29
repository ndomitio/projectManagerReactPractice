import React, { Component } from 'react';

class Projectitem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className = "Project">
{this.props.project.title} = {this.props.project.category}
      </li>
    );
  }
}

export default Projectitem;
