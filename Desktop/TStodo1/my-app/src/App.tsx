import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import "./App.css";

export interface Todo {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([
    { id: 1, title: "물마시기", content: "하루에 세번 물마시기" },
  ]);

  const [doneTodo, setDoneTodo] = useState<Todo[]>([
    { id: 2, title: "운동하기", content: "공복유산소" },
  ]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //할일 추가 기능
  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + doneTodo.length + 1,
      title: title,
      content: content,
    };
    if (title === "" && content === "") alert("형식을 채워주세요");
    else setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  //todo 삭제
  const deleteTodoHandler = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  //done 삭제
  const deleteDoneHandler = (id: number) => {
    setDoneTodo(doneTodo.filter((item) => item.id !== id));
  };

  //todo -> done
  const doneTodoHandler = (item: Todo) => {
    const newDoneTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((i) => i.id !== item.id));
  };

  // done -> todo
  const doneResetHandler = (item: Todo) => {
    const newTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((i) => i.id !== item.id));
  };

  return (
    <div className="layout">
      <div className="input-wrpper">
        <span>제목</span>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span>내용</span>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button className="inputBtn" onClick={addTodoHandler}>
          추가하기
        </button>
      </div>
      <div className="todo-container">
        <h1> 📝 In progress</h1>
        <div className="todo-lists">
          {todo.map((todoItem) => {
            return (
              <TodoTemplate
                todo={todoItem}
                key={todoItem.id}
                firstBtnHandler={deleteTodoHandler}
                secondBtnHandler={doneTodoHandler}
                firstBtn="삭제하기"
                secondBtn="완료하기"
              />
            );
          })}
        </div>
        <h1> 💯 Done</h1>
        <div>
          <div className="todo-lists">
            {doneTodo.map((doneTodoItem) => {
              return (
                <TodoTemplate
                  todo={doneTodoItem}
                  key={doneTodoItem.id}
                  firstBtnHandler={deleteDoneHandler}
                  secondBtnHandler={doneResetHandler}
                  firstBtn="삭제하기"
                  secondBtn="취소하기"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
