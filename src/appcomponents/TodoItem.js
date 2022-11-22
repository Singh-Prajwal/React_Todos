import React from "react";
import './todoItem.css';
export const TodoItem = ({ todo, onDelete }) => {
  
  return (
    <>
      <div className="card text-center my-4 custom" >
        <h4 className="card-title my-1">
          {todo.sno}. {todo.title}
        </h4>

        <h6 className="card-body">{todo.desc}</h6>

        <div className="my-2 text-center">
          <button
            className="btn btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
