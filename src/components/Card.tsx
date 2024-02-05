import { Todo } from "./Todo";
import { useState } from "react";
import { AddTodo } from "./AddTodo";
// import { todoProps } from "./Todo";
export default function Card() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  
  // const handleAddTodo = () => {
  //   setTodos([...todos, { id: todos.length + 1, text: "New todo" }]);
  // };
  const openAddTodo = () => {
    setShowAddTodo(true);
  }
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
      {showAddTodo && <AddTodo />}
        <div className="flex flex-col w-1/3 border rounded-md">
          <div className="relative flex items-center justify-center mb-4">
            <h1 className="flex justify-center text-3xl uppercase bold">
              TODO
            </h1>
            <button
              className="absolute right-0 p-4 underline cursor-pointer"
              onClick={openAddTodo}
            >
              Add
            </button>
          </div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
