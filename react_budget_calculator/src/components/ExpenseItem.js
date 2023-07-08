import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, clearSingleExpense, editSingleExpense }) => {
   const { id, charge, amount } = expense;

   return (
      <li className="item">
         <div className="info">
            <span className="expense">{charge} </span>
            <span className="amount">${amount} </span>
         </div>
         <div>
            <button
               className="edit-btn"
               aria-label="edit button"
               onClick={() => editSingleExpense(id)}
            >
               <MdEdit />
            </button>
            <button
               className="clear-btn"
               aria-label="delete button"
               onClick={() => clearSingleExpense(id)}
            >
               <MdDelete />
            </button>
         </div>
      </li>
   );
};

export default ExpenseItem;
