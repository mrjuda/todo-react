// TodoItem.js

import React from "react";
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        /> {this.props.todo.title}
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;