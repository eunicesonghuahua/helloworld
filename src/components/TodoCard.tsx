import React, { useState } from "react";
import { Todo } from "../types";
type Props = {
  todo: Todo;
  todoIndex: number;
  DeleteTodo: (SelecteIndex: number) => void;
  SaveTodo: (editingTodo: string, editingIndex: number) => void;
};

export default function TodoCard(props: Props) {
  const { todo, todoIndex, DeleteTodo, SaveTodo } = props;
  const [task, setTask] = useState<string | undefined>(undefined);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!task?.trim()) {
        alert("You need to enter a todo");
        return;
      }
      SaveTodo(task, todoIndex);
      setTask(undefined);
    }
  };
  return (
    <div>
      <li className="todoItem">
        {task !== undefined ? (
          <input
            className="editingInput"
            value={task}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        ) : (
          <div className="text">
            <p className="todoText">{todo.text}</p>
            <p className="createdAt">{new Date(todo.createdAt).toString().slice(3, 21)}</p>
          </div>
        )}
        <div className="actionsContainer">
          {task !== undefined ? (
            <>
              <button
                onClick={() => {
                  if (!task.trim()) {
                    alert("You need to enter a todo");
                    return;
                  }
                  SaveTodo(task, todoIndex);
                  setTask(undefined);
                }}
              >
                <i className="fa-regular fa-floppy-disk"></i>
              </button>
              <button
                onClick={() => {
                  setTask(undefined);
                }}
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setTask(todo.text);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => {
                  DeleteTodo(todoIndex);
                }}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </>
          )}
        </div>
      </li>
    </div>
  );
}
