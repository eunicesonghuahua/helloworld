import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function AddTodo(newTodo: string) {
    const newTodoList = [...todos, { text: newTodo, createdAt: Date.now(), completed: false }];
    setTodos(newTodoList);
  }
  function DeleteTodo(SelecteIndex: number) {
    const retainedTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== SelecteIndex;
    });
    setTodos(retainedTodoList);
  }
  function SaveTodo(editingTodo: string, editingIndex: number) {
    const newTodoList = [...todos];
    newTodoList[editingIndex] = { ...newTodoList[editingIndex], text: editingTodo };
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput AddTodo={AddTodo} />
      <TodoList todos={todos} DeleteTodo={DeleteTodo} SaveTodo={SaveTodo} />
    </>
  );
}
