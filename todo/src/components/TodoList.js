import React, { useReducer, useState } from "react";
import {
  todoReducer,
  initialState,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  ADD_TODO,
} from "../reducers/todoReducer";

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: { id: e.target.id, completed: e.target.checked },
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const btnText = e.target.textContent;
    if (btnText === "Clear Completed Todos") {
      dispatch({ type: CLEAR_COMPLETED });
    } else if (btnText === "Add Item") {
      dispatch({ type: ADD_TODO, payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <form>
      {state.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              name={todo.id}
              id={todo.id}
              onChange={handleChange}
            />
            <label
              className={todo.completed ? "completed" : ""}
              htmlFor={todo.id}
            >
              {todo.item}
            </label>
            <br />
          </div>
        );
      })}
      <input
        type="text"
        name="new-todo"
        id="new-todo"
        placeholder="Add new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add Item</button>
      <br />
      <button onClick={handleClick}>Clear Completed Todos</button>
    </form>
  );
}

export default TodoList;
