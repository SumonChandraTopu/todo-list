import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  // console.log(todos);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
