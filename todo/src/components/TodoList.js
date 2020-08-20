import React, { useReducer, useState } from "react";
import {
  todoReducer,
  initialState,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  ADD_TODO,
} from "../reducers/todoReducer";
import Todo from "./Todo";

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
    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div>
        <form>
          <div className="mt-2 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Todo List
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                Keep track of your todos. Add new items, complete items, and
                clear completed items.
              </p>
            </div>
            <div className="my-6 sm:mt-5">
              <div className="sm:border-t sm:border-gray-200 sm:pt-5">
                {state.map((todo) => {
                  return (
                    <Todo
                      todo={todo}
                      handleChange={handleChange}
                      key={todo.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Add Todo
            </label>
            <div className="w-full max-w-sm">
              <div className="mt-5 flex rounded-md shadow-sm">
                <input
                  className="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5 border border-gray-300"
                  name="new-todo"
                  id="new-todo"
                  placeholder="Add new todo..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />

                <button
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  onClick={handleClick}
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
          <br />
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              onClick={handleClick}
            >
              Clear Completed Todos
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default TodoList;
