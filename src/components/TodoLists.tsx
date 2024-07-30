"use client";

import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetTodo } from "@/redux/TodoSlice";

interface Todo {
  id: number;
  text: string;
}

const TodoLists = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <div className="m-4 flex flex-col items-center bg-card border border-border rounded-md shadow-lg ">
      {todoList.length > 0 && (
        <div className="w-[540px] m-2 ">
          {todoList.map((item: Todo) => (
            <div
              key={item.id}
              className="my-2 text-card-foreground px-4 py-2 text-gray-300 flex items-center rounded-md justify-between bg-[#222630] dark:bg-[#323642] "
              style={{ height: "67px", width: "540px" }}
            >
              <p>{item.text}</p>
              <FaTrash
                onClick={() => dispatch(deleteTodo(item.id))}
                className="text-lg text-gray-400 hover:text-red-600 cursor-pointer transition-colors duration-300"
              />
            </div>
          ))}
          {todoList.length > 0 && (
            <div className="w-full flex items-center justify-end">
              <button
                onClick={() => dispatch(resetTodo())}
                className="bg-card text-xs uppercase px-5 py-2 font-medium rounded-md text-card-foreground hover:text-red-600 transition-colors duration-300"
              >
                Remove all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoLists;
