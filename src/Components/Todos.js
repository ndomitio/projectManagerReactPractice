import React, { Component } from 'react';
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types';

class ToDos extends Component {
deleteProject(id){
  this.props.onDelete(id);
}


  render() {
    let ToDoItem;
    if(this.props.todos){
      toDoItems = this.props.Todos.map(todo =>{
return      (
<ToDoItem key={toDo.title} toDo = {todo} />
);
});
        }
  return (
      <div className="Todos">
      <h3>ToDo List</h3>
{ToDoItem}
</div>
    );
  }
}

ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Todos;
