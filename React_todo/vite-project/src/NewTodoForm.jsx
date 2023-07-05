import { useState } from "react";
import "./styles.css";

export default function NewTodoForm({ onSubmit }) {
   const [newItem, setNewItem] = useState("");

   function handleSubmit(e) {
      e.preventDefault();

      if (newItem === "") return;

      // setTodos((currentValue) => {
      //    return [
      //       ...currentValue,
      //       { id: crypto.randomUUID(), title: newItem, completed: false },
      //    ];
      // });

      onSubmit(newItem);

      setNewItem("");
   }

   return (
      <form className="new-item-form" onSubmit={handleSubmit}>
         <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
               type="text"
               id="item"
               value={newItem}
               onChange={(e) => setNewItem(e.target.value)}
            />
         </div>
         <button className="btn">Add</button>
      </form>
   );
}
