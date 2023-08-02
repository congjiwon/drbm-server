import React from "react";
import { Todo } from "../App";

export interface TodoProps {
  todo: Todo;
  firstBtnHandler: (id: number) => void;
  secondBtnHandler: (todo: Todo) => void;
  firstBtn: string;
  secondBtn: string;
}

function TodoTemplate(props: TodoProps) {
  const { todo, firstBtn, secondBtn } = props;
  return (
    <div className="todo-box">
      <p className="title">{todo.title}</p>
      <p className="content">{todo.content}</p>
      <button
        className="first-btn"
        onClick={() => props.firstBtnHandler(todo.id)}
      >
        {firstBtn}
      </button>
      <button
        className="second-btn"
        onClick={() => props.secondBtnHandler(todo)}
      >
        {secondBtn}
      </button>
    </div>
  );
}

export default TodoTemplate;
