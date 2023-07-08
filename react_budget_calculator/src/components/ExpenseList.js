import Item from "./ExpenseItem";

import React from "react";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({
   expenses,
   clearExpenses,
   clearSingleExpense,
   editSingleExpense,
}) => {
   return (
      <>
         <ul className="list">
            {expenses.map((expense) => {
               return (
                  <Item
                     key={expense.id}
                     expense={expense}
                     clearSingleExpense={clearSingleExpense}
                     editSingleExpense={editSingleExpense}
                  />
               );
            })}
         </ul>
         {expenses.length > 0 && (
            <button className="btn" onClick={clearExpenses}>
               Clear Expenses
               <MdDelete className="btn-icon" />
            </button>
         )}
      </>
   );
};

export default ExpenseList;
