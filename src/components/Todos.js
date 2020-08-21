import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;

// function Todos(props) {
//   return props.todos.map((todo) => (
//     // <TodoItems
//     //   todo={todo}
//     //   markComplete={props.markComplete}
//     //   deleteItem={props.deleteItem}
//     // />
//     <h1>hello mama</h1>
//   ));
// }

// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
// };

// export default Todos;
