import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskText: "",
      editingTaskId: null, // Track which task is being edited
      editedText: "", // Store edited text
    };
  }

  handleChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  add = () => {
    if (this.state.taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: this.state.taskText,
      done: false,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      taskText: "",
    }));
  };

  toggleDone = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  startEditing = (id, text) => {
    this.setState({ editingTaskId: id, editedText: text });
  };

  handleEditChange = (event) => {
    this.setState({ editedText: event.target.value });
  };

  saveEdit = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, text: prevState.editedText } : task
      ),
      editingTaskId: null,
      editedText: "",
    }));
  };

  cancelEdit = () => {
    this.setState({ editingTaskId: null, editedText: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          className="textbox"
          value={this.state.taskText}
          onChange={this.handleChange}
        />
        <button onClick={this.add} type="submit">Add</button>

        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id} className={task.done ? "completed" : ""}>
              {this.state.editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={this.state.editedText}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.saveEdit(task.id)}>Save</button>
                  <button onClick={this.cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span onClick={() => this.toggleDone(task.id)}>{task.text}</span>
                  <button onClick={() => this.startEditing(task.id, task.text)}>Edit</button>
                  <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
