import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

// const initialExpenses = [
//    { id: uuidv4(), charge: "rent", amount: 1600 },
//    { id: uuidv4(), charge: "car payment", amount: 400 },
//    { id: uuidv4(), charge: "credit card bill", amount: 1200 },
// ];

// console.log(initialExpenses);

const initialExpenses = localStorage.getItem("expenses")
   ? JSON.parse(localStorage.getItem("expenses"))
   : [];

function App() {
   // *** state values ***
   const [expenses, setExpenses] = useState(initialExpenses);
   const [charge, setCharge] = useState("");
   const [amount, setAmount] = useState("");
   const [alert, setAlert] = useState({ show: false });
   const [edit, setEdit] = useState(false);
   const [id, setId] = useState(0);

   useEffect(() => {
      console.log("useEffect called.");
      localStorage.setItem("expenses", JSON.stringify(expenses));
   }, [expenses]);

   // *** functionality ***
   const handleCharge = (e) => {
      setCharge(e.target.value);
   };

   const handleAmount = (e) => {
      setAmount(+e.target.value);
   };

   const handleAlert = ({ type, text }) => {
      setAlert({ show: true, type, text });
      setTimeout(() => {
         setAlert({ show: false });
      }, 2000);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (charge !== "" && amount > 0) {
         if (edit) {
            const tempExpenses = expenses.map((expense) => {
               return expense.id === id
                  ? { ...expense, charge, amount }
                  : expense;
            });
            setExpenses(tempExpenses);
            setEdit(false);
            handleAlert({ type: "success", text: "item edited..." });
         } else {
            const singleExpense = {
               id: uuidv4(),
               charge,
               amount,
            };
            setExpenses([...expenses, singleExpense]);
            handleAlert({ type: "success", text: "item added..." });
         }
         setCharge("");
         setAmount("");
      } else {
         handleAlert({ type: "danger", text: "invalid charge or amount" });
      }
   };

   const clearExpenses = () => {
      setExpenses([]);
      handleAlert({ type: "danger", text: "all expenses deleted!" });
   };

   const clearSingleExpense = (id) => {
      // console.log(id);
      setExpenses(expenses.filter((expense) => expense.id !== id));
      handleAlert({ type: "danger", text: "single expense deleted" });
   };

   const editSingleExpense = (id) => {
      const expense = expenses.find((expense) => expense.id === id);

      setCharge(expense.charge);
      setAmount(expense.amount);
      setEdit(true);
      setId(id);
   };

   return (
      <>
         {alert.show && <Alert type={alert.type} text={alert.text} />}
         <h1>Budget Calculator</h1>
         <main className="App">
            <ExpenseForm
               charge={charge}
               amount={amount}
               handleCharge={handleCharge}
               handleAmount={handleAmount}
               handleSubmit={handleSubmit}
               edit={edit}
            />
            <ExpenseList
               expenses={expenses}
               clearExpenses={clearExpenses}
               clearSingleExpense={clearSingleExpense}
               editSingleExpense={editSingleExpense}
            />
         </main>
         <h1>
            Total Spending:{" "}
            <span className="total">
               $
               {expenses.reduce((acc, curr) => {
                  return (acc += curr.amount);
               }, 0)}
            </span>
         </h1>
      </>
   );
}

export default App;
