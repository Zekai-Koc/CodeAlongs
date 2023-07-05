const userData = require("./challenge2_user_data");
const { v4: uuidv4 } = require("uuid");

// console.log(userData.userData[0]);
function Challenge2() {
   return (
      <div className="App">
         <div className="page-deets">
            <h2>Loop Over an Array of Data</h2>
         </div>

         {/* Iterate over imported array in userData */}
         <div className="users">
            {userData.userData.map((user) => {
               return (
                  <div key={uuidv4()}>
                     {user.name} <br />
                     {user.location} <br />
                     {user.car}
                  </div>
               );
            })}

            {/* display data here */}
            {/* Display each data in array in a card */}
            {/* Each card must have a 'key' attribute */}
         </div>
      </div>
   );
}

export default Challenge2;
