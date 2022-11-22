import React from "react";
import { TodoItem } from "./TodoItem";
import './todoItem.css';

export default function Todos(props) {
  let todos={
    minHeight: "50vh"
  }
  return (
    <div className="container " style={todos}>
      <h3 className="text-center my-3">Todo list</h3>
      <div className="container">
        {props.todos.length ? (
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })
        ) : (
          <div className="card text-center my-3 custom" >
            <h4 className="card-title my-1">No Task Left</h4>
            <h6 className="card-body">Add Some Tasks</h6>
          </div>
        )}
      </div>
    </div>
  );
}
