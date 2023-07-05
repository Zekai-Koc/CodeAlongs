import { useState } from "react";

function Challenge6() {
   const [topPosition, setTopPosition] = useState(0);

   function handleButtonMoveUp() {
      setTopPosition(topPosition - 10);
   }

   function handleButtonMoveDown() {
      setTopPosition(topPosition + 10);
   }

   return (
      <div className="App">
         <h1>Move the Box!</h1>

         {/* handle the click event on this button */}
         <button onClick={handleButtonMoveUp}>Move Up</button>
         <br />
         <button onClick={handleButtonMoveDown}>Move Down</button>

         {/* move this box using inline styles */}
         <div className="box" style={{ top: `${topPosition}px` }}></div>
      </div>
   );
}

export default Challenge6;
