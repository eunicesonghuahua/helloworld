import React from "react";
import TodoCard from "./TodoCard";
import { Todo } from "../types";
type Props = {
  todos: Todo[];
  DeleteTodo: (SelecteIindex: number) => void;
  SaveTodo: (editingTodo: string, editingIndex: number) => void;
};

export default function TodoList(props: Props) {
  const { todos, SaveTodo, DeleteTodo } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return <TodoCard {...props} todo={todo} todoIndex={todoIndex} SaveTodo={SaveTodo} />;
      })}
    </ul>
  );
}
