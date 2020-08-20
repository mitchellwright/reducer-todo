import React from "react";

const Todo = ({ todo, handleChange }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
      <div className="mt-4 sm:mt-0 sm:col-span-2">
        <div className="max-w-lg">
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={todo.id}
                name={todo.id}
                onChange={handleChange}
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
            </div>
            <div className="ml-3 text-sm leading-5">
              <label
                htmlFor={todo.id}
                className={
                  todo.completed
                    ? "font-medium text-gray-700 line-through"
                    : "font-medium text-gray-700"
                }
              >
                {todo.item}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
