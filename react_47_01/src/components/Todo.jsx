import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";

const Todo = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <ul>
        {status !== "idle" &&
          (status === "pending" ? (
            <h4>Loading</h4>
          ) : (
            todoList.map(({ id, title }) => {
              return <li key={id}>{title}</li>;
            })
          ))}
      </ul>
    </div>
  );
};

export default Todo;
