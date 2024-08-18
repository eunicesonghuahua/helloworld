import React, { useState } from "react";
type Props = { AddTodo: (newTodo: string) => void };

export default function TodoInput(props: Props) {
  const { AddTodo } = props;
  const [todoValue, setTodoValue] = useState<string>("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todoValue.trim() === "") {
        alert("You need enter tods");
        return;
      }
      AddTodo(todoValue);
      setTodoValue("");
    }
  };
  return (
    <header>
      <input
        placeholder="Enter todos"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        onClick={() => {
          if (todoValue.trim() === "") {
            alert("You need enter tods");
            return;
          }

          AddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
