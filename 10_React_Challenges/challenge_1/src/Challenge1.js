const user = {
   name: "Chris Sev",
   location: "Las Vegas",
   foodType: "Everything",
   age: 33,
   likes: "Coding into the wee hours of the morning",
   twitterUsername: "chris__sev",
   avatar:
      "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
};

function Challenge1() {
   return (
      <div className="App">
         <div className="user-deets">
            <a href="localhost:3000">
               <h2>{user.name}</h2>
            </a>

            <img src={user.avatar} alt={user.name} width="300"></img>
            <hr />
            <p>
               <strong>User Name</strong>
               <br />
               {user.name}
            </p>
            <p>
               <strong>location</strong>
               <br />
               {user.location}
            </p>
            <p>
               <strong>foodType</strong>
               <br />
               {user.foodType}
            </p>
            <p>
               <strong>age</strong>
               <br />
               {user.age}
            </p>
            <p>
               <strong>likes</strong>
               <br />
               {user.likes}
            </p>
            <p>
               <strong>twitterUsername</strong>
               <br />
               {user.twitterUsername}
            </p>
         </div>
      </div>
   );
}

export default Challenge1;
