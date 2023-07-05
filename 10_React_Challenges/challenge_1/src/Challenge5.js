import { useState } from "react";

function Challenge3() {
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [total, setTotal] = useState(num1 + num2);

   return (
      <div className="App">
         <h1>Adding Two Numbers</h1>

         <div className="number-inputs">
            <input
               type="number"
               placeholder="0"
               onChange={(e) => setNum1(+e.target.value)}
            />
            <input
               type="number"
               placeholder="0"
               onChange={(e) => setNum2(+e.target.value)}
            />
         </div>

         <button
            onClick={() => {
               setTotal(num1 + num2);
            }}
         >
            Add Them!
         </button>

         <h2>Total: {total}</h2>
      </div>
   );
}

export default Challenge3;
