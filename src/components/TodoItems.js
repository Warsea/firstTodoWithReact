import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10x',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteItem.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '3px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItems;

// function TodoItems(props) {
//   // const markComplete = useCallback((event) => {
//   //   event.preventDefault();
//   //   props.markComplete();
//   // });

//   const getStyle = () => {
//     return {
//       background: '#f4f4f4',
//       padding: '10x',
//       borderBottom: '1px #ccc dotted',
//       textDecoration: this.props.todo.completed ? 'line-through' : 'none',
//     };
//   };

//   return (
//     <div style={getStyle()}>
//       <p>
//         <input
//           type="checkbox"
//           onChange={props.markComplete.bind(props.todo.id)}
//         />{' '}
//         {props.todo.title}
//         <button style={btnStyle} onClick={props.deleteItem.bind(props.todo.id)}>
//           x
//         </button>
//       </p>
//     </div>
//   );
// }

// TodoItems.propTypes = {
//   todo: PropTypes.object.isRequired,
// };

// const btnStyle = {
//   background: '#ff0000',
//   color: '#fff',
//   border: 'none',
//   padding: '3px 8px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right',
// };

// export default TodoItems;
