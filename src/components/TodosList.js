// TodosList.js

import React from 'react';
class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </div>
    );
  }
}

export default TodosList;