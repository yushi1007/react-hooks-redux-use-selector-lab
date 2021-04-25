import React from "react";
// Import the useSelector hook in Users.js
import { useSelector } from "react-redux";

function Users() {
  // Call useSelector inside your component, passing in a callback function that accepts one argument, state, the current version of your store's state.
  const users = useSelector((state) => state.users);
  // Use state to access the array of users and return that from the callback function. Save the return value of calling useSelector to a variable so that you can use the users array in your component.
  const userCount = useSelector((state) => state.users.length);


  return (
    <div>
      <ul>
        Users!
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
