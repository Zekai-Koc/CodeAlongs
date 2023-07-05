import { useState } from "react";

function Challenge3() {
   const [displayName, setDisplayName] = useState("");
   const [displayAge, setDisplayAge] = useState("");

   function handleChangeName(e) {
      setDisplayName(e.target.value);
   }

   function handleChangeAge(e) {
      setDisplayAge(+e.target.value);
   }

   return (
      <div className="App">
         <div>
            <h2 className="subtitle is-4">Update Data from an input</h2>
         </div>

         {/* Display Data */}
         <div className="input-display">
            <p>Display Name: {displayName}</p>
            <p>Display Age: {displayAge}</p>
         </div>

         {/* Collect User Inputs */}
         <div className="inputs">
            {/* Input name */}
            <div className="field">
               <label className="label">Name: </label>
               <input
                  className="input"
                  type="text"
                  placeholder="William"
                  value={displayName}
                  onChange={handleChangeName}
               />
            </div>

            {/* Input age */}
            <div className="field">
               <label className="label">Age: </label>
               <input
                  className="input"
                  type="number"
                  placeholder="38"
                  value={displayAge}
                  onChange={handleChangeAge}
               />
            </div>
         </div>
      </div>
   );
}

export default Challenge3;
