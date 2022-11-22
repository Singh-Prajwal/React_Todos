import "./App.css";
import Header from "./appcomponents/Header";
import  "./logo.svg";
import Footer from "./appcomponents/Footer";
import { AddToDo } from "./appcomponents/AddToDo";
import Todos from "./appcomponents/Todos";
import { About } from "./appcomponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Delete button is clicked", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (title, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        {/* <img src={logo} alt="my logo"/> */}
        <Header Title="My React App" searchBar={true} />
        <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          <Route
            path="/"
            element={ 
                <>
                  <AddToDo addToDo={addToDo} />
                  <hr />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
          ></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
