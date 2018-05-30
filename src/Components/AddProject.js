import React, { Component } from 'react';

class AddProject extends Component {
static defaultProps = {
  categories : ['Web Design', 'Web Development', 'Mobile Development']
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key = {category} value="category">{category}</option>
    });
  return (
      <div >
<h3>Add Project</h3>
<form>
<div>
<lable>Title</lable><br/>
<input type="text" ref="citle" />
</div>

<div>
<lable>Category</lable><br/>
<select ref="category">
{categoryOptions}
</select>
</div>
</form>
      </div>
    );
  }
}

export default AddProject;
