import { useState } from "react";

function Challenge3() {
   const [userInput, setUserInput] = useState("");

   function handleChangeUserInput(e) {
      const input = e.target.value;

      if (input === "open sesame") alert("gate opened...");

      setUserInput(input);
   }

   // if (userInput === "open sesame") alert("gate opened...");

   return (
      <div className="App">
         <h2>What's the secret phrase?</h2>

         <input
            type="text"
            placeholder="Super duper secret"
            value={userInput}
            onChange={handleChangeUserInput}
            // onChange={(e) => setUserInput(e.target.value)}
         />

         <p>
            Hint: It's <strong>open sesame</strong>
         </p>
      </div>
   );
}

export default Challenge3;
