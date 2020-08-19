import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: e.target.id, completed: e.target.checked },
    });
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
            <label htmlFor={todo.id}>{todo.item}</label>
            <br />
          </div>
        );
      })}
      <input type="text" placeholder="Add new todo..." />
      <button>Add Item</button>
    </form>
  );
}

export default TodoList;
