import { v4 as uuidv4 } from "uuid";

const users = [
   {
      firstName: "John",
      lastaName: "Doe",
      age: 25,
      id: "e2b07a65-51ef-441a-b4b9-0d6a69743c09",
   },
   {
      firstName: "Jane",
      lastaName: "Doe",
      age: 23,
      id: "497c78e2-d593-43eb-910a-81c74555ead1",
   },
   {
      firstName: "Elisa",
      lastaName: "Doe",
      age: 3,
      id: "eafa7154-e473-45b6-aee8-5c09841f40f2",
   },
];

// let users;

export const createUser = (req, res) => {
   const { firstName, lastName, age } = req.body;
   const user = req.body;

   users.push({ ...user, id: uuidv4() });
   res.send(user);
};

export const getUsers = (req, res) => {
   if (users) {
      res.status(200);
      res.send(users);
   } else {
      // Simulating server error.
      res.status(500);
      res.send(`Server error! Please try it later!`);
   }
};

// export const getUser = (req, res) => {
//    const { id } = req.params;

//    const user = users.find((user) => user.id === id);

//    if (user) {
//       res.status(200);
//       res.send(user);
//    } else {
//       res.status(404);
//       res.send(`User with id: ${id} could not found!`);
//    }
// };

export const getUser = (req, res) => {
   try {
      const { id } = req.params;
      const user = users.find((user) => user.id === id);
      if (user) {
         res.status(200);
         res.send(user);
      } else {
         res.status(404);
         res.send(`User with id: ${id} could not found!`);
      }
   } catch (error) {
      res.status(500);
      res.send(`Server Error!`);
   }
};

export const deletUser = (req, res) => {
   const { id } = req.params;

   const indexUser = users.findIndex((user) => user.id === id);

   users.splice(indexUser, 1);

   res.send(users);
};

export const updateUser = (req, res) => {
   const { id } = req.params;
   const { firstName, lastaName, age } = req.body;

   const user = users.find((user) => user.id === id);

   user.firstName = firstName || user.firstName;
   user.lastaName = lastaName || user.lastaName;
   user.age = age || user.age;

   res.send(user);
};
