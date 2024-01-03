import React from "react";
import { Link } from "react-router-dom";
import users from "./users";

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            users.map((user) => (
                <li>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))
        }      
      </ul>
    </div>
  );
};

export default UserList;
