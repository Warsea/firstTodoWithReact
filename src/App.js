import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import Addtodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife.',
        completed: false,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.id + 1,
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: 'Take out the trash',
//       completed: false,
//     },
//     {
//       id: 2,
//       title: 'Dinner with wife.',
//       completed: false,
//     },
//     {
//       id: 3,
//       title: 'Meeting with boss',
//       completed: false,
//     },
//   ]);

//   // const markComplete = (id) => {
//   //   setTodos((prevTodos) => {
//   //     const newTodos = prevTodos.map((todo) => {
//   //       if (todo.id === id) {
//   //         todo.completed = !todo.completed;
//   //       }
//   //       return newTodos;
//   //     });
//   //   });
//   // };

//   // const deleteItem = (id) => {
//   //   setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
//   // };

//   return (
//     <div className="App">
//       <div className="container">
//         {/* <Header />
//         <Todos
//           todos={todos}
//           // markComplete={markComplete}
//           // deleteItem={deleteItem}
//         /> */}
//         <h1>{todos.title}</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
