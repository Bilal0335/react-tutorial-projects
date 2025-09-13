import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ], 

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deletedTodo: (id) => {},
  ToggleComplete: (id) => {},
});

// Custom hook to use Context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Directly export Provider
export const TodoProvider = TodoContext.Provider;
