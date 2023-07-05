import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
   const [todos, setTodos] = useState([]);

   function addTodo(title) {
      setTodos((currentValue) => {
         return [
            ...currentValue,
            { id: crypto.randomUUID(), title, completed: false },
         ];
      });
   }

   function toggleTodo(id, completed) {
      setTodos((currentTodos) => {
         return currentTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, completed };
            }

            return todo;
         });
      });
   }

   function deleteTodo(id) {
      setTodos((currentTodos) => {
         return currentTodos.filter((todo) => todo.id !== id);
      });
   }

   return (
      <>
         <NewTodoForm onSubmit={addTodo} />
         <h1 className="header">Todo List</h1>
         <ul className="list">
            {todos.length === 0 && "No Todo!"}
            {todos.map((todo) => {
               return (
                  <li key={todo.id}>
                     <label>
                        <input
                           type="checkbox"
                           checked={todo.completed}
                           onChange={(e) =>
                              toggleTodo(todo.id, e.target.checked)
                           }
                        />
                        {todo.title}
                     </label>
                     <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(todo.id)}
                     >
                        Delete
                     </button>
                  </li>
               );
            })}
         </ul>
         <TodoList todos={todos} />
      </>
   );
}