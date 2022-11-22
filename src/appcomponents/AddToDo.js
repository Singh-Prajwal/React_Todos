import React, { useState } from "react";

export const AddToDo = (props) => {
  const [title, settitle] = useState(" ");
  const [desc, setdesc] = useState(" ");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {alert("Please add both task and desc");}
    else{
    props.addToDo(title, desc);
    setdesc("");
    settitle("");
        }
    };
  return (
    <div className="container my-3">
      <h4 className="text-center">Add Some Todo Task</h4>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Add Title</label>
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>description</label>
          <br />
          <input
            value={desc}
            type="text"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            placeholder="Enter the task briefly"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success my-3">
          Submit
        </button>
      </form>
    </div>
  );
};
